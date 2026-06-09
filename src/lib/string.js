const path = require('path')

module.exports = {

    toTitleCase(str) { return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) },

    looksLikePath(str) {
        if (typeof str != 'string') return false
        if (path.isAbsolute(str) || /^\.\.?[\\/]/.test(str)) return true
        return false
    },

    looksLikeURL(str) {
        if (!str || typeof str != 'string') return false
        try { return /^https?:$/.test(new URL(str).protocol) }
        catch (err) { return false }
    }
}
