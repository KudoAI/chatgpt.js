module.exports = {
    async resolveSrc(src, deps = {}) {
        const {
              fetch = require('./data').fetch,
              fs = require('fs'),
              string = require('../../lib/string')
        } = deps

        if (src && typeof src == 'object' && src.type == 'url') {
            const text = await (await fetch(src.value)).text()
            if (!text) throw new Error(`Empty response from ${src.value}`)
            return text
        } else if (typeof src == 'string' && string.looksLikePath(src))
            return fs.readFileSync(src, 'utf8')
        else return src
    }
}
