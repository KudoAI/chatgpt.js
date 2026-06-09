module.exports = {
    toTitleCase(str) { return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) },

    looksLikePath(str) {
        const path = require('path')
        return path.isAbsolute(str) || str.includes(path.sep) || /^\.\.?[\\/]/.test(str) || path.extname(str)
    }
}
