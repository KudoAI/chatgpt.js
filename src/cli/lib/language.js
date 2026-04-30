const data = require('./data')

module.exports = {

    formatCode(langCode) { // to match locale dir name
        return langCode.replace(
            /([a-z]{2,8})[-_]([a-z]{2})/i, (_, lang, region) =>`${lang.toLowerCase()}_${region.toUpperCase()}`) },

    generateRandomLang({ includes = [], excludes = [] } = {}) {
        const fs = require('fs'),
              path = require('path')

        let locales = includes.length ? includes : (() => {

            // Read cache if found
            const cacheDir = path.join(__dirname, '../../.cache'),
                  localeCache = path.join(cacheDir, 'locales.json')
            if (fs.existsSync(localeCache))
                try { return JSON.parse(fs.readFileSync(localeCache, 'utf8')) } catch (err) {}

            // Discover pkg _locales
            const localesDir = path.resolve(__dirname, '../../../_locales')
            if (!fs.existsSync(localesDir)) return ['en']
            const locales = fs.readdirSync(localesDir, { withFileTypes: true })
                .filter(entry => entry.isDirectory()).map(entry => entry.name)
                .filter(name => /^\w{2}[-_]?\w{0,2}$/.test(name))

            // Cache result
            fs.mkdirSync(cacheDir, { recursive: true })
            data.atomicWrite(localeCache, JSON.stringify(locales, null, 2))

            return locales
        })()

        // Filter out excludes
        const excludeSet = new Set(excludes)
        locales = locales.filter(locale => !excludeSet.has(locale))

        // Get random language
        const randomLang = locales.length ? locales[Math.floor(Math.random() * locales.length)] : 'en'
        log.debug(`Random language: ${randomLang}`)

        return randomLang
    },

    async getMsgs(langCode = 'en') {
        langCode = module.exports.formatCode(langCode)
        if (env.msgs && langCode == cli.lang) return env.msgs // don't re-fetch same msgs

        let msgs = data.flatten( // local ones
            require(`../../${ env.modes.dev ? '../assets/data/_locales/en' : 'data' }/messages.json`))

        if (!langCode.startsWith('en')) { // fetch non-English msgs from jsDelivr
            if (require('non-latin-locales').includes(langCode.split('_')[0]) && !env.supports.unicode)
                return msgs // EN ones
            const msgBaseURL = `${require('./jsdelivr').getCommitURL(cli.commitHashes.locales)}/_locales`
            let msgURL = `${msgBaseURL}/${langCode}/messages.json`, msgFetchesTried = 0
            while (msgFetchesTried < 3)
                try { // fetch remote msgs
                    msgs = data.flatten(await (await data.fetch(msgURL)).json())
                    break
                } catch (err) { // retry up to 2X (region-stripped + EN)
                    msgFetchesTried++ ; if (msgFetchesTried >= 3) break
                    log.debug(msgURL = langCode.includes('-') && msgFetchesTried == 1 ?
                        msgURL.replace(/([^_]*)_[^/]*(\/.*)/, '$1$2') // strip region before retrying
                            : `${msgBaseURL}/en/messages.json` // else use EN msgs
                    )
                }
        }

        return msgs
    },

    getSysLang() {
        try {
            if (process.platform == 'win32')
                return require('child_process').execSync(
                    '(Get-Culture).TwoLetterISOLanguageName', { shell: 'powershell', encoding: 'utf-8' }
                ).trim()
            else { // macOS/Linux
                const pe = process.env
                return (pe.LANG || pe.LANGUAGE || pe.LC_ALL || pe.LC_MESSAGES || pe.LC_NAME)
                    .split('.')[0] // strip encoding e.g. .UTF-8
            }
        } catch (err) {
            log.error(`${cli.msgs.error_failedToFetchSysLang}:`, err.message)
            return 'en'
        }
    },

    validateLangCode(code) { return typeof code != 'string' ? false : /^[a-z]{2,8}(?:[-_][a-z]{2,3})?$/i.test(code) }
}
