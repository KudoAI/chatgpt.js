module.exports = {

    atomicWrite(filePath, data, encoding = 'utf8') { // to prevent TOCTOU
        const fs = require('fs'),
              path = require('path'),
              tmpPath = path.join(path.dirname(filePath), `.${path.basename(filePath)}.tmp`)
        fs.writeFileSync(tmpPath, data, encoding) ; fs.renameSync(tmpPath, filePath)
    },

    fetch(url) { // to support Node.js < v21
        return typeof fetch == 'undefined' ? new Promise((resolve, reject) => { // using https?.get()
            const protocol = url.match(/^([^:]+):\/\//)[1]
            if (!/^https?$/.test(protocol))
                reject(new Error(`${cli.msgs.error_invalidURL}.`))
            require(protocol).get(url, resp => {
                let rawData = ''
                resp.on('data', chunk => rawData += chunk)
                resp.on('end', () => resolve({ json: () => JSON.parse(rawData), text: () => rawData }))
            }).on('error', reject)
        }) : fetch(url) // using Node.js fetch()
    },

    flatten(json, { key = 'message' } = {}) { // eliminate need to ref nested keys
        const flatObj = {}
        for (const jsonKey in json) flatObj[jsonKey] =
            typeof json[jsonKey] == 'object' && key in json[jsonKey] ? json[jsonKey][key]
                                                                     : json[jsonKey]
        return flatObj
    }
}
