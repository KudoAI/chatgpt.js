// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2025 KudoAI & contributors under the MIT license

(async () => {

    // Import JS resources
    for (const resource of ['components/modals.js', 'lib/chatgpt.js', 'lib/dom.js', 'lib/settings.js'])
        await import(chrome.runtime.getURL(resource))

    // Init ENV context
    const env = { browser: { isMobile: chatgpt.browser.isMobile() }, ui: { scheme: getScheme() }}
    env.browser.isPortrait = env.browser.isMobile && (window.innerWidth < window.innerHeight)

    // Import APP data
    const { app } = await chrome.storage.local.get('app')

    // Export DEPENDENCIES to imported resources
    dom.import({ env }) // for env.ui.scheme
    modals.import({ app, env }) // for app data + env.<browser|ui> flags

    // Add CHROME MSG listener
    chrome.runtime.onMessage.addListener(req => { // from service-worker.js + popup/index.html
        if (req.action == 'notify')
            notify(...['msg', 'pos', 'notifDuration', 'shadow'].map(arg => req.options[arg]))
        else if (req.action == 'alert')
            modals.alert(...['title', 'msg', 'btns', 'checkbox', 'width'].map(arg => req.options[arg]))
        else if (req.action == 'showAbout') {
            config.skipAlert = true ; chatgpt.isLoaded().then(() => modals.open('about'))
        } else if (req.action == 'syncConfigToUI') syncConfigToUI(req.options)
    })

    // Init SETTINGS
    await settings.load(Object.keys(settings.controls))
    if (!config.skipAlert) await settings.load('skipAlert') // only if not showing About modal

    // Define FUNCTIONS

    function notify(msg, pos = '', notifDuration = '', shadow = '') {

        // Strip state word to append colored one later
        const foundState = ['ON', 'OFF'].find(word => msg.includes(word))
        if (foundState) msg = msg.replace(foundState, '')

        // Show notification
        chatgpt.notify(`${app.symbol} ${msg}`, pos, notifDuration, shadow || env.ui.scheme == 'dark' ? '' : 'shadow')
        const notif = document.querySelector('.chatgpt-notif:last-child')

        // Append styled state word
        if (foundState) {
            const stateStyles = {
                on: {
                    light: 'color: #5cef48 ; text-shadow: rgba(255,250,169,0.38) 2px 1px 5px',
                    dark:  'color: #5cef48 ; text-shadow: rgb(55,255,0) 3px 0 10px'
                },
                off: {
                    light: 'color: #ef4848 ; text-shadow: rgba(255,169,225,0.44) 2px 1px 5px',
                    dark:  'color: #ef4848 ; text-shadow: rgba(255, 116, 116, 0.87) 3px 0 9px'
                }
            }
            const styledStateSpan = document.createElement('span')
            styledStateSpan.style.cssText = stateStyles[foundState.toLowerCase()][env.ui.scheme]
            styledStateSpan.append(foundState) ; notif.append(styledStateSpan)
        }
    }

    async function syncConfigToUI(options) { // eslint-disable-line
        await settings.load('extensionDisabled', Object.keys(settings.controls)) // load from Chrome storage to content.js config
        if (config.extensionDisabled) {
            // Remove all hacks
        } else {
            // Add/remove hacks to reflect each potentially updated setting per settings.controls in lib/settings.mjs
            // e.g. if you created toolbar popup toggle to hide ChatGPT footer using hiddenFooter key...
            // ...here you would use options?.updatedKey == 'hiddenFooter' && config.hiddenFooter...
            // ...to conditionally append/remove hidden footer style...
            // ...(initial style creation + append if config.hiddenFooter would go in main routine)
        }
    }

    function getScheme() {
        return document.documentElement.className
            || (window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light')
    }

    // Run MAIN routine

    chatgpt.printAllFunctions() // to console

    // CHILL a bit if your hacks depend on delayed DOM content
    await chatgpt.isLoaded()
    await new Promise(resolve => setTimeout(resolve, 500)); // sleep .5s

    // Add RISING PARTICLES styles for modals
    ['gray', 'white'].forEach(color => document.head.append(
        dom.create.elem('link', { rel: 'stylesheet',
            href: `https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/styles/rising-particles/dist/${
                color}.min.css`
    })))

    if (config.extensionDisabled) return

    if (!config.skipAlert) // alert to extension load
        modals.alert('≫ ChatGPT extension loaded! 🚀', // title
            'Success! Press Ctrl+Shift+J to view all chatgpt.js methods.', // msg
            function getHelp() { // button
                open(`${app.urls.gitHub}/issues`) },
            function dontShowAgain() { // checkbox
                settings.save('skipAlert', !config.skipAlert) }
        )

    // Monitor SCHEME PREF CHANGES to update modal colors + env.ui.scheme for your use
    new MutationObserver(handleSchemePrefChange).observe( // for site scheme pref changes
        document.documentElement, { attributes: true, attributeFilter: ['class'] })
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener( // for browser/system scheme pref changes
        'change', () => requestAnimationFrame(handleSchemePrefChange))
    function handleSchemePrefChange() {
        const displayedScheme = getScheme()
        if (env.ui.scheme != displayedScheme) { env.ui.scheme = displayedScheme ;  modals.stylize() }
    }

    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...

})()
