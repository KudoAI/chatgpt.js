const { marked } = require('marked'),
      { markedTerminal } = require('marked-terminal'),
      colors = require('./color')

let configured = false

function configure() {
    if (configured) return
    marked.use(markedTerminal({
        width: process.stdout.columns || 80,
        reflowText: true,
        emoji: env?.supports?.unicode ?? true,
        heading: text => `${colors.bg}${text}${colors.nc}`,
        firstHeading: text => `${colors.schemes.default[0]}${text}${colors.nc}`,
        codespan: text => `${colors.by}${text}${colors.nc}`,
        link: text => `${colors.schemes.default[4]}${text}${colors.nc}`,
        href: text => `${colors.schemes.default[4]}${text}${colors.nc}`
    }))
    configured = true
}

module.exports = {
    isEnabled() {
        if (cli.config.plainMode || cli.config.markdown === false) return false
        return process.stdout.isTTY
    },

    render(text) {
        if (!text) return ''
        configure()
        return marked.parse(text).trimEnd()
    }
}
