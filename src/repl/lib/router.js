const run = require('../../lib/run'),
      string = require('../../lib/string')

async function route(cmd, args, rl) {
    switch (cmd) {
        case 'help' : case 'h' :
            showHelp() ; break
        case 'exit' : case 'quit' : case 'q' :
            rl.close() ; process.exit(0) ; break
        case 'clear' : case 'c' :
            run.clear() ; break
        case 'joke' : case 'j' :
            await run.joke() ; break
        case 'random' : case 'r' :
            await run.randomAnswer() ; break
        case 'ascii' : case 'art' : case 'a' :
            await run.asciiArt(args.join(' ') || null) ; break
        case 'summarize' : case 'sum' : case 's' : {
            if (!args.length)
                return log.warn(`${cli.msgs.helpSection_usage}: /summarize <text|filepath|url>`)
            await run.summarize(args.join(' '))
            break
        } case 'stats' :
            await run.stats() ; break
        case 'version' : case 'v' :
            run.version() ; break
        case 'commit' : case 'g' :
            await run.commitMsg() ; break
        case 'init':
            await run.init() ; break
        case 'provider' : {
            if (!args.length) return log.info(`${cli.msgs.info_current} provider: ${cli.config.provider}`)
            cli.config.provider = args[0]
            log.success(`Provider set to ${cli.config.provider}`)
            break
        } case 'maxchars' : case 'mc' : {
            if (!args.length) return log.info(`${cli.msgs.info_current} maxChars: ${cli.config.maxChars}`)
            const newMax = parseInt(args[0], 10)
            if (isNaN(newMax) || newMax < 1) log.error(`maxChars ${cli.msgs.error_nonPositiveNum}`)
            else { cli.config.maxChars = newMax ; log.success(`maxChars set to ${cli.config.maxChars}`) }
            break
        } case 'maxtokens' : case 'mt' : {
            if (!args.length) return log.info(`${cli.msgs.info_current}
                maxTokens: ${cli.config.maxTokens || 'unlimited'}`)
            const newTokens = parseInt(args[0], 10)
            if (isNaN(newTokens) || newTokens < 1) log.error(`maxTokens ${cli.msgs.error_nonPositiveNum}`)
            else { cli.config.maxTokens = newTokens ; log.success(`maxTokens set to ${cli.config.maxTokens}`) }
            break
        } case 'turns' : case 't' : {
            if (!args.length) return log.info(`${cli.msgs.info_current} turnsToPreserve: ${cli.config.turnsToPreserve}`)
            const newTurns = parseInt(args[0], 10)
            if (isNaN(newTurns) || newTurns < 1) log.error(`turns ${cli.msgs.error_nonPositiveNum}`)
            else {
                cli.config.turnsToPreserve = newTurns
                log.success(`turnsToPreserve set to ${cli.config.turnsToPreserve}`)
            }
            break
        } default:
            log.warn(`${cli.msgs.warn_unknownCmd}: /${cmd}. ${
                string.toTitleCase(cli.msgs.info_type)} /help ${cli.msgs.warn_forAvailRun}.`)
    }
}

function showHelp() {
    log.help(['header', 'usage', 'params', 'flags', 'cmds'])
    log.data(`\n  REPL ${cli.msgs.data_slashCmds}: /help, /exit, /clear, /joke, /random, /ascii [subject]`)
    log.data('  /summarize <text|file>, /stats, /version, /commit, /init')
    log.data('  /provider <name>, /maxchars <num>, /maxtokens <num>, /turns <num>')
}

module.exports = { route }
