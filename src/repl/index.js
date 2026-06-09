#!/usr/bin/env node

'use strict'

const { start } = require('./lib/start')

if (require.main == module) {
    globalThis.log = require('../lib/log')
    const init = require('../cli/lib/init')
    init.env()
    init.cli().then(start)
}

module.exports = { start }
