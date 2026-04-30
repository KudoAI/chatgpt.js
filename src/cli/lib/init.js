const language = require('./language'),
      settings = require('./settings')

module.exports = {

    async cli() {
        Object.assign(globalThis.cli ??= {}, require(`${env.paths.libData}/package-data.json`))
        cli.msgs = await language.getMsgs('en')
        cli.msgs = await language.getMsgs(cli.lang = settings.load('uiLang') || (
            env.modes.debug ? language.generateRandomLang({ excludes: ['en'] }) : language.getSysLang() ))
        cli.urls.cliDocs ||= `${cli.urls.docs}/#-command-line-usage`
        settings.load() // all keys to cli.config
    },

    async configFile(filename = settings.configFilename) {
        const fs = require('fs'),
              path = require('path'),
              paths = { target: path.resolve(process.cwd(), filename) }

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
            supports: { unicode: require('is-unicode-supported').default() }
        })
        env.modes.debug = env.args.some(arg => /^--?(?:V|debug(?:[-_]?mode)?)$/.test(arg))
        env.paths = { libData: `../../${ env.modes.dev ? '..' : 'data' }` }
    }
}
