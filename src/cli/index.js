#!/usr/bin/env node

(async () => {
    'use strict'

    // Init ENV
    const init = require('./lib/init')
    init.env()

    // Import LIBS
    globalThis.log = require('./lib/log')
    const fs = require('fs'),
          chatgpt = require(`../chatgpt${ env.modes.dev ? '' : '.min' }.js`),
          loader = require('./lib/loader').create({ width: env.width }),
          messages = require('./lib/messages'),
          string = require('./lib/string')

    await init.cli()

    // Exec CMD arg if passed
    if (cli.config.init) return init.configFile()
    else if (cli.config.help) return log.help()
    else if (cli.config.version) return log.version()
    else if (cli.config.stats) return log.stats()

    if (!chatgpt.config?.apiKeys?.[cli.config.provider])
        chatgpt.setProvider(cli.config.provider, {
            key: process.env[`${cli.config.provider.toUpperCase()}_API_KEY`] })

    const query = cli.config.joke ? 'Tell me a joke and make it funny.'
                : cli.config.randomAnswer ? 'Generate a single random question on any topic, then answer it.'
                : cli.config.summarize ? `Summarize the following:\n\n${
                      string.looksLikePath(cli.config.summarize) ? fs.readFileSync(cli.config.summarize, 'utf8')
                    : cli.config.summarize }`
                : cli.config.query

    // Get AI reply
    loader.start()
    try {
        const currentMsg = { role: 'user', content: query }
        const reply = await chatgpt.send('', {
            provider: cli.config.provider,
            onLoadStart: () => loader.stop({ clear: false }),
            messages: [...cli.msgChain, currentMsg],
            msgMaxChars: cli.config.msgMaxChars,
            turnsToPreserve: cli.config.turnsToPreserve
        })
        const cleanedReply = messages.extractFromJSON(reply)
        console.log(chatgpt.colors.green + cleanedReply + chatgpt.colors.reset)
        cli.msgChain.push(currentMsg, { role: 'assistant', content: cleanedReply })
        messages.saveChain(cli.msgChain)
        if (/^(?:help|hi)$/.test(query)) log.help()
    } finally { loader.stop() }

})()
