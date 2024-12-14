#!/usr/bin/env node

require('child_process').exec('docsify serve docs').stdout.on('data', data => {
    console.log(data) ; require('open')('http://localhost:3000') })
