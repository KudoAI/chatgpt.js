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
        } case 'actas' : case 'persona' : case 'aa' :
            await run.actAs(args.join(' ') || null) ; break
        case 'ascii' : case 'art' : case 'a' :
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
    -p, --provider <provider>            ${cli.msgs.optionDesc_provider}.
    -u, --ui-lang <code>                 ${cli.msgs.optionDesc_uiLang}.
    -L, --reply-lang <code|name>         ${cli.msgs.optionDesc_replyLang}.
    -q, --query <msg>                    ${cli.msgs.optionDesc_query}.
    -s, --summarize <filepath|text|url>  ${cli.msgs.optionDesc_summarize}.
    -c, --config <filepath|url>          ${cli.msgs.optionDesc_config}.

  \x1b[1m${cli.msgs.helpSection_msgChainOptions.toLowerCase()}:\x1b[0m
    -m, --max-chars <integer>            ${cli.msgs.optionDesc_maxChars}.
    -k, --max-tokens <integer>           ${cli.msgs.optionDesc_maxTokens}.
    -t, --turns <integer>                ${cli.msgs.optionDesc_turnsToPreserve}.
    -C, --clear                          ${cli.msgs.optionDesc_clear}.

  \x1b[1m${cli.msgs.helpSection_flags.toLowerCase()}:\x1b[0m
    -x, --copy                           ${cli.msgs.optionDesc_copy}.
    -A, --no-suggest                     ${cli.msgs.optionDesc_noSuggest}.
    -V, --quiet                          ${cli.msgs.optionDesc_quiet}.

  \x1b[1m${cli.msgs.helpSection_gitOptions.toLowerCase()}:\x1b[0m
    -g, --commit-msg                     ${cli.msgs.optionDesc_commitMsg}.
    -G, --commit-msg-example <msg>       ${cli.msgs.optionDesc_commitMsgExample}.
    -d, --diff                           ${cli.msgs.optionDesc_diff}.

  \x1b[1m${cli.msgs.helpSection_funCmds.toLowerCase()}:\x1b[0m
    -P, --act-as <persona>               ${cli.msgs.optionDesc_actAs}
    -a, --ascii-art [subject]            ${cli.msgs.optionDesc_asciiArt}.
    -f, --fortune                        ${cli.msgs.optionDesc_fortune},
    -j, --joke                           ${cli.msgs.optionDesc_joke}.
    -r, --random-answer                  ${cli.msgs.optionDesc_randomAnswer}.

  \x1b[1m${cli.msgs.helpSection_appCmds.toLowerCase()}:\x1b[0m
    -i, --init                           ${cli.msgs.optionDesc_init}.
    -I, --interactive                    ${cli.msgs.optionDesc_interactive}.
    -h, --help                           ${cli.msgs.optionDesc_help}.
    -v, --version                        ${cli.msgs.optionDesc_version}.
    -S, --stats                          ${cli.msgs.optionDesc_stats}.
        --debug                          ${cli.msgs.optionDesc_debug}.

  \x1b[1mREPL ${cli.msgs.data_slashCmds}:\x1b[0m
    /help, /exit, /clear, /joke, /fortune, /random, /actas <persona>, /ascii [subject]
    /summarize <text|file|url>, /stats, /version, /commitmsg, /diff, /init
    /provider <name>, /maxchars <num>, /maxtokens <num>, /turns <num>
    /uilang <code>, /replylang <text>, /commitmsgexample <msg>
    /config <filepath|url>, /copy [on|off], /nosuggest [on|off]
    /quiet [on|off], /debug [on|off]

${cli.msgs.info_moreHelp}, ${cli.msgs.info_visit}: \x1b[1m${cli.urls.cliDocs}\x1b[0m`)
}

module.exports = { route }
