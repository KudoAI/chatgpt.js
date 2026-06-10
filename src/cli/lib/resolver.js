module.exports = {
    async resolveSrc(src) {
        if (src && typeof src == 'object' && src.type == 'url') {
            const text = await (await require('./data').fetch(src.value)).text()
            if (!text) throw new Error(`Empty response from ${src.value}`)
            return text
        } else if (typeof src == 'string' && require('../../lib/string').looksLikePath(src))
            return require('fs').readFileSync(src, 'utf8')
        else return src
    }
}
