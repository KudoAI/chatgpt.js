const fs = require('fs'),
      path = require('path')

;(globalThis.cli ??= {}).config = {}

module.exports = {
    configFilename: '.chatgpt.config.mjs',

    controls: {
        provider: { type: 'param', regex: /^--?p(?:rovider)?$/, defaultVal: 'openrouter' },
        query: { type: 'param', regex: /^--?(?:q|query|ask|send)?$/, defaultVal: 'hi' },
        uiLang: { type: 'param', valType: 'langCode', regex: /^--?ui[-_]?lang(?:[=\s].*|$)/ },
        config: { type: 'param', valType: 'filepath', regex: /^--?config(?:[=\s].*|$)/ },
        quietMode: { type: 'flag', regex: /^--?(?:V|quiet)?(?:[-_]?mode)?$/ },
        init: { type: 'cmd', regex: /^-{0,2}i(?:nit)?$/ },
        help: { type: 'cmd', regex: /^--?h(?:elp)?$/ },
        version: { type: 'cmd', regex: /^--?ve?r?s?i?o?n?$/ },
        stats: { type: 'cmd', regex: /^--?stats?$/ }
    },

    isNegKey(key) { return /^(?:no|disable|exclude)[A-Z]/.test(key) },

    load(ctrlKeys = Object.keys(this.controls)) {
        const inputCtrlKeys = [].concat(ctrlKeys) // force array

        if (!cli.defaultsSet && !arguments.length) { // init all defaults on arg-less load()
            inputCtrlKeys.forEach(key => {
                const ctrl = this.controls[key] ; if (ctrl.mode || key.startsWith('legacy_')) return
                cli.config[key] ??= ctrl.defaultVal ?? ( ctrl.type == 'param' ? '' : false )
            })
            cli.defaultsSet = true
            log.debug('All cli.config default vals set!')
        }

        if (!cli.configPathTried) { // init config file path
            const configArg = env.args.find(arg => this.controls.config.regex.test(arg))

            if (configArg) { // resolve input path, then validate
                if (!/=/.test(configArg))
                    log.errorAndExit(`[${configArg}] ${cli.msgs.error_mustIncludePath}`)
                const inputPath = configArg.split('=')[1]
                cli.configPath = path.isAbsolute(inputPath) ? inputPath : path.resolve(process.cwd(), inputPath)
                if (!fs.existsSync(cli.configPath))
                    log.configURLandExit(`${cli.msgs.error_configFileNotFound}:`, cli.configPath)

            } else // auto-discover .config.[mc]?js file
                for (const configExt of ['.mjs', '.cjs', '.js']) {
                    const autoPath = path.resolve(process.cwd(), this.configFilename.replace(/\.[^.]+$/, configExt))
                    if (fs.existsSync(autoPath)) { cli.configPath = autoPath ; break }
                }

            cli.configPathTried = true
        }

        if (cli.configPath) // load from config file
            try {
                const mod = require(cli.configPath), fileConfig = mod?.default ?? mod
                if (!fileConfig || typeof fileConfig != 'object')
                    log.configURLandExit(`${cli.msgs.error_invalidConfigFile}.`)
                ;(arguments.length ? inputCtrlKeys : Object.keys(fileConfig)).forEach(key => {
                    if (!(key in fileConfig)) return
                    const val = fileConfig[key], ctrl = this.controls[key]
                    if (!ctrl) {
                        if (this.configFileKeyWhitelist && !this.configFileKeyWhitelist.includes(key))
                            log.invalidConfigKey(key)
                        return
                    } else if (key.startsWith('legacy_') && ctrl.replacedBy) {
                        if (this.isNegKey(key) != this.isNegKey(ctrl.replacedBy))
                            cli.config[ctrl.replacedBy] = !val  // assign opposite val to current key
                        else // assign direct val to current key
                            cli.config[ctrl.replacedBy] = val
                        return log.configKeyReplacedBy(key, ctrl.replacedBy, val)
                    }
                    cli.config[key] = val
                })
                if (!arguments.length) log.debug('Config file loaded!')
            } catch (err) {
                log.configURLandExit(`${cli.msgs.error_failedToLoadConfigFile}:`, cli.configPath, `\n${err.message}`) }

        for (let i = 0 ; i < env.args.length ; i++) { // load from CLI arg (overriding config file loads)
            const arg = env.args[i]
            if (/^[^-]|--?(?:config|debug)/.test(arg) && arg != 'init') continue
            const ctrlKey = Object.keys(this.controls).find(key => this.controls[key]?.regex?.test(arg))
            if (!ctrlKey && cli.msgs) log.errorAndExit(`[${arg}] ${cli.msgs.error_notRecognized}.`)
            if (!inputCtrlKeys.includes(ctrlKey)) return // don't process env.args when load() specific keys
            if (ctrlKey.startsWith('legacy_')) { log.argDoesNothing(arg) ; continue }
            const ctrl = this.controls[ctrlKey]
            if (ctrl.mode) // set cli.config.mode to mode name
                cli.config.mode = ctrlKey.replace(/mode$/i, '').toLowerCase()
            else { // init flag/param/cmd cli.config[ctrlKey] val
                if (ctrl.type == 'param')
                    cli.config[ctrlKey] =
                        arg.includes('=') ? arg.split('=')[1]?.trim() || '' // =val
                      : (i +1 < env.args.length && !env.args[i +1].startsWith('-')) ? env.args[++i] // dashless val
                      : '' // val-less --param passed
                else // flag/cmd
                    cli.config[ctrlKey] = true
            }
        }

        if (!arguments.length) log.debug('Args parsed!')

        this.parseValidateConfig(inputCtrlKeys)
        if (!arguments.length) log.debug('All cli.config vals parsed/validated!')

        return inputCtrlKeys.length == 1 ? cli.config[inputCtrlKeys[0]] : cli.config
    },

    parseValidateConfig(ctrlKeys = Object.keys(this.controls)) {
        const language = require('./language')
        for (const key of [].concat(ctrlKeys)) {
            const ctrl = this.controls[key], configVal = cli.config[key]

            if (ctrl.parser && !ctrl.parsed) {
                cli.config[key] = ctrl.parser(configVal) ; ctrl.parsed = true }

            if (ctrl.valType) ({
                positiveInt() {
                    const numVal = parseInt(configVal, 10)
                    if (isNaN(numVal) || numVal < 1)
                        log.errorAndExit(`[${key}] ${cli.msgs.error_nonPositiveNum}: ${configVal}`)
                    cli.config[key] = numVal
                },
                filepath() {
                    if (configVal && !fs.existsSync(configVal))
                        log.errorAndExit(`[${key}] ${cli.msgs.error_invalidFilepath}: ${configVal}`)
                },
                langCode() {
                    if (configVal && !language.validateLangCode(configVal))
                        log.errorAndExit(`[${key}] ${cli.msgs.error_invalidLangCode}: ${configVal}`)
                }
            })[ctrl.valType]()
        }
    }
}
