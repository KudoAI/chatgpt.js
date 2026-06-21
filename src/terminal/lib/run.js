const fs = require('fs'),
      git = require('./git'),
      init = require('./init'),
      language = require('./language'),
      messages = require('./messages'),
      string = require('./string')

module.exports = {

    actAs(persona) { return this.query(require('@kudoai/ai-personas')[persona]?.prompt) },

    asciiArt(subject) {
        const subjectText = subject && typeof subject == 'string' ? subject : 'a random thing'
        return this.query(`Render a single piece of ascii art of ${subjectText}.`)
    },

    clear() { return messages.clearChain() },
    commitMsg() { return git.generateCommitMsg({ includeDiff: cli.config.diff }) },
    diff() { return git.diff.print() },

    fortune() {
        const { replyLang } = cli.config
        let query = 'Tell me my fortune the length of a fortune cookie paper.'
        if (!replyLang.startsWith('zh') && env.supports.unicode
            || replyLang && !require('non-latin-locales').includes(replyLang.split('_')[0])
        ) query +=`\n\nRespond in simplified Chinese, then translate it literally to ${
            replyLang || 'en' } on the line below it.`
        return this.query(query)
    },

    help() { log.help() },
    init() { return init.configFile() },
    joke() { return this.query('Tell me a joke and make it funny.') },

    async query(query, options = {}) {
        const chatgpt = require(`../../chatgpt${ env.modes.dev ? '' : '.min' }.js`),
              loader = require('../components/loader').create({ width: env.width })

        if (!chatgpt.config?.apiKeys?.[cli.config.provider])
            chatgpt.setProvider(cli.config.provider, {
                key: process.env[`${cli.config.provider.toUpperCase()}_API_KEY`] })

        const finalQuery = options.query || query
		log.debug(`query = ${finalQuery}`)

        const sendConfig = {
            provider: options.provider || cli.config.provider,
            output: 'stdout',
            color: 'white',
            onLoadStart: () => loader.stop({ clear: false }),
            messages: [...cli.msgChain, { role: 'user', content: finalQuery }],
            maxChars: options.maxChars || cli.config.maxChars,
            turnsToPreserve: options.turnsToPreserve || cli.config.turnsToPreserve
        }
        if (options.maxTokens) sendConfig.maxTokens = options.maxTokens
        else if (cli.config.maxTokens) sendConfig.maxTokens = cli.config.maxTokens

        loader.start()
        try { // to get/show AI reply
            const parsedReply = messages.extractFromJSON(await chatgpt.send('', sendConfig))
            if (options.copy || cli.config.copy) require('node-clipboardy').writeSync(parsedReply)
            cli.msgChain.push({ role: 'user', content: finalQuery }, { role: 'assistant', content: parsedReply })
            messages.saveChain(cli.msgChain)
			if (chatgpt.lastProvider) log.debug(`Provider used: ${chatgpt.lastProvider}`)
        	if (chatgpt.lastModel) log.debug(`Model used: ${chatgpt.lastModel}`)
            return parsedReply
        } finally { loader.stop({ clear: true }) }
    },

    randomAnswer() { return this.query('Generate a single random question on any topic, then answer it.') },

    sentiment(textOrPath) {
        const content = string.looksLikePath(textOrPath) ? fs.readFileSync(textOrPath, 'utf8') : textOrPath
        return this.query(`Analyze the sentiment of the following:\n\n${content}`)
    },

    stats() { log.stats() },

    summarize(textOrPath) {
        const content = string.looksLikePath(textOrPath) ? fs.readFileSync(textOrPath, 'utf8') : textOrPath
        return this.query(`Summarize the following:\n\n${content}`)
    },

    version() { log.version() },

    async uiLang(code) {
        if (!code) return log.info(`${cli.msgs.info_current} uiLang: ${ cli.config.uiLang || cli.msgs.info_notSet }`)
        cli.msgs = await language.getMsgs(code)
        cli.lang = cli.config.uiLang = code
        log.success(`${cli.msgs.success_uiLang} ${cli.msgs.success_setTo} ${cli.config.uiLang}`)
    },

    replyLang(text) {
        if (!text)
			return log.info(`${cli.msgs.info_current} replyLang: ${ cli.config.replyLang || cli.msgs.info_notSet }`)
        cli.config.replyLang = text
        log.success(`${cli.msgs.success_replyLang} ${cli.msgs.success_setTo} ${cli.config.replyLang}`)
    },

    commitMsgExample(example) {
        if (!example)
			return log.info(
				`${cli.msgs.info_current} commitMsgExample: ${ cli.config.commitMsgExample || cli.msgs.info_notSet }`)
        cli.config.commitMsgExample = example
        log.success(`${cli.msgs.success_commitMsgExample} ${cli.msgs.success_setTo}: "${cli.config.commitMsgExample}"`)
    },

    async loadConfig(configPath) {
        if (!configPath) return log.warn(`${cli.msgs.helpSection_usage}: ${require('./settings').controls.config.repl}`)
        const fs = require('fs').promises,
              cleanedPath = configPath.replace(/^(['"])(.*)\1$/, '$2')
        let tmpDir
        try {
            const os = require('os'),
                  path = require('path'),
                { text } = await require('./resolver')(cleanedPath)
            tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'cli-config-'))
            const tmpFile = path.join(tmpDir, 'config.mjs')
            await fs.writeFile(tmpFile, text, { mode: 0o600 })
            const mod = await import(require('url').pathToFileURL(tmpFile).href)
            Object.assign(cli.config, mod.default || mod)
            if (cli.config.uiLang) cli.msgs = await language.getMsgs(cli.config.uiLang)
            log.success(`${cli.msgs.configLoadedFrom || 'Config loaded from'} ${cleanedPath}`)
        } catch (err) {
            log.error(`${cli.msgs.error_failedToLoadConfigFile}: ${err.message}`)
        } finally {
            if (tmpDir) try { await fs.rm(tmpDir, { recursive: true, force: true }) } catch (err) {}
        }
    },

    toggleCopy(arg) {
        if (arg == undefined) cli.config.copy = !cli.config.copy
        else if (arg.toLowerCase() == 'on') cli.config.copy = true
        else if (arg.toLowerCase() == 'off') cli.config.copy = false
        else return log.error(
			`${cli.msgs.error_use} /copy [on|off] ${cli.msgs.info_or} ${cli.msgs.error_noArgToToggle}`)
        log.success(`${cli.msgs.success_copyToClipboard} ${cli.config.copy ? 'enabled' : 'disabled'}`)
    },

    toggleNoSuggest(arg) {
        if (arg == undefined) cli.config.noSuggest = !cli.config.noSuggest
        else if (arg.toLowerCase() == 'on') cli.config.noSuggest = true
        else if (arg.toLowerCase() == 'off') cli.config.noSuggest = false
        else return log.error(
			`${cli.msgs.error_use} /nosuggest [on|off] ${cli.msgs.info_or} ${cli.msgs.error_noArgToToggle}`)
        log.success(`${cli.msgs.success_autoSuggest} ${cli.config.noSuggest ? 'disabled' : 'enabled'}`)
    },

    toggleQuiet(arg) {
        if (arg == undefined) cli.config.quiet = !cli.config.quiet
        else if (arg.toLowerCase() == 'on') cli.config.quiet = true
        else if (arg.toLowerCase() == 'off') cli.config.quiet = false
        else return log.error(
			`${cli.msgs.error_use} /quiet [on|off] ${cli.msgs.info_or} ${cli.msgs.error_noArgToToggle}`)
        log.success(`${cli.msgs.success_quietMode} ${cli.config.quiet ? 'enabled' : 'disabled'}`)
    },

    toggleDebug(arg) {
        if (arg == undefined) env.modes.debug = !env.modes.debug
        else if (arg.toLowerCase() == 'on') env.modes.debug = true
        else if (arg.toLowerCase() == 'off') env.modes.debug = false
        else return log.error(
			`${cli.msgs.error_use} /debug [on|off] ${cli.msgs.info_or} ${cli.msgs.error_noArgToToggle}`)
        log.success(`${cli.msgs.success_debugLogs} ${env.modes.debug ? 'enabled' : 'disabled'}`)
    }
}
