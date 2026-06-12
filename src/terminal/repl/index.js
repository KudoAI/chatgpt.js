#!/usr/bin/env node

'use strict'

globalThis.log = require('../lib/log')
const { build: buildQuery } = require('../lib/query'),
        messages = require('../lib/messages'),
        readline = require('readline/promises'),
      { route } = require('./lib/router'),
        run = require('../lib/run')

if (require.main == module) {
    const init = require('../cli/lib/init')
    init.env()
    init.cli().then(start)
}

async function start() {
    log.info(`${cli.msgs.info_startingInteractiveMode}. ${
        cli.msgs.info_type} '/help' ${cli.msgs.info_forCmds}, '/exit' ${cli.msgs.info_toQuit}.`)
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: `${log.colors.bg}>>> ${log.colors.nc}`
    })
    cli.msgChain = messages.loadChain()
    log.debug(`Loaded ${cli.msgChain.length} messages from chain.`)
    rl.prompt()
    for await (const rawInput of rl) {
        const input = rawInput.trim()
        if (!input) { rl.prompt() ; continue }
        if (input.startsWith('/')) {
            const parts = input.slice(1).split(/\s+/),
                  cmd = parts[0].toLowerCase(),
                  args = parts.slice(1)
            await route(cmd, args, rl)
        } else
            await run.query(buildQuery(input))
        rl.prompt()
    }
}

module.exports = { start }
