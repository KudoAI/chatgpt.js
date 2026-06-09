const { execSync } = require('child_process'),
        fs = require('fs'),
        language = require('./language'),
        messages = require('./messages'),
        path = require('path'),
        settings = require('./settings')

module.exports = {

    async cli() {
        Object.assign(globalThis.cli ??= {}, require(`${env.paths.libData}/package-data.json`))
        cli.msgs = await language.getMsgs(cli.lang = settings.load('uiLang') || (
            env.modes.debug ? language.generateRandomLang({ excludes: ['en'] }) : language.getSysLang() ))
        cli.urls.cliDocs ||= `${cli.urls.docs.root}/#-command-line-usage`
        settings.load() // all keys to cli.config
        if (cli.config.autoClear) {
            const sessionFile = path.join(path.dirname(messages.chainPath), 'session.id')
            let currentSession
            if (process.env.WT_SESSION) currentSession = `wt:${process.env.WT_SESSION}`
            else if (process.env.TERM_SESSION_ID) currentSession = `macos:${process.env.TERM_SESSION_ID}`
            else {
                if (process.platform == 'win32') // use ppid
                    currentSession = `ppid:${process.ppid}`
                else { // use tty
                    try {
                        const tty = execSync('tty', { encoding: 'utf8', stdio: 'ignore' }).trim()
                        if (tty && tty != 'not a tty') currentSession = `tty:${tty.replace(/\//g, '_')}`
                    } catch (err) {}
                    currentSession ??= `ppid:${process.ppid}`
                }
            }
            let storedSession = ''
            try { if (fs.existsSync(sessionFile)) storedSession = fs.readFileSync(sessionFile, 'utf8') } catch (err) {}
            if (currentSession != storedSession) {
                try { if (fs.existsSync(messages.chainPath)) fs.unlinkSync(messages.chainPath) } catch (err) {}
                try { fs.writeFileSync(sessionFile, currentSession) } catch (err) {}
                log.debug(`autoClear: cleared message chain (new session: ${currentSession})`)
            }
        }
        cli.msgChain = messages.loadChain()
    },

    async configFile(filename = settings.configFilename) {
        const paths = { target: path.resolve(process.cwd(), filename) }

        if (fs.existsSync(paths.target)) // use existing config file
            return log.warn(`${cli.msgs.warn_configFileExists}:`, paths.target)
        if (fs.existsSync(paths.src = path.resolve(__dirname, `${env.paths.libData}/${filename}`)))
            fs.copyFileSync(paths.src, paths.target) // use found template

        else { // use jsDelivr copy
            const jsdURL = `${require('./jsdelivr').getPkgVerURL()}/${filename}`
            log.data(`${cli.msgs.info_fetchingRemoteConfigFrom} ${jsdURL}...`)
            try {
                const data = require('./data'),
                      resp = await data.fetch(jsdURL)
                if (resp.ok) data.atomicWrite(paths.target, await resp.text())
                else return log.warn(`${cli.msgs.warn_remoteConfigNotFound}: ${jsdURL} (${resp.status})`)
            } catch (err) {
                return log.warn(`${cli.msgs.warn_remoteConfigFailed}: ${jsdURL} ${err.message}`) }
        }

        log.success(`${cli.msgs.info_configFileCreated}: ${paths.target}\n`)
        log.tip(`${cli.msgs.tip_editToSetDefaults}.`)
        log.tip(`${cli.msgs.tip_cliArgsPrioritized}.`)
    },

    env() {
        Object.assign(globalThis.env ??= {}, {
            args: process.argv.slice(2),
            modes: { dev: /[\\/]src(?:[\\/]|$)/i.test(__dirname) },
            supports: { unicode: require('is-unicode-supported').default() },
            width: process.stdout.columns || 80
        })
        env.modes.debug = env.args.some(arg => /^--?(?:V|debug(?:[-_]?mode)?)$/.test(arg))
        env.paths = { libData: `../../${ env.modes.dev ? '..' : 'data' }` }
    }
}
