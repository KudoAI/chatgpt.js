module.exports = (() =>
`  \x1b[1m${cli.msgs.helpSection_params.toLowerCase()}:\x1b[0m
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
${ env.mode == 'repl' ? `\n  \x1b[1mREPL ${cli.msgs.data_slashCmds}:\x1b[0m
    /help, /exit, /clear, /joke, /fortune, /random, /actas <persona>, /ascii [subject]
    /summarize <text|file|url>, /stats, /version, /commitmsg, /diff, /init
    /provider <name>, /maxchars <num>, /maxtokens <num>, /turns <num>
    /uilang <code>, /replylang <text>, /commitmsgexample <msg>
    /config <filepath|url>, /copy [on|off], /nosuggest [on|off]
    /quiet [on|off], /debug [on|off]
` : '' }
${cli.msgs.info_moreHelp}, ${cli.msgs.info_visit}: \x1b[1m${cli.urls.cliDocs}\x1b[0m
`)()