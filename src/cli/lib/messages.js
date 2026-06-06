const fs = require('fs'),
      path = require('path')

const msgChainPath = path.join(
    process.env.XDG_CACHE_HOME || path.join(process.env.HOME || '~', '.cache'), 'chatgpt.js', 'msgChain.json')

module.exports = {

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
            }
        } catch (err) { return [] }
    },

    saveChain(chain) {
        try {
            fs.mkdirSync(path.dirname(msgChainPath), { recursive: true })
            fs.writeFileSync(msgChainPath, JSON.stringify(chain), 'utf8')
        } catch (err) {}
    }
}
