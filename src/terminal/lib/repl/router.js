const run = require('../run'),
      settings = require('../settings')

module.exports = async (cmd, args, rl) => {
    switch (cmd) {
        case 'provider' : case 'pro' : case 'p' : {
            if (!args.length) return log.info(`${cli.msgs.info_current} provider: ${cli.config.provider}`)
            cli.config.provider = args[0]
            log.success(`Provider ${cli.msgs.success_setTo} ${cli.config.provider}`)
            break
        } case 'uilang' : case 'u' :
            run.uiLang(args[0]) ; break
        case 'replylang' : case 'rl' : case 'L' :
            run.replyLang(args.join(' ')) ; break
        case 'summarize' : case 'sum' : case 's' : {
            if (!args.length)
                return log.warn(`${cli.msgs.helpSection_usage}: ${settings.controls.summarize.display.repl}`)
            await run.summarize(args.join(' '))
            break
        } case 'actas' : case 'persona' : case 'aa' : case 'P' :
            await run.actAs(args.join(' ') || null) ; break
        case 'asciiart' : case 'ascii' : case 'art' : case 'a' :
            await run.asciiArt(args.join(' ') || null) ; break
        case 'config' : case 'cfg' : case 'c' : {
            if (!args.length) return log.warn(`${cli.msgs.helpSection_usage}: ${settings.controls.config.display.repl}`)
            await run.loadConfig(args[0])
            break
        } case 'maxchars' : case 'mc' : case 'm' : {
            if (!args.length) return log.info(`${cli.msgs.info_current} maxChars: ${cli.config.maxChars}`)
            const newMax = parseInt(args[0], 10)
            if (isNaN(newMax) || newMax < 1) log.error(`maxChars ${cli.msgs.error_nonPositiveNum}`)
            else {
                cli.config.maxChars = newMax
                log.success(`maxChars ${cli.msgs.success_setTo} ${cli.config.maxChars}`)
            }
            break
        } case 'maxtokens' : case 'mt' : case 'k' : {
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
        } case 'clear' : case 'C' :
            run.clear() ; break
        case 'copy' : case 'x' :
            run.toggleCopy(args[0]) ; break
        case 'nosuggest' : case 'ns' : case 'A' :
            run.toggleNoSuggest(args[0]) ; break
        case 'quiet' : case 'V' :
            run.toggleQuiet(args[0]) ; break
        case 'commitmsg' : case 'g' :
            await run.commitMsg() ; break
        case 'commitmsgexample' : case 'cm' : case 'G' :
            run.commitMsgExample(args.join(' ')) ; break
        case 'diff' : case 'd' :
            await run.diff() ; break
        case 'sentiment' : case 'sen' : case 'T' : {
            if (!args.length)
                return log.warn(`${cli.msgs.helpSection_usage}: ${settings.controls.sentiment.display.repl}`)
            await run.sentiment(args.join(' '))
            break
        } case 'joke' : case 'j' :
            await run.joke() ; break
        case 'fortune' : case 'f' :
            await run.fortune() ; break
        case 'random' : case 'r' :
            await run.randomAnswer() ; break
        case 'init' : case 'i' :
            await run.init() ; break
        case 'help' : case 'h' :
            log.data(require('../../templates/help')) ; break
        case 'version' : case 'v' :
            run.version() ; break
        case 'stats' : case 'S' :
            run.stats() ; break
        case 'exit' : case 'quit' : case 'q' :
            rl.close() ; process.exit(0) ; break
        case 'debug' : case 'dbg' :
            run.toggleDebug(args[0]) ; break
        default:
            log.warn(`${cli.msgs.warn_unknownCmd}: /${cmd}. ${
                require('../string').toTitleCase(cli.msgs.info_type)} /help ${cli.msgs.warn_forAvailRun}.`)
    }
}
