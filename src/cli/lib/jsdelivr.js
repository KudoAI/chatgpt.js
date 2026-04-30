module.exports = {

    getPkgVerURL(version) {
        version ||= cli.version ||= require('./pkg').getVer('local') || 'none'
        const pkgName = cli.name.split('/')[1],
              verTag = !/^\d+\.\d+\.\d+$/.test(version) ? 'latest' : `${pkgName}-${version}`
        return `${cli.urls.jsdelivr}@${verTag}/${pkgName}`
    },

    getCommitURL(hash = 'latest') { return `${cli.urls.jsdelivr}@${hash}/${cli.name.split('/')[1]}` }
}
