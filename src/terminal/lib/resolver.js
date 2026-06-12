module.exports = {
    async resolveSrc(src) {
        if (!src) return log.error(`'src' arg required by resolveSrc()`)
        if (src.type == 'url') {
            const text = await (await require('./data').fetch(src.value)).text()
            if (!text) throw new Error(`Empty response from ${src.value}`)
            return text
        } else if (require('./string').looksLikePath(src))
            return require('fs').readFileSync(src, 'utf8')
        else return src
    }
}
