module.exports = {
    async generateCommitMsg() {
        const chatgpt = require(`../../chatgpt${ env.modes.dev ? '' : '.min' }.js`),
              clipboardy = require('node-clipboardy'),
            { execSync } = require('child_process'),
              loader = require('./loader').create({ width: env.width }),
              messages = require('./messages')
        try { execSync('git rev-parse --git-dir', { encoding: 'utf8', stdio: 'ignore' }) }
        catch (err) { return log.error(cli.msgs.error_notInGitRepo) }
        let diff
        try {
            diff = execSync('git diff --cached', { encoding: 'utf8' })
            if (!diff.trim()) diff = execSync('git diff', { encoding: 'utf8' })
            if (!diff.trim()) return log.warn(cli.msgs.warn_noChanges)
        } catch (err) { return log.error(cli.msgs.error_failedToReadGitDiff) }
        const prompt = 'Generate a concise, conventional commit message'
                     + ` (formatted like "${ cli.config.commitMsgExample || 'docs: updated shields' }")`
                     + ` based on this diff:\n\n${diff.slice(0, 3000)}`
        log.debug(`prompt = ${prompt}`)
        loader.start()
        try {
            const reply = await chatgpt.send(prompt, { provider: cli.config.provider, output: 'string' }),
                  msg = messages.extractFromJSON(reply).trim()
            console.log(msg)
            clipboardy.writeSync(msg)
            log.info(`${cli.msgs.info_copiedToClipboard}.`)
        } finally { loader.stop() }
    }
}
