const data = require('./data'),
      fs = require('fs'),
      os = require('os'),
      path = require('path'),
      string = require('./string')

;(globalThis.cli ??= {}).config = {}

module.exports = {
    configFilename: '.chatgpt.config.mjs',
    configOnlyKeys: ['autoClear'],

    controls: {
        provider: {
            display: { cli: '-p, --provider', repl: '/provider <name>' },
            type: 'param', defaultVal: 'auto',
            regex: /^--?p(?:rovider)?(?:[=\s].*|$)/
        },
        uiLang: {
            display: { cli: '-u, --ui-lang', repl: '/uilang <code>' },
            type: 'param', valType: 'langCode',
            regex: /^--?u(?:i[-_]?lang(?:uage)?)?(?:[=\s].*|$)/
        },
        replyLang: {
            display: { cli: '-L, --reply-lang', repl: '/replylang <text>' },
            type: 'param', valType: 'langCode',
            regex: /^--?(?:L|reply[-_]?lang(?:uage)?)?(?:[=\s].*|$)/
        },
        query: {
            display: { cli: '-q, --query' },
            type: 'param', valRequired: false,
            regex: /^--?(?:q|query|ask|send)(?:[=\s].*|$)/,
            get defaultVal() { return cli.msgs.query_hi }
        },
        summarize: {
            display: { cli: '-s, --summarize', repl: '/summarize <text|filepath|url>' },
            type: 'param', valType: 'path', allowText: true,
            regex: /^--?s(?:ummarize)?(?:[=\s].*|$)/
        },
        actAs: {
            display: { cli: '-P, --act-as', repl: '/actas <persona>' },
            type: 'param',
            regex: /^--?(?:P|act[-_]?as)(?:[=\s].*|$)/
        },
        asciiArt: {
            display: { cli: '-a, --ascii-art', repl: '/ascii [subject]' },
            type: 'param', valRequired: false,
            regex: /^--?a(?:scii[-_]?)?a(?:rt)?(?:[=\s].*|$)/
        },
        commitMsgExample: {
            display: { cli: '-G, --commit-msg-example', repl: '/commitmsgexample <msg>' },
            type: 'param',
            regex: /^--?(?:G|commit[-_]?me?ss?a?ge?[-_]?example)$/
        },
        config: {
            display: { cli: '-c, --config', repl: '/config <filepath|url>' },
            type: 'param', valType: 'path',
            regex: /^--?c(?:onfig)?(?:[=\s].*|$)/
        },
        maxChars: {
            display: { cli: '-m, --max-chars', repl: '/maxchars <num>' },
            type: 'param', valType: 'positiveInt',
            regex: /^--?m(?:ax[-_]?chars)?(?:[=\s].*|$)/, defaultVal: 250
        },
        maxTokens: {
            display: { cli: '-k, --max-tokens', repl: '/maxtokens <num>' },
            type: 'param', valType: 'positiveInt',
            regex: /^--(?:k|max[-_]?tokens)(?:[=\s].*|$)/
        },
        turnsToPreserve: {
            display: { cli: '-t, --turns', repl: '/turns <num>' },
            type: 'param', valType: 'positiveInt',
            regex: /^--?t(?:urns)?(?:[=\s].*|$)/, defaultVal: 3
        },
        sentiment: {
            display: { cli: '-T, --sentiment', repl: '/sentiment <text|file|url>' },
            type: 'param', valType: 'path', allowText: true,
            regex: /^--?(?:T|sentiment)(?:[=\s].*|$)/
        },
        copy: {
            display: { cli: '-x, --copy', repl: '/copy [on|off]' },
            type: 'flag',
            regex: /^--?(?:x|copy)$/
        },
        noSuggest: {
            display: { cli: '-A, --no-suggest', repl: '/nosuggest [on|off]' },
            type: 'flag',
            regex: /^--?(?:A|no[-_]?suggest)$/
        },
        quietMode: {
            display: { cli: '-V, --quiet', repl: '/quiet [on|off]' },
            type: 'flag',
            regex: /^--?(?:V|quiet)(?:[-_]?mode)?$/
        },
        init: {
            display: { cli: '-i, --init', repl: '/init' },
            type: 'cmd',
            regex: /^-{0,2}i(?:nit)?$/
        },
        interactive: {
            display: { cli: '-I, --interactive' },   // no repl string needed
            type: 'cmd',
            regex: /^--?(?:I|interactive)(?:[-_]?mode)?$/
        },
        joke: {
            display: { cli: '-j, --joke', repl: '/joke' },
            type: 'cmd',
            regex: /^--?j(?:oke)?$/
        },
        fortune: {
            display: { cli: '-f, --fortune', repl: '/fortune' },
            type: 'cmd',
            regex: /^--?f(?:ortune)?$/
        },
        randomAnswer: {
            display: { cli: '-r, --random', repl: '/random' },
            type: 'cmd',
            regex: /^--?r(?:andom[-_]?answer)?$/
        },
        commitMsg: {
            display: { cli: '-g, --commit-msg', repl: '/commitmsg' },
            type: 'cmd',
            regex: /^--?(?:g|commit[-_]?me?ss?a?ge?)$/
        },
        diff: {
            display: { cli: '-d, --diff', repl: '/diff' },
            type: 'flag',
            regex: /^--?d(?:iff)?$/
        },
        clear: {
            display: { cli: '-C, --clear', repl: '/clear' },
            type: 'cmd',
            regex: /^--?(?:C|clear?)$/
        },
        help: {
            display: { cli: '-h, --help', repl: '/help' },
            type: 'cmd',
            regex: /^--?h(?:elp)?$/
        },
        version: {
            display: { cli: '-v, --version', repl: '/version' },
            type: 'cmd',
            regex: /^--?ve?r?s?i?o?n?$/
        },
        stats: {
            display: { cli: '-S, --stats', repl: '/stats' },
            type: 'cmd',
            regex: /^--?(?:S|stats?)$/
        }
    },

    isNegKey(key) { return /^(?:no|disable|exclude)[A-Z]/.test(key) },

    async load(ctrlKeys = Object.keys(this.controls)) {
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
            const configIdx = env.args.findIndex(arg => this.controls.config.regex.test(arg)),
                  configArg = configIdx != -1 ? env.args[configIdx] : null
            if (configArg) {
                const inputPath = configArg.includes('=') ? configArg.split('=')[1]?.trim() || ''
                                : (configIdx +1 < env.args.length && !env.args[configIdx +1].startsWith('-')) ?
                                    env.args[configIdx +1]
                                : ''
                try {
                    const { text, type } = await require('./resolver')(inputPath)
                    if (type == 'url') {
                        const tmpFile = path.join(os.tmpdir(), `cli-config-${Date.now()}.js`)
                        data.atomicWrite(tmpFile, text)
                        cli.configPath = tmpFile
                    } else {
                        cli.configPath = path.isAbsolute(inputPath) ? inputPath : path.resolve(process.cwd(), inputPath)
                        if (type == 'path' && !fs.existsSync(cli.configPath))
                             log.configURLandExit(`${cli.msgs.error_configFileNotFound}:`, cli.configPath)
                    }
                } catch (err) {
                    log.configURLandExit(`${cli.msgs.error_failedToLoadConfigFile}: ${inputPath}\n${err.message}`)
                }

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
                    if (!ctrl) { // allow config-only keys
                        if (module.exports.configOnlyKeys?.includes(key)) return cli.config[key] = val
                        else if (this.configFileKeyWhitelist && !this.configFileKeyWhitelist.includes(key))
                            log.invalidConfigKey(key)
                        return
                    } else if (key.startsWith('legacy_') && ctrl.display.cli.replacedBy) {
                        if (this.isNegKey(key) != this.isNegKey(ctrl.display.cli.replacedBy))
                            cli.config[ctrl.display.cli.replacedBy] = !val // assign opposite val to current key
                        else // assign direct val to current key
                            cli.config[ctrl.display.cli.replacedBy] = val
                        return log.configKeyReplacedBy(key, ctrl.display.cli.replacedBy, val)
                    }
                    cli.config[key] = val
                })
                if (!arguments.length) log.debug('Config file loaded!', { type: 'config' })
            } catch (err) {
                log.configURLandExit(`${cli.msgs.error_failedToLoadConfigFile}:`, cli.configPath, `\n${err.message}`) }

        for (let i = 0 ; i < env.args.length ; i++) { // load from CLI arg (overriding config file loads)
            const arg = env.args[i]
            if (/^[^-]|--?(?:config|debug)/.test(arg) && arg != 'init') continue
            const ctrlKey = Object.keys(this.controls).find(key => this.controls[key]?.regex?.test(arg))
            if (!ctrlKey) log.errorAndExit(`[${arg}] ${cli.msgs.error_notRecognized}.`)
            if (!inputCtrlKeys.includes(ctrlKey)) continue // don't process env.args when load() specific keys
            if (ctrlKey.startsWith('legacy_')) { log.argDoesNothing(arg) ; continue }
            const ctrl = this.controls[ctrlKey]
            if (ctrl.mode) // set cli.config.mode to mode name
                cli.config.mode = ctrlKey.replace(/mode$/i, '').toLowerCase()
            else { // init flag/param/cmd cli.config[ctrlKey] val
                if (ctrl.type == 'param')
                    cli.config[ctrlKey] =
                        arg.includes('=') ? arg.split('=')[1]?.trim() || '' // =val
                      : (i +1 < env.args.length && !env.args[i +1].startsWith('-')) ? env.args[++i] // dashless val
                      : true // val-less --param passed
                else // flag/cmd
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
                log.errorAndExit(`[${key}] ${ cli.msgs.error_requiresVal || 'requires a value' }.`)

            if (ctrl.valType) ({
                path() {
                    if (typeof configVal == 'object' && configVal.type == 'url') return
                    if (configVal && (!ctrl.allowText || string.looksLikePath(configVal))
                        && !fs.existsSync(configVal)
                    ) log.errorAndExit(`[${key}] ${
                        cli.msgs.error_invalidFilepath || 'must be a valid existing file path. Got' }: ${configVal}`)
                },
                langCode() {
                    if (configVal && !require('./language').validateLangCode(configVal))
                        log.errorAndExit(`[${key}] ${cli.msgs.error_invalidLangCode}: ${configVal}`)
                },
                positiveInt() {
                    const numVal = parseInt(configVal, 10)
                    if (numVal && isNaN(numVal) || numVal < 1)
                        log.errorAndExit(`[${key}] ${cli.msgs.error_nonPositiveNum}: ${configVal}`)
                    cli.config[key] = numVal
                }
            })[ctrl.valType]()
        }
    }
}
