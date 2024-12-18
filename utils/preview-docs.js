#!/usr/bin/env node

require('child_process').exec('docsify serve docs').stdout.on('data', data => {
    console.log(data) ; console.log('To stop the server, press Ctrl+C')
    require('open')('http://localhost:3000')
})
