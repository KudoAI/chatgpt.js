const run = require('../../lib/run'),
      string = require('../../lib/string')

async function route(cmd, args, rl) {
    switch (cmd) {
        case 'provider' : {
            if (!args.length) return log.info(`${cli.msgs.info_current} provider: ${cli.config.provider}`)
            cli.config.provider = args[0]
            log.success(`Provider ${cli.msgs.success_setTo} ${cli.config.provider}`)
            break
        } case 'summarize' : case 'sum' : case 's' : {
            if (!args.length) return log.warn(`${cli.msgs.helpSection_usage}: /summarize <text|filepath|url>`)
            await run.summarize(args.join(' '))
            break
        } case 'ascii' : case 'art' : case 'a' :
            await run.asciiArt(args.join(' ') || null) ; break
        case 'maxchars' : case 'mc' : {
            if (!args.length) return log.info(`${cli.msgs.info_current} maxChars: ${cli.config.maxChars}`)
            const newMax = parseInt(args[0], 10)
            if (isNaN(newMax) || newMax < 1) log.error(`maxChars ${cli.msgs.error_nonPositiveNum}`)
            else {
                cli.config.maxChars = newMax
                log.success(`maxChars ${cli.msgs.success_setTo} ${cli.config.maxChars}`)
            }
            break
        } case 'maxtokens' : case 'mt' : {
            if (!args.length)
                return log.info(`${cli.msgs.info_current} maxTokens: ${cli.config.maxTokens || 'unlimited'}`)
            const newTokens = parseInt(args[0], 10)
            if (isNaN(newTokens) || newTokens < 1) log.error(`maxTokens ${cli.msgs.error_nonPositiveNum}`)
            else {
                cli.config.maxTokens = newTokens
                log.success(`maxTokens ${cli.msgs.success_setTo} ${cli.config.maxTokens}`)
            }
            break
        } case 'turns' : case 't' : {
            if (!args.length) return log.info(`${cli.msgs.info_current} turnsToPreserve: ${cli.config.turnsToPreserve}`)
            const newTurns = parseInt(args[0], 10)
            if (isNaN(newTurns) || newTurns < 1) log.error(`turns ${cli.msgs.error_nonPositiveNum}`)
            else {
                cli.config.turnsToPreserve = newTurns
                log.success(`turnsToPreserve ${cli.msgs.success_setTo} ${cli.config.turnsToPreserve}`)
            }
            break
        } case 'init':
            await run.init() ; break
        case 'joke' : case 'j' :
            await run.joke() ; break
        case 'fortune' : case 'f' :
            await run.fortune() ; break
        case 'random' : case 'r' :
            await run.randomAnswer() ; break
        case 'commit' : case 'g' :
            await run.commitMsg() ; break
        case 'clear' : case 'c' :
            run.clear() ; break
        case 'help' : case 'h' :
            showHelp() ; break
        case 'version' : case 'v' :
            run.version() ; break
        case 'stats':
            await run.stats() ; break
        case 'exit' : case 'quit' : case 'q' :
            rl.close() ; process.exit(0) ; break
        case 'uilang' : case 'u' :
            run.uilang(args[0]) ; break
        case 'replylang' : case 'rl' :
            run.replylang(args.join(' ')) ; break
        case 'commitmsgexample' : case 'cm' :
            run.commitMsgExample(args.join(' ')) ; break
        case 'config' : case 'cfg' : {
            if (!args.length) return log.warn(`${cli.msgs.helpSection_usage}: /config <filepath|url>`)
            await run.loadConfig(args[0])
            break
        } case 'copy' : case 'x' :
            run.toggleCopy(args[0]) ; break
        case 'nosuggest' : case 'ns' :
            run.toggleNoSuggest(args[0]) ; break
        case 'quiet' : run.toggleQuiet(args[0]) ; break
        case 'debug' : case 'dbg' :
            run.toggleDebug(args[0]) ; break
        default:
            log.warn(`${cli.msgs.warn_unknownCmd}: /${cmd}. ${
                string.toTitleCase(cli.msgs.info_type)} /help ${cli.msgs.warn_forAvailRun}.`)
    }
}

function showHelp() {
    log.help(['header', 'usage', 'params', 'flags', 'cmds'])
    log.data(`\n  REPL ${cli.msgs.data_slashCmds}: /help, /exit, /clear, /joke, /fortune, /random, /ascii [subject]`)
    log.data('  /summarize <text|file|url>, /stats, /version, /commit, /init')
    log.data('  /provider <name>, /maxchars <num>, /maxtokens <num>, /turns <num>')
    log.data('  /uilang <code>, /replylang <text>, /commitmsgexample <msg>')
    log.data('  /config <filepath|url>, /copy [on|off], /nosuggest [on|off]')
    log.data('  /quiet [on|off], /debug [on|off]')
}

module.exports = { route }
