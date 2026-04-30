const data = require('./data')

const endpoints = {
    npmjsDLs: 'https://api.npmjs.org/downloads',
    pepyProjects: 'https://pepy.tech/projects'
}

module.exports = {

    async getDownloads(
          pkgName, // e.g. some-npm-pkg, npm:@adamlui/minify.js, pypi:translate-messages
        { ecosystem = 'npm', maxDays = 10, maxVers = 10 } = {}
    ) {
        if (pkgName.includes(':')) [ecosystem, pkgName] = pkgName.split(':')

        if (/npm|node/i.test(ecosystem)) { // fetch from endpoints.npmjsDLs
            function formatDate(date) { return date.toISOString().split('T')[0] }
            const dates = { end: new Date(), start: new Date() }
            dates.start.setMonth(dates.end.getMonth() -3)
            const npmjsURL = `${endpoints.npmjsDLs}/range/${formatDate(dates.start)}:${formatDate(dates.end)}/${pkgName}`
            log.info(`Fetching npm stats for ${pkgName}${
                env.modes.debug ? ` from\n${log.colors.bw}${npmjsURL}` : '' }...\n`)
            return (await (await data.fetch(npmjsURL)).json()).downloads // { downloads: [{ day, downloads }] }
                .sort((a, b) => new Date(b.day) - new Date(a.day)) // new ⇅ old
                .slice(0, maxDays) // cap rows
                .map(({ day: date, downloads }) => ({ date, downloads }))

        } else if (/^py/i.test(ecosystem)) { // fetch from endpoints.pepyProjects
            let rows = []
            const pepyURL = `${endpoints.pepyProjects}/${pkgName}`
            log.info(`Fetching PyPI/mirror stats for ${pkgName}${
                env.modes.debug ? ` from\n${log.colors.bw}${pepyURL}` : '' }...\n`)
            const respText = await (await data.fetch(pepyURL)).text(),
                  rePush = /self\.__next_f\.push\(\[\d+,\s*"((?:\\.|[^"\\])*)"\]\)/g
            let downloads = {}, match
            while ((match = rePush.exec(respText))) {
                try { // extract project.downloads
                    const inner = JSON.parse(`"${match[1]}"`),
                          data = JSON.parse(inner.substring(inner.indexOf(':') +1))
                    if (data[3]?.project) downloads = data[3].project.downloads
                } catch (err) {}
            }
            rows = Object.entries(downloads)
                .sort(([a], [b]) => new Date(b) - new Date(a)) // new ⇅ old
                .slice(0, maxDays) // cap rows
                .map(([date, data]) => ({ date, ...data }))
            const activeVers = new Set()
            rows.forEach(row => Object.keys(row).forEach(key => {
                if (key != 'date' && row[key] > 0) activeVers.add(key) }))
            const finalVers = [...activeVers]
                .sort((a, b) => b.localeCompare(a, undefined, { numeric: true })) // new ⇆ old
                .slice(0, maxVers) // cap columns
            return rows.map(row => {
                const result = { date: row.date }
                finalVers.forEach(ver => result[ver] = row[ver] || 0)
                return result
            })

        } else return log.debug(`${ecosystem} not supported.`)
    },

    getVer(type = 'any') { // or <'global'|'local'>
        let pkgVer
        if (type != 'global')
            try { // get local ver
                const localManifestPath = require('path').resolve(
                    process.cwd(), 'node_modules', cli.name, 'package.json')
                pkgVer = require(localManifestPath).version
            } catch (err) { log.debug(`${cli.msgs.error_readingLocalPkgVer}: ${err.message}`) }
        if (type == 'global' || type == 'all' && !pkgVer)
            try { // get global ver
                pkgVer = require('child_process').execSync(
                    `npm view ${JSON.stringify(cli.name)} version`
                ).toString().trim()
            } catch (err) { log.debug(`${cli.msgs.error_failedToFetchGlobalVer}: ${err.message}`) }
        return pkgVer
    }
}
