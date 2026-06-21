#!/usr/bin/env node

'use strict'

globalThis.log = require('./lib/log')

async function start() {
    env.modes.repl = true
    const { build: buildQuery } = require('./lib/query'),
            messages = require('./lib/messages'),
            readline = require('readline/promises'),
            router = require('./lib/repl/router'),
            run = require('./lib/run')
    log.info(`${cli.msgs.info_startingInteractiveMode}. ${
        cli.msgs.info_type} '/help' ${cli.msgs.info_forCmds}, '/exit' ${cli.msgs.info_toQuit}.`)
    const rl = readline.createInterface({
        input: process.stdin, output: process.stdout, prompt: `${log.colors.bg}>>> ${log.colors.nc}` })
    cli.msgChain = messages.loadChain()
    rl.prompt()
    for await (const rawInput of rl) {
        const input = rawInput.trim()
        if (!input) { rl.prompt() ; continue }
        if (input.startsWith('/')) {
            const parts = input.slice(1).split(/\s+/),
                  cmd = parts[0].toLowerCase(),
                  args = parts.slice(1)
            await router(cmd, args, rl)
        } else
            await run.query(buildQuery(input))
        rl.prompt()
    }
}

if (require.main == module) {
    const init = require('./lib/init')
    init.env()
    init.cli().then(start)
}

module.exports = { start }
