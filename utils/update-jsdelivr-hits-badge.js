#!/usr/bin/env node

'use strict'

const fs = require('fs'),
      path = require('path')

function formatNumber(number) {
    return new Intl.NumberFormat('en-US').format(number)
}

function getRepoFromUrl(repoUrl = '') {
    const repoPath = repoUrl
        .replace(/^git@github\.com:/, '')
        .replace(/^https?:\/\/github\.com\//, '')
        .replace(/^ssh:\/\/git@github\.com\//, '')
        .replace(/\.git$/, '')

    const [owner, repo] = repoPath.split('/')
    if (!owner || !repo) throw new Error(`Unable to parse repository from ${repoUrl}`)

    return { owner, repo }
}

async function fetchJson(url) {
    const response = await fetch(url, {
        headers: { 'User-Agent': 'chatgpt.js jsDelivr hits badge updater' }
    })
    if (!response.ok) throw new Error(`Request failed (${response.status}) for ${url}`)
    return response.json()
}

async function main() {
    const pkg = require(path.join(__dirname, '..', 'package.json')),
          { owner, repo } = getRepoFromUrl(pkg.repository?.url || ''),
          npmPackage = pkg.name,
          statsBaseURL = 'https://data.jsdelivr.com/v1/stats/packages',
          [npmStats, ghStats] = await Promise.all([
              fetchJson(`${statsBaseURL}/npm/${encodeURIComponent(npmPackage)}?period=year`),
              fetchJson(`${statsBaseURL}/gh/${owner}/${repo}?period=year`)
          ]),
          totalHits = npmStats.hits.total + ghStats.hits.total,
          badgeData = {
              schemaVersion: 1,
              label: 'jsDelivr',
              message: `${formatNumber(totalHits)} npm + gh`,
              color: '2bbbd8',
              labelColor: '464646'
          },
          badgePath = path.join(__dirname, '..', 'assets', 'data', 'jsdelivr-hits.json')

    fs.writeFileSync(badgePath, `${JSON.stringify(badgeData, null, 2)}\n`)
    console.log(`Updated ${path.relative(process.cwd(), badgePath)} with ${formatNumber(totalHits)} combined hits.`)
}

main().catch(err => {
    console.error(err.message)
    process.exit(1)
})