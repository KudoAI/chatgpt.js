#!/usr/bin/env node

(async () => {
    'use strict'

    const init = require('./lib/init')
    init.env()

    globalThis.log = require('./lib/log')
    const { build: buildQuery } = require('./lib/query'),
            chatgpt = require(`../chatgpt${ env.modes.dev ? '' : '.min' }.js`),
            resolver = require('./lib/resolver'),
            run = require('./lib/run')

    await init.cli()

    for (const cmd of ['init', 'commitMsg', 'diff', 'clear', 'help', 'version', 'stats'])
        if (cli.config[cmd]) return run[cmd]()
    if (cli.config.interactive) return require('./repl').start()

    if (!chatgpt.config?.apiKeys?.[cli.config.provider])
        chatgpt.setProvider(cli.config.provider, {
            key: process.env[`${cli.config.provider.toUpperCase()}_API_KEY`] })

    let query = cli.config.joke ? 'Tell me a joke and make it funny.'
              : cli.config.fortune ? 'Tell me my fortune the length of a fortune cookie paper.'
              : cli.config.randomAnswer ? 'Generate a single random question on any topic, then answer it.'
              : cli.config.summarize ? `Summarize the following:\n\n${(await resolver(cli.config.summarize)).text}`
              : cli.config.sentiment ?
                    `Analyze the sentiment of the following:\n\n${(await resolver(cli.config.sentiment)).text}`
              : cli.config.actAs ? require('@kudoai/ai-personas')[cli.config.actAs]?.prompt
              : cli.config.asciiArt ? `Render a single piece of ascii art of ${
                    typeof cli.config.asciiArt == 'string' ? cli.config.asciiArt : 'a random thing' }.`
              : cli.config.query && typeof cli.config.query == 'string' ? cli.config.query
              : cli.msgs.query_hi
    if (typeof query == 'string')
        query = buildQuery(query)

    if (new RegExp(`^(?:help|${cli.msgs.query_hi})(?:\n|$)`).test(query)) {
        log.help() ; log.break() }

    await run.query(query, { copy: cli.config.copy })

})()
