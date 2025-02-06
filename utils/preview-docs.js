#!/usr/bin/env node

(async () => {

    // Import LIBS
    const { default: getPort, portNumbers } = await import('get-port')

    // Init UI COLORS
    const bw = '\x1b[97m', // bright white
          nc = '\x1b[0m'   // no color

    // PREVIEW site
    const availPort = await getPort({ port: portNumbers(3000, 3999) })
    require('child_process').exec(`docsify serve docs -o -p ${availPort}`).stdout.on('data', data =>
        console.log(data + `Press ${bw}CTRL+C${nc} to stop server`))

})()
