const color = module.exports = {
    nc: '\x1b[0m',
    hex: {
        br: '#ff0000',  by: '#ffff00',  bo: '#ffa500',   bg: '#00ff00',
        bw: '#ffffff', gry: '#808080', blk: '#000000', tlBG: '#008080'
    },
    schemes: {
        get default() {
            return [
                '#00e5bc', '#18c8ae', '#30ac9f', '#488f91', '#607383',
                '#775674', '#8f3966', '#a71d57', '#bf0049', '#9a1b5e'
            ].map(color.hexToANSI)
        },
        get rainbow() {
            return [
                '#e41a1c', '#ff7f00', '#ffff33', '#4daf4a', '#377eb8',
                '#984ea3', '#f781bf', '#999999', '#a65628', '#d95f02'
            ].map(color.hexToANSI)
        }
    },

    hexToANSI(hex) {
        const r = parseInt(hex.slice(1,3), 16),
              g = parseInt(hex.slice(3,5), 16),
              b = parseInt(hex.slice(5,7), 16)
        return `\x1b[38;2;${r};${g};${b}m`
    }
}

for (const hexKey of Object.keys(color.hex)) // add color[hexKey] getters that return ANSI
    Object.defineProperty(color, hexKey, { get: () => color.hexToANSI(color.hex[hexKey]) })
