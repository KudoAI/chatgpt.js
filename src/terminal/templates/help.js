const { bw, nc } = log.colors

function buildSlashCmdsBlock() {
    const lines = [] ; let currentLine = '    '
    require('../components/slash-cmds').forEach((cmd, i) => {
        const segment = (i ? ', ' : '') + cmd
        if (currentLine.length + segment.length > (process.stdout.columns || 80) -4) {
            lines.push(currentLine)
            currentLine = `    ${cmd}`
        } else
            currentLine += segment
    })
    if (currentLine.trim()) lines.push(currentLine)
    return lines.join('\n')
}

module.exports = (() =>
`  ${bw}${cli.msgs.helpSection_params.toLowerCase()}:${nc}
   -p, --provider <provider>            ${cli.msgs.optionDesc_provider}.
   -u, --ui-lang <code>                 ${cli.msgs.optionDesc_uiLang}.
   -L, --reply-lang <code|name>         ${cli.msgs.optionDesc_replyLang}.
   -q, --query <msg>                    ${cli.msgs.optionDesc_query}.
   -s, --summarize <filepath|text|url>  ${cli.msgs.optionDesc_summarize}.
   -c, --config <filepath|url>          ${cli.msgs.optionDesc_config}.

  ${bw}${cli.msgs.helpSection_msgChainOptions.toLowerCase()}:${nc}
   -m, --max-chars <integer>            ${cli.msgs.optionDesc_maxChars}.
   -k, --max-tokens <integer>           ${cli.msgs.optionDesc_maxTokens}.
   -t, --turns <integer>                ${cli.msgs.optionDesc_turnsToPreserve}.
   -C, --clear                          ${cli.msgs.optionDesc_clear}.

  ${bw}${cli.msgs.helpSection_flags.toLowerCase()}:${nc}
   -x, --copy                           ${cli.msgs.optionDesc_copy}.
   -A, --no-suggest                     ${cli.msgs.optionDesc_noSuggest}.
   -V, --quiet                          ${cli.msgs.optionDesc_quiet}.

  ${bw}${cli.msgs.helpSection_gitOptions.toLowerCase()}:${nc}
   -g, --commit-msg                     ${cli.msgs.optionDesc_commitMsg}.
   -G, --commit-msg-example <msg>       ${cli.msgs.optionDesc_commitMsgExample}.
   -d, --diff                           ${cli.msgs.optionDesc_diff}.

  ${bw}${cli.msgs.helpSection_dataCmds.toLowerCase()}:${nc}
   -T, --sentiment                      ${cli.msgs.optionDesc_sentiment}.

  ${bw}${cli.msgs.helpSection_funCmds.toLowerCase()}:${nc}
   -P, --act-as <persona>               ${cli.msgs.optionDesc_actAs}
   -a, --ascii-art [subject]            ${cli.msgs.optionDesc_asciiArt}.
   -f, --fortune                        ${cli.msgs.optionDesc_fortune},
   -j, --joke                           ${cli.msgs.optionDesc_joke}.
   -r, --random-answer                  ${cli.msgs.optionDesc_randomAnswer}.

  ${bw}${cli.msgs.helpSection_appCmds.toLowerCase()}:${nc}
   -i, --init                           ${cli.msgs.optionDesc_init}.
   -I, --interactive                    ${cli.msgs.optionDesc_interactive}.
   -h, --help                           ${cli.msgs.optionDesc_help}.
   -v, --version                        ${cli.msgs.optionDesc_version}.
   -S, --stats                          ${cli.msgs.optionDesc_stats}.
       --debug                          ${cli.msgs.optionDesc_debug}.
${ env.mode == 'repl' ? `\n  ${bw}REPL ${cli.msgs.data_slashCmds}:${nc}\n${buildSlashCmdsBlock()}\n` : '' }
${cli.msgs.info_moreHelp}, ${cli.msgs.info_visit}: ${bw}${cli.urls.cliDocs}${nc}
`
)()
