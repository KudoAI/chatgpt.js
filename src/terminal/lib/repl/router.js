const run = require('../run'),
      settings = require('../settings')

const routes = {

    async provider(args) {
        if (!args.length) return log.info(`${cli.msgs.info_current} provider: ${cli.config.provider}`)
        cli.config.provider = args[0]
        log.success(`Provider ${cli.msgs.success_setTo} ${cli.config.provider}`)
    },

    uiLang(args) { run.uiLang(args[0]) },
    replyLang(args) { run.replyLang(args.join(' ')) },

    async summarize(args) {
        if (!args.length)
            return log.warn(`${cli.msgs.helpSection_usage}: ${settings.controls.summarize.display.repl}`)
        await run.summarize(args.join(' '))
    },

    async actAs(args) { await run.actAs(args.join(' ') || null) },
    async asciiArt(args) { await run.asciiArt(args.join(' ') || null) },

    async config(args) {
        if (!args.length) return log.warn(`${cli.msgs.helpSection_usage}: ${settings.controls.config.display.repl}`)
        await run.loadConfig(args[0])
    },

    maxChars(args) {
        if (!args.length) return log.info(`${cli.msgs.info_current} maxChars: ${cli.config.maxChars}`)
        const newMax = parseInt(args[0], 10)
        if (isNaN(newMax) || newMax < 1) log.error(`maxChars ${cli.msgs.error_nonPositiveNum}`)
        else {
            cli.config.maxChars = newMax
            log.success(`maxChars ${cli.msgs.success_setTo} ${cli.config.maxChars}`)
        }
    },

    maxTokens(args) {
        if (!args.length)
            return log.info(`${cli.msgs.info_current} maxTokens: ${cli.config.maxTokens || 'unlimited'}`)
        const newTokens = parseInt(args[0], 10)
        if (isNaN(newTokens) || newTokens < 1) log.error(`maxTokens ${cli.msgs.error_nonPositiveNum}`)
        else {
            cli.config.maxTokens = newTokens
            log.success(`maxTokens ${cli.msgs.success_setTo} ${cli.config.maxTokens}`)
        }
    },

    turnsToPreserve(args) {
        if (!args.length) return log.info(`${cli.msgs.info_current} turnsToPreserve: ${cli.config.turnsToPreserve}`)
        const newTurns = parseInt(args[0], 10)
        if (isNaN(newTurns) || newTurns < 1) log.error(`turns ${cli.msgs.error_nonPositiveNum}`)
        else {
            cli.config.turnsToPreserve = newTurns
            log.success(`turnsToPreserve ${cli.msgs.success_setTo} ${cli.config.turnsToPreserve}`)
        }
    },

    clear() { run.clear() },
    copy(args) { run.toggleCopy(args[0]) },
    noSuggest(args) { run.toggleNoSuggest(args[0]) },
    quietMode(args) { run.toggleQuiet(args[0]) },
    async commitMsg() { await run.commitMsg() },
    commitMsgExample(args) { run.commitMsgExample(args.join(' ')) },
    async diff() { await run.diff() },

    async sentiment(args) {
        if (!args.length)
            return log.warn(`${cli.msgs.helpSection_usage}: ${settings.controls.sentiment.display.repl}`)
        await run.sentiment(args.join(' '))
    },

    async joke() { await run.joke() },
    async fortune() { await run.fortune() },
    async randomAnswer() { await run.randomAnswer() },
    async init() { await run.init() },
    async help() { log.data(require('../../templates/help')) },
    version() { run.version() },
    stats() { run.stats() },
    exit() { env.rl?.close() ; process.exit(0) },
    debug(args) { run.toggleDebug(args[0]) }
}

module.exports = async input => {
    input = input.trim() ; if (!input.startsWith('/')) return
    const ctrlKey = Object.keys(settings.controls).find(key => settings.controls[key]?.regex?.repl?.test(input))
    if (!ctrlKey)
        return log.warn(`${cli.msgs.warn_unknownCmd}: ${input.split(/\s+/)[0]}. ${
            require('../string').toTitleCase(cli.msgs.info_type)} /help ${cli.msgs.warn_forAvailRun}.`)
    const rest = input.slice(settings.controls[ctrlKey].regex.repl.exec(input)?.[0]?.length).trim(),
          args = rest ? rest.split(/\s+/) : []
    if (routes[ctrlKey]) await routes[ctrlKey](args)
    else log.warn(`${cli.msgs.warn_noHandlerForCmd}: /${ctrlKey}`)
}
