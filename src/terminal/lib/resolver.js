const string = require('./string')

module.exports = async src => {
    if (!src || typeof src != 'string') throw new Error(`'src' string arg required by resolver()`)
    if (string.looksLikeURL(src)) {
        const text = await (await require('./data').fetch(src)).text()
        if (!text) throw new Error(`Empty response from ${src}`)
        return { text, type: 'url' }
    } else if (string.looksLikePath(src))
        return { text: require('fs').readFileSync(src, 'utf8'), type: 'path' }
    else
        return { text: src, type: 'inline' }
}
