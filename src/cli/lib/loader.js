const colors = require('ansi-colors'),
      readline = require('readline')

module.exports = {
    create(options = {}) {
        const {
            width = process.stdout.columns || 80,
            speed = 100,
            bandSize = 10,
            palette = [
                colors.bold.red,
                colors.bold.yellow,
                colors.bold.green,
                colors.bold.cyan,
                colors.bold.magenta,
                colors.bold.blue
            ]
        } = options

        let frame = 0, interval = null, stopped = true

        function render() {
            if (stopped) return
            let out = ''
            for (let i = 0; i < width; i++) {
                const idx = Math.floor((i + frame) / bandSize) % palette.length
                out += palette[idx]('─')
            }
            frame++
            readline.cursorTo(process.stdout, 0)
            readline.clearLine(process.stdout, 0)
            process.stdout.write(out)
        }

        function start() {
            if (!process.stdout.isTTY) return // avoid weird output in pipes
            if (!stopped) return
            stopped = false
            interval = setInterval(render, speed)
            process.once('exit', stop) // clean up if process exits unexpectedly
        }

        function stop() {
            if (stopped) return
            stopped = true
            clearInterval(interval)
            interval = null
            readline.cursorTo(process.stdout, 0)
            readline.clearLine(process.stdout, 0)
        }

        return { start, stop }
    }
}
