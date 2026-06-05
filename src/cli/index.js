#!/usr/bin/env node

(async () => {
    'use strict'

    const init = require('./lib/init')
    init.env()

    globalThis.log = require('./lib/log')
    const fs = require('fs'),
          chatgpt = require(`../chatgpt${ env.modes.dev ? '' : '.min' }.js`),
          loader = require('./lib/loader').create({ width: env.width }),
          messages = require('./lib/messages'),
          string = require('./lib/string')

    await init.cli()

    if (cli.config.init) return init.configFile()
    else if (cli.config.help) return log.help()
    else if (cli.config.version) return log.version()
    else if (cli.config.stats) return log.stats()

    if (!chatgpt.config?.apiKeys?.[cli.config.provider])
        chatgpt.setProvider(cli.config.provider, {
            key: process.env[`${cli.config.provider.toUpperCase()}_API_KEY`] })

    let query = cli.config.joke ? 'Tell me a joke and make it funny.'
                : cli.config.randomAnswer ? 'Generate a single random question on any topic, then answer it.'
                : cli.config.summarize ? `Summarize the following:\n\n${
                      string.looksLikePath(cli.config.summarize) ? fs.readFileSync(cli.config.summarize, 'utf8')
                    : cli.config.summarize }`
                : cli.config.query
    if (cli.config.autoSuggest && !/[?？]$/.test(query))
        query +=
            '\n\nThen, at the end of your response, ask user if they want you to do something related to the query.'

    loader.start()
    try { // to get/show AI reply
        const userMsg = { role: 'user', content: query }
        const aiResp = await chatgpt.send('', {
            provider: cli.config.provider,
            onLoadStart: () => loader.stop({ clear: false }),
            messages: [...cli.msgChain, userMsg],
            msgMaxChars: cli.config.msgMaxChars,
            turnsToPreserve: cli.config.turnsToPreserve
        })
        const parsedReply = messages.extractFromJSON(aiResp)
        log.data(parsedReply)
        if (/^(?:help|hi)$/.test(query)) log.help()
        cli.msgChain.push(userMsg, { role: 'assistant', content: parsedReply })
        messages.saveChain(cli.msgChain)
    } finally { loader.stop() }

})()
