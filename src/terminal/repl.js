#!/usr/bin/env node

'use strict'

globalThis.log = require('./lib/log')

async function start() {
    env.modes.repl = true
    const { build: buildQuery } = require('./lib/query'),
            readline = require('readline/promises'),
            router = require('./lib/repl/router'),
            run = require('./lib/run')
    log.info(`${cli.msgs.info_startingInteractiveMode}. ${
        cli.msgs.info_type} '/help' ${cli.msgs.info_forCmds}, '/exit' ${cli.msgs.info_toQuit}.`)
    env.rl = readline.createInterface({
        input: process.stdin, output: process.stdout, prompt: `${log.colors.bg}>>> ${log.colors.nc}` })
    env.rl.prompt()
    for await (const rawInput of env.rl) {
        const input = rawInput.trim() ; if (!input) { env.rl.prompt() ; continue }
        await (input.startsWith('/') ? router(input, env.rl) : run.query(buildQuery(input)))
        env.rl.prompt()
    }
}

if (require.main == module) {
    const init = require('./lib/init')
    init.env()
    init.cli().then(start)
}

module.exports = { start }
