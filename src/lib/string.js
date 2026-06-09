module.exports = {

    toTitleCase(str) { return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) },

    looksLikePath(str) {
        const path = require('path')
        return path.isAbsolute(str) || str.includes(path.sep) || /^\.\.?[\\/]/.test(str) || path.extname(str)
    },

    looksLikeURL(str) {
        if (!str || typeof str != 'string') return false
        try { return /^https?:$/.test(new URL(str).protocol) }
        catch (err) { return false }
    }
}
