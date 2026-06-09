#!/usr/bin/env node

(async () => {
    'use strict'

    const init = require('./lib/init')
    init.env()

    globalThis.log = require('./lib/log')
    const chatgpt = require(`../chatgpt${ env.modes.dev ? '' : '.min' }.js`),
          loader = require('./lib/loader').create({ width: env.width }),
          messages = require('./lib/messages')

    await init.cli()

    if (cli.config.init) return init.configFile()
    else if (cli.config.commitMsg) return await require('./lib/git').generateCommitMsg()
    else if (cli.config.clear) return messages.clearChain()
    else if (cli.config.help) return log.help()
    else if (cli.config.version) return log.version()
    else if (cli.config.stats) return log.stats()

    if (!chatgpt.config?.apiKeys?.[cli.config.provider])
        chatgpt.setProvider(cli.config.provider, {
            key: process.env[`${cli.config.provider.toUpperCase()}_API_KEY`] })

    let query = cli.config.joke ? 'Tell me a joke and make it funny.'
              : cli.config.randomAnswer ? 'Generate a single random question on any topic, then answer it.'
              : cli.config.summarize ? `Summarize the following:\n\n${
                    require('./lib/string').looksLikePath(cli.config.summarize)
                        ? require('fs').readFileSync(cli.config.summarize, 'utf8')
                        : cli.config.summarize }`
              : cli.config.asciiArt ?
                    `Render a single piece of ascii art of ${
                        typeof cli.config.asciiArt == 'string' ? cli.config.asciiArt : 'a random thing' }.`
              : cli.config.query
    if (!cli.config.noSuggest && query == cli.config.query)
        query += '\n\nThen, at the end of your response, ask user if they want you to do something related to the query'
              + ' except if you are already finishing your response w/ a question.'
    log.debug(`query = ${query}`)

    loader.start()
    try { // to get/show AI reply
        const userMsg = { role: 'user', content: query }
        const sendConfig = {
            provider: cli.config.provider,
            output: 'stdout',
            color: 'white',
            onLoadStart: () => loader.stop({ clear: false }),
            messages: [...cli.msgChain, userMsg],
            maxChars: cli.config.maxChars,
            turnsToPreserve: cli.config.turnsToPreserve
        }
        if (cli.config.maxTokens) sendConfig.maxTokens = cli.config.maxTokens
        const parsedReply = messages.extractFromJSON(await chatgpt.send('', sendConfig))
        if (/^(?:help|hi)(?:\n|$)/.test(query)) log.help()
        if (cli.config.copy && parsedReply) require('node-clipboardy').clipboardy.writeSync(parsedReply)
        cli.msgChain.push(userMsg, { role: 'assistant', content: parsedReply })
        messages.saveChain(cli.msgChain)
    } finally { loader.stop({ clear: true }) }

})()
