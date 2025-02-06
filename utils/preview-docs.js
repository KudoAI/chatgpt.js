#!/usr/bin/env node

// Init UI COLORS
const bw = '\x1b[97m', // bright white
      nc = '\x1b[0m'   // no color

require('child_process').exec('docsify serve docs -o').stdout.on('data', data =>
    console.log(data + `Press ${bw}CTRL+C${nc} to stop server`))
