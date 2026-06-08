const fs = require('fs'),
      path = require('path'),
      os = require('os')

const msgChainPath = path.join(
    process.env.XDG_CACHE_HOME || path.join(os.homedir(), '.cache'), 'chatgpt.js', 'msgChain.json')

module.exports = {

    clearChain() {
        try {
            if (fs.existsSync(msgChainPath)) {
                fs.unlinkSync(msgChainPath)
                return log.info(`${cli.msgs.info_msgChainCleared}!`)
            } else
                return log.warn(`${cli.msgs.warn_noMsgChainToClear}.`)
        } catch (err) { return log.error(`${cli.msgs.error_failedToClearMsgChain}:`, err.message) }
    },

    extractFromJSON(str) {
        if (typeof str != 'string') return str
        try {
            const parsed = JSON.parse(str)
            return Array.isArray(parsed) ? parsed.map(item => item.text?.trim()).filter(Boolean).join('') : str
        } catch (err) {
            const matches = [...str.matchAll(/(['"])text\1\s*:\s*(['"])(.*?)\2/gs)]
            return matches.length ? matches.map(match => match[3]?.trim()).join('') : str
        }
    },

    loadChain() {
        try {
            if (fs.existsSync(msgChainPath)) {
                const parsed = JSON.parse(fs.readFileSync(msgChainPath, 'utf8'))
                return Array.isArray(parsed) ? parsed : []
            } else return []
        } catch (err) { log.warn(err.message) ; return [] }
    },

    saveChain(chain) {
        try {
            fs.mkdirSync(path.dirname(msgChainPath), { recursive: true })
            fs.writeFileSync(msgChainPath, JSON.stringify(chain), 'utf8')
        } catch (err) {}
    }
}
