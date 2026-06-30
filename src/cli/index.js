#!/usr/bin/env node

(async () => {
    'use strict'

    // Init ENV
    const init = require('./lib/init')
    init.env()

    // Import LIBS
    globalThis.log = require('./lib/log')
    const fs = require('fs'),
          chatgpt = require(`../chatgpt${ env.modes.dev ? '' : '.min' }.js`),
          loader = require('./lib/loader').create({ width: env.width }),
          string = require('./lib/string')

    await init.cli()

    // Exec CMD arg if passed
    if (cli.config.init) return init.configFile()
    else if (cli.config.help) return log.help()
    else if (cli.config.version) return log.version()
    else if (cli.config.stats) return log.stats()

    if (!chatgpt.config?.apiKeys?.[cli.config.provider])
        chatgpt.setProvider(cli.config.provider, {
            key: process.env[`${cli.config.provider.toUpperCase()}_API_KEY`] })

    // Check if we should run interactive mode
    const isInteractive = cli.config.interactive || (!cli.config.joke && !cli.config.randomAnswer && !cli.config.summarize && cli.config.query === 'hi' && !env.args.some(arg => /^-+q/.test(arg)));

    if (isInteractive) {
        const readline = require('readline'),
              path = require('path'),
              os = require('os');

        const historyFile = path.join(os.homedir(), '.chatgpt_history');
        let history = [];
        if (fs.existsSync(historyFile)) {
            history = fs.readFileSync(historyFile, 'utf8').split('\n').filter(Boolean).reverse();
        }

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'chatgpt> ',
            historySize: 1000,
            history: history
        });

        rl.prompt();

        rl.on('line', async (line) => {
            const input = line.trim();
            if (!input) {
                rl.prompt();
                return;
            }
            if (/^(?:exit|quit)$/i.test(input)) {
                rl.close();
                return;
            }

            loader.start();
            try {
                await chatgpt.send(input, {
                    provider: cli.config.provider,
                    output: 'stdout',
                    onLoadStart: () => loader.stop({ clear: false })
                });
            } catch (err) {
                log.error(err.message || err);
            } finally {
                loader.stop();
                console.log(); // Newline before next prompt
                rl.prompt();
            }
        }).on('close', () => {
            fs.writeFileSync(historyFile, history.slice(0, 1000).reverse().join('\n') + '\n');
            process.exit(0);
        });

        return; // Keep process alive for REPL
    }

    // Get AI reply (one-off mode)
    loader.start()
    const query = cli.config.joke ? 'Tell me a joke and make it funny.'
                : cli.config.randomAnswer ? 'Generate a single random question on any topic, then answer it.'
                : cli.config.summarize ? `Summarize the following:\n\n${
                      string.looksLikePath(cli.config.summarize) ? fs.readFileSync(cli.config.summarize, 'utf8')
                    : cli.config.summarize }`
                : cli.config.query
    try {
        await chatgpt.send(query, {
            provider: cli.config.provider, output: 'stdout', onLoadStart: () => loader.stop({ clear: false })})
        if (/^(?:help|hi)$/.test(query)) log.help()
    } finally { loader.stop() }

})()
