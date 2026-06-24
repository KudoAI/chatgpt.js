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
            regex: { cli: /^--?p(?:rovider)?(?:[=\s].*|$)/, repl: /^\/p(?:ro(?:vider)?)?(?=\s|$)/ }
        },
        uiLang: {
            display: { cli: '-u, --ui-lang', repl: '/uilang <code>' },
            type: 'param', valType: 'langCode',
            regex: { cli: /^--?u(?:i[-_]?lang(?:uage)?)?(?:[=\s].*|$)/, repl: /^\/u(?:ilang)?(?=\s|$)/ }
        },
        replyLang: {
            display: { cli: '-L, --reply-lang', repl: '/replylang <text>' },
            type: 'param', valType: 'langCode',
            regex: { cli: /^--?(?:L|reply[-_]?lang(?:uage)?)?(?:[=\s].*|$)/, repl: /^\/(?:replylang|rl|L)(?=\s|$)/ }
        },
        query: {
            display: { cli: '-q, --query' },
            type: 'param', valRequired: false,
            regex: { cli: /^--?(?:q|query|ask|send)(?:[=\s].*|$)/ },
            get defaultVal() { return cli.msgs.query_hi }
        },
        summarize: {
            display: { cli: '-s, --summarize', repl: '/summarize <text|filepath|url>' },
            type: 'param', valType: 'path', allowText: true,
            regex: { cli: /^--?s(?:ummarize)?(?:[=\s].*|$)/, repl: /^\/s(?:um(?:marize)?)?(?=\s|$)/ }
        },
        actAs: {
            display: { cli: '-P, --act-as', repl: '/actas <persona>' },
            type: 'param',
            regex: { cli: /^--?(?:P|act[-_]?as)(?:[=\s].*|$)/, repl: /^\/(?:actas|persona|aa|P)(?=\s|$)/ }
        },
        asciiArt: {
            display: { cli: '-a, --ascii-art', repl: '/ascii [subject]' },
            type: 'param', valRequired: false,
            regex: { cli: /^--?a(?:scii[-_]?)?a(?:rt)?(?:[=\s].*|$)/, repl: /^\/(?:asciiart|ascii|art|a)(?=\s|$)/ }
        },
        commitMsgExample: {
            display: { cli: '-G, --commit-msg-example', repl: '/commitmsgexample <msg>' },
            type: 'param',
            regex: {
                cli: /^--?(?:G|commit[-_]?me?ss?a?ge?[-_]?example)$/, repl: /^\/(?:commitmsgexample|cm|G)(?=\s|$)/ }
        },
        config: {
            display: { cli: '-c, --config', repl: '/config <filepath|url>' },
            type: 'param', valType: 'path',
            regex: { cli: /^--?c(?:onfig)?(?:[=\s].*|$)/, repl: /^\/c(?:onfig|fg)?(?=\s|$)/ }
        },
        maxChars: {
            display: { cli: '-m, --max-chars', repl: '/maxchars <num>' },
            type: 'param', valType: 'positiveInt',
            regex: { cli: /^--?m(?:ax[-_]?chars)?(?:[=\s].*|$)/, repl: /^\/(?:maxchars|mc|m)(?=\s|$)/ },
            defaultVal: 250
        },
        maxTokens: {
            display: { cli: '-k, --max-tokens', repl: '/maxtokens <num>' },
            type: 'param', valType: 'positiveInt',
            regex: { cli: /^--(?:k|max[-_]?tokens)(?:[=\s].*|$)/, repl: /^\/(?:maxtokens|mt|k)(?=\s|$)/ }
        },
        turnsToPreserve: {
            display: { cli: '-t, --turns', repl: '/turns <num>' },
            type: 'param', valType: 'positiveInt',
            regex: { cli: /^--?t(?:urns)?(?:[=\s].*|$)/, repl: /^\/t(?:urns)?(?=\s|$)/ },
            defaultVal: 3
        },
        sentiment: {
            display: { cli: '-T, --sentiment', repl: '/sentiment <text|file|url>' },
            type: 'param', valType: 'path', allowText: true,
            regex: { cli: /^--?(?:T|sentiment)(?:[=\s].*|$)/, repl: /^\/(?:sentiment|sen|T)(?=\s|$)/ }
        },
        copy: {
            display: { cli: '-x, --copy', repl: '/copy [on|off]' },
            type: 'flag',
            regex: { cli: /^--?(?:x|copy)$/, repl: /^\/(?:copy|x)(?=\s|$)/ }
        },
        noSuggest: {
            display: { cli: '-A, --no-suggest', repl: '/nosuggest [on|off]' },
            type: 'flag',
            regex: { cli: /^--?(?:A|no[-_]?suggest)$/, repl: /^\/(?:nosuggest|ns|A)(?=\s|$)/ }
        },
        quietMode: {
            display: { cli: '-V, --quiet', repl: '/quiet [on|off]' },
            type: 'flag',
            regex: { cli: /^--?(?:V|quiet)(?:[-_]?mode)?$/, repl: /^\/(?:quiet|V)(?=\s|$)/ }
        },
        init: {
            display: { cli: '-i, --init', repl: '/nit' },
            type: 'cmd',
            regex: { cli: /^-{0,2}i(?:nit)?$/, repl: /^\/(?:init|i)(?=\s|$)/ }
        },
        interactive: {
            display: { cli: '-I, --interactive' },
            type: 'cmd',
            regex: { cli: /^--?(?:I|interactive)(?:[-_]?mode)?$/ }
        },
        joke: {
            display: { cli: '-j, --joke', repl: '/joke' },
            type: 'cmd',
            regex: { cli: /^--?j(?:oke)?$/, repl: /^\/(?:joke|j)(?=\s|$)/ }
        },
        fortune: {
            display: { cli: '-f, --fortune', repl: '/fortune' },
            type: 'cmd',
            regex: { cli: /^--?f(?:ortune)?$/, repl: /^\/(?:fortune|f)(?=\s|$)/ }
        },
        randomAnswer: {
            display: { cli: '-r, --random', repl: '/random' },
            type: 'cmd',
            regex: { cli: /^--?r(?:andom[-_]?answer)?$/, repl: /^\/(?:random|r)(?=\s|$)/ }
        },
        commitMsg: {
            display: { cli: '-g, --commit-msg', repl: '/commitmsg' },
            type: 'cmd',
            regex: { cli: /^--?(?:g|commit[-_]?me?ss?a?ge?)$/, repl: /^\/(?:commitmsg|g)(?=\s|$)/ }
        },
        diff: {
            display: { cli: '-d, --diff', repl: '/diff' },
            type: 'flag',
            regex: { cli: /^--?d(?:iff)?$/, repl: /^\/(?:diff|d)(?=\s|$)/ }
        },
        clear: {
            display: { cli: '-C, --clear', repl: '/clear' },
            type: 'cmd',
            regex: { cli: /^--?(?:C|clear?)$/, repl: /^\/(?:clear|C)(?=\s|$)/ }
        },
        help: {
            display: { cli: '-h, --help', repl: '/help' },
            type: 'cmd',
            regex: { cli: /^--?h(?:elp)?$/, repl: /^\/(?:help|h)(?=\s|$)/ }
        },
        version: {
            display: { cli: '-v, --version', repl: '/version' },
            type: 'cmd',
            regex: { cli: /^--?ve?r?s?i?o?n?$/, repl: /^\/(?:version|v)(?=\s|$)/ }
        },
        stats: {
            display: { cli: '-S, --stats', repl: '/stats' },
            type: 'cmd',
            regex: { cli: /^--?(?:S|stats?)$/, repl: /^\/(?:stats|S)(?=\s|$)/ }
        },
        exit: {
            display: { repl: '/exit, /quit, /q' },
            type: 'cmd',
            regex: { repl: /^\/(?:exit|quit|q)(?=\s|$)/ }
        },
        debug: {
            display: { repl: '/debug, /dbg' },
            type: 'cmd',
            regex: { repl: /^\/(?:debug|dbg)(?=\s|$)/ }
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
            const configIdx = env.args.findIndex(arg => this.controls.config.regex.cli.test(arg)),
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
            const ctrlKey = Object.keys(this.controls).find(key => this.controls[key]?.regex?.cli?.test(arg))
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
