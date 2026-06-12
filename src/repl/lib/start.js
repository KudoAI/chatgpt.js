const messages = require('../../lib/messages'),
      readline = require('readline/promises'),
    { route } = require('./router'),
      run = require('../../lib/run')

module.exports = {
    async start() {
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
                await run.query(input)
            rl.prompt()
        }
    }
}
