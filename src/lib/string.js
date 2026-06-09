const path = require('path')

module.exports = {

    looksLikePath(str) { return typeof str == 'string' && (path.isAbsolute(str) || /^\.\.?[\\/]/.test(str)) },

    looksLikeURL(str) {
        if (!str || typeof str != 'string') return false
        try { return /^https?:$/.test(new URL(str).protocol) }
        catch (err) { return false }
    },

    toTitleCase(str) { return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) }
}
