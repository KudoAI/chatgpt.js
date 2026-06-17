const string = require('./string')

module.exports = {
    async resolveSrc(src) {
        if (!src || typeof src != 'string') throw new Error(`'src' string arg required by resolveSrc()`)
        if (string.looksLikeURL(src)) {
            console.log('looks like url')
            const text = await (await require('./data').fetch(src)).text()
            if (!text) throw new Error(`Empty response from ${src}`)
            return { text, type: 'url' }
        } else if (string.looksLikePath(src)) {
            console.log('looks like path')
            return { text: require('fs').readFileSync(src, 'utf8'), type: 'path' }
        } else {
            console.log('looks like inline')
            return { text: src, type: 'inline' }
        }
    }
}
