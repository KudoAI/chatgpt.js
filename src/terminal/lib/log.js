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

    debug(msg, { type } = {}) {
        if (!env.modes.debug) return
        if (type == 'config') { // append config data
            this.argIdx ??= env.args.findIndex(arg => /^--?(?:D|debug(?:[-_]?mode)?)$/.test(arg))
            if (this.argIdx +1 < env.args.length && !env.args[this.argIdx +1].startsWith('-')) // use --debug [targetKey]
                this.key ??= env.args[this.argIdx +1].replace('-', '_')
            if (this.key)
                this.val = cli.config[this.key] || `cli.config key "${this.key}" ${cli.msgs.warn_notFound.toLowerCase()}`
            else
                this.val = cli.config
            msg += `\n${colors.gry}${JSON.stringify(this.val)}${colors.nc}`
        }
        console.debug(`\n${colors.by}DEBUG:`, msg, colors.nc)
    },

    help() {
        const toolName = cli.name.replace(/^@[^/]+\//, ''),
              copyright = cli.msgs.pkg_copyright,
              idx = copyright.indexOf('KudoAI'),
              firstPart = copyright.slice(0, idx).trim(),
              secondPart = copyright.slice(idx),
              restOfFirst = firstPart.replace(toolName, '').trimStart()

        // Header
        cli.prefix = `${this.colors.tlBG}${this.colors.blk} ${toolName} ${this.colors.nc}`
        console.log('|')
        console.log(`├ ${cli.prefix} ${restOfFirst}`)
        console.log(`|  ${secondPart}`)
        console.log(`| ${cli.prefix} ${cli.msgs.prefix_source}:`)
        console.log(`|  ${cli.urls.src}`)
        console.log('|')

        // Usage
        console.log(`${this.colors.bw}o ${cli.msgs.helpSection_usage.toLowerCase()}:${this.colors.nc}`)
        printHelpMsg(` ${this.colors.bw}» ${this.colors.bg}${cli.cmdFormat}${this.colors.nc}`, 1)
        console.log('|')

        // Template sections
        const templateLines = require('../templates/help').trimEnd().split('\n')
        for (let i = 0 ; i < templateLines.length ; i++) {
            let line = templateLines[i]
            if (line.startsWith('  ')) line = line.slice(2)
            const trimmed = line.trimStart()
            if (!trimmed) {
                let nextNonEmpty
                for (let j = i + 1 ; j < templateLines.length; j++)
                    if (templateLines[j].trim()) { nextNonEmpty = templateLines[j].trimStart() ; break }
                console.log(nextNonEmpty?.startsWith(cli.msgs.info_moreHelp) ? '' : '|')
                continue
            }
            if (/^\\x1b\[1m|^REPL\b/.test(trimmed)) {
                console.log(this.colors.bw + 'o ' + trimmed)
                continue
            } else if (/^\s*[-/]/.test(line)) {
                printHelpMsg(line, 38)
                continue
            }
            console.log(trimmed)
        }

        function printHelpMsg(msg, indent) {
            const lines = [], prefix = '| '
            let currentLine = ''
            msg.match(/\S+|\s+/g).forEach(word => {
                const lineLength = process.stdout.columns || 80 - (!lines.length ? 0 : indent)
                if (currentLine.length + prefix.length + word.length > lineLength) { // cap/store it
                    lines.push(!lines.length ? currentLine : currentLine.trimStart())
                    currentLine = ''
                }
                currentLine += word
            })
            lines.push(!lines.length ? currentLine : currentLine.trimStart())
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
                cli.msgs.info_or} ${cli.msgs.info_visit}\n${
                colors.by}${cli.urls.docs.root}/#readme${colors.nc}`
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
