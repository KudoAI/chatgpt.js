const fs = require('fs'),
      path = require('path')

const msgChainPath = path.join(
    process.env.XDG_CACHE_HOME || path.join(process.env.HOME || '~', '.cache'), 'chatgpt.js', 'msgChain.json')

module.exports = {

    extractFromText(str) {
        if (typeof str != 'string') return str
        const matches = [...str.matchAll(/(['"])text\1:\s*\1([^'"]*)\1/g)]
        return matches.length > 0 ? matches.map(match => match[2]).join('') : str
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
