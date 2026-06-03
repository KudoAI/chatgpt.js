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
          markdown = require('./lib/markdown'),
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

    // Get AI reply
    loader.start()
    const query = cli.config.joke ? 'Tell me a joke and make it funny.'
                : cli.config.randomAnswer ? 'Generate a single random question on any topic, then answer it.'
                : cli.config.summarize ? `Summarize the following:\n\n${
                      string.looksLikePath(cli.config.summarize) ? fs.readFileSync(cli.config.summarize, 'utf8')
                    : cli.config.summarize }`
                : cli.config.query
    const useMarkdown = markdown.isEnabled()
    try {
        const reply = await chatgpt.send(query, {
            provider: cli.config.provider,
            output: useMarkdown ? 'return' : 'stdout',
            onLoadStart: () => loader.stop({ clear: false })
        })
        if (useMarkdown && reply) console.log(markdown.render(reply))
        if (/^(?:help|hi)$/.test(query)) log.help()
    } finally { loader.stop() }

})()
