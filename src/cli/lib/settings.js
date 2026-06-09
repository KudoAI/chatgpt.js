const fs = require('fs'),
      path = require('path'),
      string = require('../../lib/string')

;(globalThis.cli ??= {}).config = {}

module.exports = {
    configFilename: '.chatgpt.config.mjs',
    configOnlyKeys: ['autoClear'],

    controls: {
        provider: { type: 'param', regex: /^--?p(?:rovider)?(?:[=\s].*|$)/, defaultVal: 'auto' },
        uiLang: { type: 'param', valType: 'langCode', regex: /^--?u(?:i[-_]?lang)?(?:[=\s].*|$)/ },
        query: {
            type: 'param', valRequired: false,
            regex: /^--?(?:q|query|ask|send)(?:[=\s].*|$)/, get defaultVal() { return cli.msgs.query_hi }
        },
        summarize: { type: 'param', valType: 'filepath', allowText: true, regex: /^--?s(?:ummarize)?(?:[=\s].*|$)/ },
        asciiArt: { type: 'param', valRequired: false, regex: /^--?a(?:scii[-_]?)?a(?:rt)?(?:[=\s].*|$)/ },
        config: { type: 'param', valType: 'filepath', regex: /^--?c(?:onfig)?(?:[=\s].*|$)/ },
        maxChars: {
            type: 'param', valType: 'positiveInt', regex: /^--?m(?:ax[-_]?chars)?(?:[=\s].*|$)/, defaultVal: 250 },
        maxTokens: {
            type: 'param', valType: 'positiveInt', regex: /^--(?:k|max[-_]?tokens)(?:[=\s].*|$)/, defaultVal: null },
        turnsToPreserve: { type: 'param', valType: 'positiveInt', regex: /^--?t(?:urns)?(?:[=\s].*|$)/, defaultVal: 3 },
        copy: { type: 'flag', regex: /^--?(?:x|copy)$/ },
        noSuggest: { type: 'flag', regex: /^--?(?:A|no[-_]?suggest)$/ },
        quietMode: { type: 'flag', regex: /^--?(?:V|quiet)(?:[-_]?mode)?$/ },
        init: { type: 'cmd', regex: /^-{0,2}i(?:nit)?$/ },
        interactive: { type: 'cmd', regex: /^--?(?:I|interactive)(?:[-_]?mode)?$/ },
        joke: { type: 'cmd', regex: /^--?j(?:oke)?$/ },
        randomAnswer: { type: 'cmd', regex: /^--?r(?:andom[-_]?answer)?$/ },
        commitMsg: { type: 'cmd', regex: /^--?(?:g|commit[-_]?me?ss?a?ge?)$/ },
        clear: { type: 'cmd', regex: /^--?(?:C|clear?)$/ },
        help: { type: 'cmd', regex: /^--?h(?:elp)?$/ },
        version: { type: 'cmd', regex: /^--?ve?r?s?i?o?n?$/ },
        stats: { type: 'cmd', regex: /^--?(?:S|stats?)$/ }
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
            log.debug('All cli.config default vals set!', { type: 'config' })
        }

        if (!cli.configPathTried) { // init config file path
            const configArg = env.args.find(arg => this.controls.config.regex.test(arg))

            if (configArg) { // resolve input path, then validate
                if (!/=/.test(configArg))
                    log.errorAndExit(`[${configArg}] ${ cli.msgs?.error_mustIncludePath || 'must include =path' }`)
                const inputPath = configArg.split('=')[1]
                cli.configPath = path.isAbsolute(inputPath) ? inputPath : path.resolve(process.cwd(), inputPath)
                if (!fs.existsSync(cli.configPath))
                    log.configURLandExit(
                        `${ cli.msgs?.error_configFileNotFound || 'Config file not found' }:`, cli.configPath)

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
                    log.configURLandExit(
                        `${ cli.msgs?.error_invalidConfigFile || 'Config file must export an object' }.`)
                ;(arguments.length ? inputCtrlKeys : Object.keys(fileConfig)).forEach(key => {
                    if (!(key in fileConfig)) return
                    const val = fileConfig[key], ctrl = this.controls[key]
                    if (!ctrl) { // allow config-only keys
                        if (module.exports.configOnlyKeys?.includes(key)) return cli.config[key] = val
                        else if (this.configFileKeyWhitelist && !this.configFileKeyWhitelist.includes(key))
                            log.invalidConfigKey(key)
                        return
                    } else if (key.startsWith('legacy_') && ctrl.replacedBy) {
                        if (this.isNegKey(key) != this.isNegKey(ctrl.replacedBy))
                            cli.config[ctrl.replacedBy] = !val // assign opposite val to current key
                        else // assign direct val to current key
                            cli.config[ctrl.replacedBy] = val
                        return log.configKeyReplacedBy(key, ctrl.replacedBy, val)
                    }
                    cli.config[key] = val
                })
                if (!arguments.length) log.debug('Config file loaded!', { type: 'config' })
            } catch (err) {
                log.configURLandExit(`${ cli.msgs?.error_failedToLoadConfigFile || 'Failed to load config file' }:`,
                    cli.configPath, `\n${err.message}`) }

        for (let i = 0 ; i < env.args.length ; i++) { // load from CLI arg (overriding config file loads)
            const arg = env.args[i]
            if (/^[^-]|--?(?:config|debug)/.test(arg) && arg != 'init') continue
            const ctrlKey = Object.keys(this.controls).find(key => this.controls[key]?.regex?.test(arg))
            if (!ctrlKey) log.errorAndExit(`[${arg}] ${ cli.msgs?.error_notRecognized || 'not recognized' }.`)
            if (!inputCtrlKeys.includes(ctrlKey)) continue // don't process env.args when load() specific keys
            if (ctrlKey.startsWith('legacy_')) { log.argDoesNothing(arg) ; continue }
            const ctrl = this.controls[ctrlKey]
            if (ctrl.mode) // set cli.config.mode to mode name
                cli.config.mode = ctrlKey.replace(/mode$/i, '').toLowerCase()
            else { // init flag/param/cmd cli.config[ctrlKey] val
                if (ctrl.type == 'param') {
                    const rawVal = arg.includes('=') ? arg.split('=')[1]?.trim() || ''
                                 : (i +1 < env.args.length && !env.args[i +1].startsWith('-')) ? env.args[++i]
                                 : true // val-less --param passed
                    if (typeof rawVal == 'string' && string.looksLikeURL(rawVal))
                        cli.config[ctrlKey] = { type: 'url', value: rawVal }
                    else
                        cli.config[ctrlKey] = rawVal
                } else // flag/cmd
                    cli.config[ctrlKey] = true
            }
        }
        if (!arguments.length) log.debug('Args parsed!', { type: 'config' })

        this.parseValidateConfig(inputCtrlKeys)
        if (!arguments.length) log.debug('All cli.config vals parsed/validated!', { type: 'config' })

        return inputCtrlKeys.length == 1 ? cli.config[inputCtrlKeys[0]] : cli.config
    },

    parseValidateConfig(ctrlKeys = Object.keys(this.controls)) {
        for (const key of [].concat(ctrlKeys)) {
            const ctrl = this.controls[key], configVal = cli.config[key]

            if (ctrl.parser && !ctrl.parsed) {
                cli.config[key] = ctrl.parser(configVal) ; ctrl.parsed = true }

            if (ctrl.type == 'param' && ctrl.valRequired != false && configVal === true)
                log.errorAndExit(`[${key}] ${ cli.msgs?.error_requiresVal || 'requires a value' }.`)

            if (ctrl.valType) ({
                filepath() {
                    if (typeof configVal == 'object' && configVal.type == 'url') return
                    if (configVal && (!ctrl.allowText || string.looksLikePath(configVal))
                        && !fs.existsSync(configVal)
                    ) log.errorAndExit(`[${key}] ${
                        cli.msgs?.error_invalidFilepath || 'must be a valid existing file path. Got' }: ${configVal}`)
                },
                langCode() {
                    if (configVal && !require('./language').validateLangCode(configVal))
                        log.errorAndExit(`[${key}] ${
                            cli.msgs?.error_invalidLangCode || 'is an invalid language code' }: ${configVal}`)
                },
                positiveInt() {
                    const numVal = parseInt(configVal, 10)
                    if (numVal && isNaN(numVal) || numVal < 1)
                        log.errorAndExit(`[${key}] ${
                            cli.msgs?.error_nonPositiveNum || 'argument can only be > 0' }: ${configVal}`)
                    cli.config[key] = numVal
                }
            })[ctrl.valType]()
        }
    }
}
