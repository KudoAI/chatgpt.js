const chatgpt = require(`../../chatgpt${ env.modes.dev ? '' : '.min' }.js`), /* eslint-disable-line */
      loader = require('./loader').create({ width: env.width }),
      messages = require('./messages')

module.exports = {

    diff: {
        get() {
            const { execSync } = require('child_process')
            try { execSync('git rev-parse --git-dir', { encoding: 'utf8', stdio: 'ignore' }) }
            catch (err) { throw new Error(cli.msgs.error_notInGitRepo) }
            let diff
            try {
                diff = execSync('git diff --cached', { encoding: 'utf8' })
                if (!diff.trim()) diff = execSync('git diff', { encoding: 'utf8' })
                if (!diff.trim()) throw new Error(cli.msgs.warn_noChanges)
            } catch (err) { throw new Error(cli.msgs.error_failedToReadGitDiff) }
            return diff
        },

        async print() {
            let diff
            try { diff = this.get() } catch (err) { return log.error(err.message) }
            const prompt = 'Summarize the following git diff changes in plain, human-readable language (max 30 words):'
                         + `\n\n${diff.slice(0, 2000)}`
            loader.start()
            try {
                let reply = await chatgpt.send(prompt, { provider: cli.config.provider }),
                    summary = messages.extractFromJSON(reply).trim()
                console.log(summary)
            } finally { loader.stop() }
        }
    },

    async generateCommitMsg({ includeDiff = false } = {}) {
        let diff
        try { diff = this.diff.get() } catch (err) { return log.error(err.message) }
        const commitPrompt = 'Generate a concise, conventional commit message'
                           + ` (formatted like "${ cli.config.commitMsgExample || 'docs: updated shields' }")`
                           + ` based on this diff:\n\n${diff.slice(0, 3000)}`
        log.debug(`commitPrompt = ${commitPrompt}`)
        loader.start()
        let msg
        try {
            let reply = await chatgpt.send(commitPrompt, { provider: cli.config.provider })
            msg = messages.extractFromJSON(reply).trim()
            if (includeDiff) {
                const humanPrompt = 'Describe the following git diff changes in plain, human-readable language'
                                  + `(one sentence, max 15 words):\n\n${diff.slice(0, 2000)}`
                const humanReply = await chatgpt.send(humanPrompt, { provider: cli.config.provider })
                const humanDiff = messages.extractFromJSON(humanReply).trim()
                msg += `\n\n${humanDiff}`
            }
            console.log(msg)
            require('node-clipboardy').writeSync(msg)
            log.info(`${cli.msgs.info_copiedToClipboard}.`)
        } finally { loader.stop() }
    }
}
