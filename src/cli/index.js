#!/usr/bin/env node

(async () => {
    'use strict'

    const init = require('./lib/init')
    init.env()

    globalThis.log = require('./lib/log')
    const chatgpt = require(`../chatgpt${ env.modes.dev ? '' : '.min' }.js`),
        { resolveSrc } = require('./lib/resolver'),
          run = require('../lib/run')

    await init.cli()

    for (const cmd of ['init', 'commitMsg', 'clear', 'help', 'version', 'stats'])
        if (cli.config[cmd]) return run[cmd]()
    if (cli.config.interactive) return require('../repl').start()

    if (!chatgpt.config?.apiKeys?.[cli.config.provider])
        chatgpt.setProvider(cli.config.provider, {
            key: process.env[`${cli.config.provider.toUpperCase()}_API_KEY`] })

    let query = cli.config.joke ? 'Tell me a joke and make it funny.'
              : cli.config.randomAnswer ? 'Generate a single random question on any topic, then answer it.'
              : cli.config.summarize ? `Summarize the following:\n\n${await resolveSrc(cli.config.summarize)}`
              : cli.config.asciiArt ?
                    `Render a single piece of ascii art of ${
                        typeof cli.config.asciiArt == 'string' ? cli.config.asciiArt : 'a random thing' }.`
              : await (cli.config.query === true || !cli.config.query ? cli.msgs.query_hi
              : resolveSrc(cli.config.query))
    if (!cli.config.noSuggest && typeof query == 'string' && query == cli.config.query)
        query += '\n\nThen, at the end of your response, ask user if they want you to do something related to the query'
              + ' except if you are already finishing your response w/ a question.'
    log.debug(`query = ${query}`)

    if (new RegExp(`^(?:help|${cli.msgs.query_hi})(?:\n|$)`).test(query)) {
        log.help() ; log.break() }

    await run.query(query, { copy: cli.config.copy })
    if (chatgpt.lastProvider) log.debug(`Provider used: ${chatgpt.lastProvider}`)
    if (chatgpt.lastModel) log.debug(`Model used: ${chatgpt.lastModel}`)

})()
