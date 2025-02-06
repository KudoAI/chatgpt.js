#!/usr/bin/env node

(async () => {

    // Import LIBS
    const { default: getPort, portNumbers } = await import('get-port'),
          spawn = require('cross-spawn') // to preserve cmd prompt

    // Init UI COLORS
    const bw = '\x1b[97m', // bright white
          by = '\x1b[93m', // bright yellow
          br = '\x1b[91m', // bright red
          nc = '\x1b[0m'   // no color

    if (!process.argv.includes('--spawned')) // spawn new terminal from OG one
        return spawn('node', [__filename, '--spawned', ...process.argv.slice(2)],
            { shell: true, detached: true, stdio: 'ignore' })
                .on('error', err => console.error(`${br}Failed to open new terminal: ${err.message}${nc}`))
                .unref() // detach process to allow immediate return to cmd prompt

    // PREVIEW site
    const availPort = await getPort({ port: portNumbers(3000, 3999) })
    require('child_process').exec(`docsify serve docs -o -p ${availPort}`).stdout.on('data', () =>
        console.log(`Previewing ${bw}chatgpt.js.org${nc} @ ${by}http://localhost:${availPort}${nc}\n\n`
            + 'Close this window to stop server')
    )

})()
