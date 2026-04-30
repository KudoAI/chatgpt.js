const colors = require('./color'),
    { getDownloads, getVer } = require('./pkg'),
      settings = require('./settings'),
      string = require('./string')

const nextMajVer = require('../../../package.json').version.replace(/^(\d+)\..*/, (_, major) => `${ +major +1 }.0.0`)

module.exports = {
    colors,

    break() { console.log() },
    configURL() { this.info(`${cli.msgs.info_exampleValidConfigFile}: ${cli.urls.config}`) },
    configURLandExit(...args) { this.error(...args); this.configURL(); process.exit(1) },
    data(msg) { console.log(`\n${colors.bw}${msg}${colors.nc}`) },
    dim(msg) { console.log(`${colors.gry}${msg}${colors.nc}`) },
    error(...args) { console.error(`\n${colors.br}ERROR:`, ...args, colors.nc) },
    errorAndExit(...args) { this.error(...args); this.helpDocsCmdsDocsURL(); process.exit(1) },
    ifNotQuiet(msg) { if (!cli.config.quietMode) this.info(msg) },
    info(msg) { console.info(`\n${colors.schemes.default[0]}${msg}${colors.nc}`) },
    success(msg) { console.log(`\n${colors.bg}${msg}${colors.nc}`) },
    tip(msg) { console.info(`${colors.by}TIP: ${msg}${colors.nc}`) },
    warn(...args) { console.warn(`\n${colors.bo}WARNING:`, ...args, colors.nc) },

    argDoesNothing(arg) {
        this.warn(`${cli.msgs.warn_option} ${arg} ${cli.msgs.warn_noLongerHasAnyEffect} ${
                     cli.msgs.warn_andWillBeRemoved} @ v${nextMajVer}`)
    },

    configKeyReplacedBy(oldKey, newKey, oldVal) {
        if (!this[`${oldKey}Warned`]) {
            this.warn(
                `${cli.msgs.info_configFile} ${cli.msgs.warn_option.toLowerCase()} '${oldKey}: ${oldVal}' ${
                   cli.msgs.warn_hasBeenReplacedBy} '${
                       newKey}: ${ settings.isNegKey(oldKey) != settings.isNegKey(newKey) ? !oldVal : oldVal }' ${
                   cli.msgs.warn_andWillBeRemoved} @ v${nextMajVer}`
            )
            this[`${oldKey}Warned`] = true
        }
    },

    debug(msg) {
        if (!env.modes.debug) return
        this.argIdx ??= env.args.findIndex(arg => /^--?(?:V|debug(?:[-_]?mode)?)$/.test(arg))
        if (this.argIdx +1 < env.args.length && !env.args[this.argIdx +1].startsWith('-')) // use --debug [targetKey]
            this.key ??= env.args[this.argIdx +1].replace('-', '_')
        if (this.key)
            this.val = cli.config[this.key] || `cli.config key "${this.key}" ${cli.msgs.warn_notFound.toLowerCase()}`
        else
            this.val = cli.config
        msg += `\n${colors.gry}${JSON.stringify(this.val)}${colors.nc}`
        console.debug(`\n${colors.by}DEBUG:`, msg, colors.nc)
    },

    help(includeSections = ['header', 'usage', 'params', 'flags', 'cmds']) {
        cli.prefix = `${this.colors.tlBG}${this.colors.blk} ${cli.name.replace(/^@[^/]+\//, '')} ${this.colors.nc} `
        const helpSections = {
            header: [
                `\n├ ${cli.prefix}${cli.msgs.pkg_copyright}.`,
                `${cli.prefix}${cli.msgs.prefix_source}: ${cli.urls.src}`
            ],
            usage: [
                `\n${this.colors.bw}o ${cli.msgs.helpSection_usage}:${this.colors.nc}`,
                ` ${this.colors.bw}» ${this.colors.bg}${cli.cmdFormat}${this.colors.nc}`
            ],
            params: [
                `\n${this.colors.bw}o ${cli.msgs.helpSection_params}:${this.colors.nc}`,
                ` -q, --query "msg"           ${cli.msgs.optionDesc_query}.`,
                ` --ui-lang="code"            ${cli.msgs.optionDesc_uiLang}.`,
                ` --config="path/to/file"     ${cli.msgs.optionDesc_config}.`
            ],
            flags: [
                `\n${this.colors.bw}o ${cli.msgs.helpSection_flags}:${this.colors.nc}`,
                ` -V, --quiet                 ${cli.msgs.optionDesc_quiet}.`
            ],
            cmds: [
                `\n${this.colors.bw}o ${cli.msgs.helpSection_cmds}:${this.colors.nc}`,
                ` -i, --init                  ${cli.msgs.optionDesc_init}.`,
                ` -h, --help                  ${cli.msgs.optionDesc_help}.`,
                ` -v, --version               ${cli.msgs.optionDesc_version}.`,
                `     --stats                 ${cli.msgs.optionDesc_stats}.`,
                `     --debug                 ${cli.msgs.optionDesc_debug}.`
            ]
        }
        includeSections.forEach(section => // print valid arg elems
            helpSections[section]?.forEach(line => printHelpMsg(line, /header|usage/.test(section) ? 1 : 29)))
        console.info(`\n${cli.msgs.info_moreHelp}, ${
            cli.msgs.info_visit}: ${this.colors.bw}${cli.urls.cliDocs}${this.colors.nc}`)

        function printHelpMsg(msg, indent) { // wrap msg + indent 2nd+ lines
            const terminalWidth = process.stdout.columns || 80,
                  words = msg.match(/\S+|\s+/g),
                  lines = [], prefix = '| '

            // Split msg into lines of appropriate lengths
            let currentLine = ''
            words.forEach(word => {
                const lineLength = terminalWidth -( !lines.length ? 0 : indent )
                if (currentLine.length + prefix.length + word.length > lineLength) { // cap/store it
                    lines.push(!lines.length ? currentLine : currentLine.trimStart())
                    currentLine = ''
                }
                currentLine += word
            })
            lines.push(!lines.length ? currentLine : currentLine.trimStart())

            // Print formatted msg
            lines.forEach((line, idx) => console.info(prefix +(
                idx == 0 ? line // print 1st line unindented
                    : ' '.repeat(indent) + line // print subsequent lines indented
            )))
        }
    },

    helpDocsCmdsDocsURL() {
        console.info(`\n${
            cli.msgs.info_moreHelp}, ${cli.msgs.info_type} ${
                colors.bw}${cli.name.split('/')[1]} --<docs|help>${colors.nc} ${
                cli.msgs.info_or} ${cli.msgs.info_visit}\n${colors.by}${cli.urls.docs}${colors.nc}`
        )
    },

    initCmd(invalidKey) {
        if (invalidKey)
            this.warn(
                `${cli.msgs.error_invalidKey} '${invalidKey}' ${cli.msgs.error_foundIn}\n`
                + `${log.colors.gry}${cli.configPath}`
            )
        if (!this.initTipped) {
            this.break()
            this.tip(`${
                string.toTitleCase(cli.msgs.info_type)} '${cli.name} init' ${
                    cli.msgs.info_toCreateDefaultConfig}`
            )
            this.initTipped = true
        }
    },

    invalidConfigKey(key) { if (!this[`${key}Tipped`]) { this.initCmd(key) ; this[`${key}Tipped`] = true } },

    async stats(pkgName = cli.name, options = { ecosystem: 'npm', maxDays: 8, maxVers: 5, scheme: 'default' }) {
        const pkgStats = await getDownloads(pkgName, options),
              schemeData = colors.schemes[options.scheme]
        if (!schemeData) return this.error(`Scheme '${options.scheme}' not found!`)
        const colorMap = Object.fromEntries(schemeData.map((hex, idx) => [`c${idx}`, hex])),
              statsTable = new (require('console-table-printer').Table)({ colorMap })
        pkgStats.forEach((row, idx) => // build colored rows
            statsTable.addRow(row, { color: `c${Math.floor(idx / pkgStats.length * schemeData.length)}` }))
        statsTable.printTable()
    },

    version() {
        this.info(cli.name)
        this.data(`${
            cli.msgs.prefix_globalVer}: ${ getVer('global') || 'none' }\n${
            cli.msgs.prefix_localVer }: ${ getVer('local')  || 'none' }`
        )
    }
}
