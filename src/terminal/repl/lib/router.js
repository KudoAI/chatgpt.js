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
        case 'commitmsg' : case 'g' :
            await run.commitMsg() ; break
        case 'diff' : case 'd' :
            await run.diff() ; break
        case 'clear' : case 'c' :
            run.clear() ; break
        case 'help' : case 'h' :
            showHelp() ; break
        case 'version' : case 'v' :
            run.version() ; break
        case 'stats':
            run.stats() ; break
        case 'exit' : case 'quit' : case 'q' :
            rl.close() ; process.exit(0) ; break
        case 'uilang' : case 'u' :
            run.uiLang(args[0]) ; break
        case 'replylang' : case 'rl' :
            run.replyLang(args.join(' ')) ; break
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
        case 'quiet':
            run.toggleQuiet(args[0]) ; break
        case 'debug' : case 'dbg' :
            run.toggleDebug(args[0]) ; break
        default:
            log.warn(`${cli.msgs.warn_unknownCmd}: /${cmd}. ${
                string.toTitleCase(cli.msgs.info_type)} /help ${cli.msgs.warn_forAvailRun}.`)
    }
}

function showHelp() {
    log.data(`  \x1b[1m${cli.msgs.helpSection_params.toLowerCase()}:\x1b[0m
    -p, --provider <provider>            Provider for chat API.
    -u, --ui-lang <code>                 ISO 639-1 code of language to display UI in.
    -L, --reply-lang <code|name>         Language for AI to reply in.
    -q, --query <msg>                    Query to send AI.
    -s, --summarize <filepath|text|url>  Path or URL to file or text to summarize.
    -c, --config <filepath|url>          Path or URL to custom config file to load.

  \x1b[1m${cli.msgs.helpSection_msgChainOptions.toLowerCase()}:\x1b[0m
    -m, --max-chars <integer>            Character limit per message.
    -k, --max-tokens <integer>           Max tokens to use.
    -t, --turns <integer>                Number of turns to preserve.
    -C, --clear                          Clear cached message chain.

  \x1b[1m${cli.msgs.helpSection_flags.toLowerCase()}:\x1b[0m
    -x, --copy                           Copy CLI response to clipboard.
    -A, --no-suggest                     Don't auto-suggest next AI action at end of CLI response.
    -V, --quiet                          Suppress all logging except errors.

  \x1b[1m${cli.msgs.helpSection_gitOptions.toLowerCase()}:\x1b[0m
    -g, --commit-msg                     Generate git commit message from changes and copy to clipboard.
    -G, --commit-msg-example <msg>       Example msg for --commit-msg to reference.
    -d, --diff                           Generate human-readable git diff and append to --commit-msg if passed.

  \x1b[1m${cli.msgs.helpSection_funCmds.toLowerCase()}:\x1b[0m
    -a, --ascii-art [subject]            Render ASCII art of optional subject.
    -f, --fortune                        Tell your fortune.
    -j, --joke                           Tell a joke.
    -r, --random-answer                  Answer a random question.

  \x1b[1m${cli.msgs.helpSection_appCmds.toLowerCase()}:\x1b[0m
    -i, --init                           Create config file (in project root).
    -I, --interactive                    Enter interactive REPL mode.
    -h, --help                           Display help screen.
    -v, --version                        Show version number.
    -S, --stats                          Show npm stats.
        --debug                          Show debug logs.

  \x1b[1mREPL ${cli.msgs.data_slashCmds}:\x1b[0m
    /help, /exit, /clear, /joke, /fortune, /random, /ascii [subject]
    /summarize <text|file|url>, /stats, /version, /commitmsg, /diff, /init
    /provider <name>, /maxchars <num>, /maxtokens <num>, /turns <num>
    /uilang <code>, /replylang <text>, /commitmsgexample <msg>
    /config <filepath|url>, /copy [on|off], /nosuggest [on|off]
    /quiet [on|off], /debug [on|off]

${cli.msgs.info_moreHelp}, ${cli.msgs.info_visit}: \x1b[1m${cli.urls.cliDocs}\x1b[0m`)
}

module.exports = { route }
