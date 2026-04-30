#!/usr/bin/env node

(async () => {
    'use strict'

    // Init ENV
    const init = require('./lib/init')
    init.env()

    // Import LIBS
    globalThis.log = require('./lib/log')
    const chatgpt = require(`../chatgpt${ env.modes.dev ? '' : '.min' }.js`)

    await init.cli()

    // Exec CMD arg if passed
    if (cli.config.init) return init.configFile()
    else if (cli.config.help) return log.help()
    else if (cli.config.version) return log.version()
    else if (cli.config.stats) return log.stats()

    if (!chatgpt.config?.apiKeys?.[cli.config.provider])
        chatgpt.setProvider(cli.config.provider, { key: process.env[`${cli.config.provider.toUpperCase()}_API_KEY`] })
    await chatgpt.send(cli.config.query, { output: 'stdout' })

})()
