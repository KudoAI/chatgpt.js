#!/usr/bin/env node

require('child_process').exec('docsify serve docs --o').stdout.on('data', data =>
    console.log(data + 'To stop the server, press Ctrl+C'))
