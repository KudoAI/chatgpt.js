require('../cli/lib/init').env()

const messages = require('./messages')

module.exports = {

	asciiArt(subject) {
		const subjectText = subject && typeof subject == 'string' ? subject : 'a random thing'
		return this.query(`Render a single piece of ascii art of ${subjectText}.`)
	},

	clear() { return messages.clearChain() },
	commitMsg() { return require('./lib/git').generateCommitMsg() },
	help() { log.help() },
	init() { return require('../cli/lib/init').configFile() },
	joke() { return this.query('Tell me a joke and make it funny.') },

	async query(query, options = {}) {
		const chatgpt = require(`../chatgpt${ env.modes.dev ? '' : '.min' }.js`),
			  loader = require('./loader').create({ width: env.width })

		if (!chatgpt.config?.apiKeys?.[cli.config.provider])
			chatgpt.setProvider(cli.config.provider, {
				key: process.env[`${cli.config.provider.toUpperCase()}_API_KEY`] })

		const finalQuery = options.query || query
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
			return parsedReply
		} finally { loader.stop({ clear: true }) }
	},

	randomAnswer() { return this.query('Generate a single random question on any topic, then answer it.') },
	stats() { log.stats() },

	summarize(textOrPath) {
		const content = require('./string').looksLikePath(textOrPath)
			? require('fs').readFileSync(textOrPath, 'utf8') : textOrPath
		return this.query(`Summarize the following:\n\n${content}`)
	},

	version() { log.version() }
}
