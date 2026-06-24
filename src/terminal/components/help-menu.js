const run = require('../lib/run'),
      settings = require('../lib/settings'),
      term = require('terminal-kit').terminal

const argMap = {}
Object.entries(settings.controls).forEach(([key, ctrl]) => {
    if (ctrl.display?.repl) {
        const match = ctrl.display.repl.match(/<([^>]+)>/)
        if (match) argMap[key] = match[1]
    }
})

const cmdHandlers = {}
;['init', 'version', 'stats', 'clear', 'commitMsg', 'diff', 'interactive',
  'asciiArt', 'joke', 'fortune', 'randomAnswer', 'summarize', 'sentiment', 'actAs']
    .forEach(cmd => cmdHandlers[cmd] = (...args) => run[cmd](...args))

const categoryMap = {
    provider: 'Parameters', uiLang: 'Parameters', replyLang: 'Parameters',
    query: 'Parameters', summarize: 'Parameters', actAs: 'Parameters',
    asciiArt: 'Parameters', config: 'Parameters',
    maxChars: 'Message Chain Options', maxTokens: 'Message Chain Options',
    turnsToPreserve: 'Message Chain Options', clear: 'Message Chain Options',
    copy: 'Flags', noSuggest: 'Flags', quietMode: 'Flags',
    commitMsg: 'Git Options', diff: 'Git Options', commitMsgExample: 'Git Options',
    sentiment: 'Data Commands',
    joke: 'Fun Commands', fortune: 'Fun Commands', randomAnswer: 'Fun Commands',
    init: 'Application Commands', interactive: 'Application Commands',
    help: 'Application Commands', version: 'Application Commands', stats: 'Application Commands'
}
const categoryOrder = [
    'Parameters', 'Message Chain Options', 'Flags',
    'Git Options', 'Data Commands', 'Fun Commands', 'Application Commands'
]

function buildHelpItems() {
    const items = [],
          isREPL = !!env.modes.repl
    categoryOrder.forEach(cat =>
        Object.entries(settings.controls).forEach(([key, ctrl]) => {
            if (categoryMap[key] != cat || (isREPL && !ctrl.display?.repl)) return
            const desc = (() => {
                const desc = cli.msgs[`optionDesc_${key}`] || ctrl.desc || ''
                return typeof desc == 'function' ? desc() : String(desc)
            })()
            const argPattern = argMap[key]
            const label = isREPL ? ctrl.display?.repl
                : (ctrl.display?.cli || key) + (argPattern ? ` <${argPattern}>` : '')
            items.push({
                key, label, desc, category: cat, handler: cmdHandlers[key],
                needsArg: !!argPattern, argPattern,
                longFlag: (() => {
                    const display = ctrl.display?.cli ; if (!display) return null
                    const parts = display.split(',').map(part => part.trim())
                    return parts.find(part => part.startsWith('--')) || display
                })(),
                type: ctrl.type,
                shortKey: (ctrl.display?.cli || '').match(/^-(\w)[, ]/)?.[1] || null
            })
        })
    )
    return items
}

function showHelp() {
    return new Promise(resolve => {
        const items = buildHelpItems()
        let selectedIdx = 0, scrollOffset = 0, exited = false, resolved = false
        const configOnly = [
            'provider', 'uiLang', 'replyLang', 'maxChars', 'maxTokens', 'turnsToPreserve', 'commitMsgExample', 'config']
        const keyMap = {}
        items.forEach((item, idx) => { if (item.shortKey) keyMap[item.shortKey] = idx })
        const maxLabelLen = items.reduce((max, item) => Math.max(max, item.label.length), 0)
        const allLines = [], itemLineMap = {}, itemHeaderLine = {}
        let currentCategory = '', headerIdx = -1
        items.forEach((item, idx) => {
            if (item.category !== currentCategory) {
                currentCategory = item.category
                allLines.push({ type: 'category', text: `${currentCategory}:`, itemIdx: null })
                headerIdx = allLines.length -1
            }
            allLines.push({ type: 'item', text: `  ${item.label.padEnd(maxLabelLen + 2)} ${item.desc}`, itemIdx: idx })
            itemLineMap[idx] = allLines.length -1
            itemHeaderLine[idx] = headerIdx
        })
        render()
        term.grabInput({ mouse: false })
        term.on('key', onKey)
        term.on('resize', render)

        function doResolve() {
            if (!resolved) {
                resolved = true
                if (env.modes.repl && env.rl) env.rl.resume()
                resolve()
            }
        }

        function onKey(name) {
            if (exited) return
            const v = viewLines()
            if (['UP', 'LEFT'].includes(name) && selectedIdx > 0) {
                selectedIdx-- ; render()
            } else if (['DOWN', 'RIGHT'].includes(name) && (selectedIdx < items.length -1)) {
                selectedIdx++ ; render()
            } else if (name == 'HOME') {
                selectedIdx = scrollOffset = 0 ; render()
            } else if (name == 'END') {
                selectedIdx = items.length -1
                scrollOffset = Math.max(0, allLines.length - v)
                render()
            } else if (name == 'PAGE_UP') {
                const step = Math.max(1, v -1),
                      curLine = itemLineMap[selectedIdx] || 0
                let newLine = Math.max(0, curLine - step)
                for (let i = 0 ; i < allLines.length ; i++)
                    if (allLines[i].type == 'item' && allLines[i].itemIdx >= 0 && i >= newLine) {
                        selectedIdx = allLines[i].itemIdx; break
                    }
                render()
            } else if (name == 'PAGE_DOWN') {
                const step = Math.max(1, v -1),
                      curLine = itemLineMap[selectedIdx] || 0
                let newLine = Math.min(allLines.length -1, curLine + step)
                for (let i = allLines.length -1 ; i >= 0 ; i--)
                    if (allLines[i].type == 'item' && allLines[i].itemIdx >= 0 && i <= newLine) {
                        selectedIdx = allLines[i].itemIdx; break
                    }
                render()
            } else if (name == 'ENTER') {
                exited = true
                term.grabInput(false)
                const selected = items[selectedIdx]
                term.clear()
                if (env.modes.repl) {
                    if (selected.handler && !selected.needsArg) {
                        process.stdin.push(`/${selected.key}\n`)
                        return doResolve()
                    } else if (selected.type == 'flag' && selected.longFlag) {
                        cli.config[selected.key] = true
                        const readline = require('readline')
                        const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
                        rl.question(`chatgpt ${selected.longFlag} `, answer => {
                            rl.close()
                            let raw = (answer || '').trim().replace(/^(--query|-q)\s+/, '')
                            const final = raw || cli.msgs.query_hi
                            process.stdin.push(final.startsWith('/') ? final + '\n' : `/${final}\n`)
                            doResolve()
                        })
                        return
                    } else if (selected.needsArg && selected.argPattern) {
                        term(`\n${selected.label} – ${selected.desc}\n`)
                        const readline = require('readline')
                        const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
                        rl.question(`Enter ${selected.argPattern}: `, answer => {
                            rl.close()
                            if (!answer || answer.trim() === '') return doResolve()
                            const val = answer.trim()

                            if (configOnly.includes(selected.key)) {
                                cli.config[selected.key] = val
                                term('\n%s set to %s\n', selected.label, val)
                                const rl2 = readline.createInterface({ input: process.stdin, output: process.stdout })
                                rl2.question(`chatgpt ${selected.longFlag || selected.key} ${val} `, query => {
                                    rl2.close()
                                    let raw = (query || '').trim().replace(/^(--query|-q)\s+/, '')
                                    const final = raw || cli.msgs.query_hi
                                    process.stdin.push(final.startsWith('/') ? final + '\n' : `/${final}\n`)
                                    doResolve()
                                })
                                return
                            }

                            const runMethod = selected.handler
                            if (runMethod && typeof runMethod == 'function') {
                                const result = runMethod(val)
                                return result && typeof result.then == 'function' ? result.then(doResolve) : doResolve()
                            }

                            cli.config[selected.key] = val
                            term('\n%s set to %s\n', selected.label, val)
                            const rl2 = readline.createInterface({ input: process.stdin, output: process.stdout })
                            rl2.question(`chatgpt ${selected.longFlag || selected.key} ${val} `, query => {
                                rl2.close()
                                let raw = (query || '').trim().replace(/^(--query|-q)\s+/, '')
                                const final = raw || cli.msgs.query_hi
                                process.stdin.push(final.startsWith('/') ? final + '\n' : `/${final}\n`)
                                doResolve()
                            })
                        })
                        return
                    }
                    term(`\n${selected.label} – ${selected.desc}\nPress any key to continue...`)
                    return term.once('key', () => { term.clear(); doResolve() })
                }

                // ---------- CLI MODE (unchanged) ----------
                const { build: buildQuery } = require('../lib/query'),
                        readline = require('readline')
                if (selected.handler && !selected.needsArg) {
                    const result = selected.handler()
                    return result && typeof result.then == 'function' ? result.then(doResolve) : doResolve()
                }
                if (selected.type == 'flag' && selected.longFlag) {
                    cli.config[selected.key] = true
                    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
                    return rl.question(`chatgpt ${selected.longFlag} `, answer => {
                        rl.close()
                        let raw = answer.trim().replace(/^(--query|-q)\s+/, '')
                        const final = raw || cli.msgs.query_hi
                        run.query(buildQuery(final)).then(doResolve)
                    })
                }
                if (selected.needsArg && selected.argPattern) {
                    term(`\n${selected.label} – ${selected.desc}\n`)
                    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
                    rl.question(`Enter ${selected.argPattern}: `, answer => {
                        rl.close()
                        term.clear()
                        if (!answer || answer.trim() === '') return doResolve()
                        const val = answer.trim()
                        if (configOnly.includes(selected.key)) {
                            cli.config[selected.key] = val
                            term(`\n${selected.label} set to ${val}\n`)
                            const rl2 = readline.createInterface({ input: process.stdin, output: process.stdout })
                            return rl2.question(`chatgpt ${selected.longFlag || selected.key} ${val} `, query => {
                                rl2.close()
                                let raw = query.trim().replace(/^(--query|-q)\s+/, '')
                                const final = raw || cli.msgs.query_hi
                                run.query(buildQuery(final)).then(doResolve)
                            })
                        }
                        const runMethod = selected.handler
                        if (runMethod && typeof runMethod == 'function') {
                            const result = runMethod(val)
                            return result && typeof result.then == 'function' ? result.then(doResolve) : doResolve()
                        }
                        cli.config[selected.key] = val
                        term(`\n${selected.label} set to ${val}\n`)
                        const rl2 = readline.createInterface({ input: process.stdin, output: process.stdout })
                        rl2.question(`chatgpt ${selected.longFlag || selected.key} ${val} `, query => {
                            rl2.close()
                            let raw = query.trim().replace(/^(--query|-q)\s+/, '')
                            const final = raw || cli.msgs.query_hi
                            run.query(buildQuery(final)).then(doResolve)
                        })
                    })
                    return
                }
                term(`\n${selected.label} – ${selected.desc}\nPress any key to continue...`)
                term.once('key', () => { term.clear(); doResolve() })
            } else if (name == 'ESCAPE') {
                exited = true
                term.grabInput(false)
                term.clear()
                doResolve()
            } else if (name.length === 1 && name.match(/\w/)) {
                let char = name
                if (keyMap[char] == undefined) {
                    const alt = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
                    if (keyMap[alt] != undefined) char = alt
                }
                if (keyMap[char] != undefined) {
                    selectedIdx = keyMap[char]
                    scrollIntoView()
                    render()
                }
            }
        }

        function render() {
            term.moveTo(1, 1)
            term.eraseDisplayBelow()
            term.bold('Interactive Help – ↑/↓/PgUp/PgDn/Home/End to nav, Enter to run, Esc to exit.')
            term('\n')
            term('  Shortcuts: ')
            term.dim(Object.keys(keyMap).sort().join(' '))
            term('\n\n')
            const v = viewLines(), total = allLines.length
            const headerLine = itemHeaderLine[selectedIdx]
            if (headerLine != undefined && headerLine >= 0 && headerLine < scrollOffset)
                scrollOffset = Math.max(0, headerLine)
            scrollIntoView()
            const start = scrollOffset, end = Math.min(total, start + v)
            for (let i = start ; i < end ; i++) {
                const line = allLines[i]
                if (line.type == 'category') {
                    if (i > start) term('\n')
                    term.bold(line.text + '\n')
                } else {
                    if (line.itemIdx === selectedIdx) term.bgBlue.white(line.text)
                    else term.white(line.text)
                    if (i < end -1) term('\n')
                }
            }
        }

        function scrollIntoView() {
            const v = viewLines(), total = allLines.length, selLine = itemLineMap[selectedIdx] || 0
            if (selLine < scrollOffset) scrollOffset = Math.max(0, selLine)
            else if (selLine >= scrollOffset + v) {
                const maxScroll = Math.max(0, total - v)
                scrollOffset = Math.min(maxScroll, selLine - v +1)
            }
            if (scrollOffset > Math.max(0, total - v)) scrollOffset = Math.max(0, total - v)
            if (scrollOffset < 0) scrollOffset = 0
        }

        function viewLines() { return term.height -11 - +!!env.modes.repl }
    })
}

module.exports = showHelp
