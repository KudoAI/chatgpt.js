// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2026 KudoAI & contributors under the MIT license

(async () => {

    // Import JS resources
    for (const resource of [
        'components/modals.js', 'lib/chatgpt.js', 'lib/dom.min.js', 'lib/feedback.js', 'lib/settings.js', 'lib/ui.js'
    ]) await import(chrome.runtime.getURL(resource))

    // Init ENV context
    window.env = { browser: { isMobile: chatgpt.browser.isMobile() }, ui: { scheme: ui.getScheme() }}
    Object.assign(env.browser, { get isCompact() { return innerWidth <= 480 }})

    // Import APP data
    ;({ app: window.app } = await chrome.storage.local.get('app'))

    chrome.runtime.onMessage.addListener(({ action, options, source }) => { // from service-worker.js + popup/index.html
        ({
            notify: () => feedback.notify(...['msg', 'pos', 'notifDuration', 'shadow'].map(arg => options[arg])),
            alert: () => modals.alert(...['title', 'msg', 'btns', 'checkbox', 'width'].map(arg => options[arg])),
            showAbout: () => {
                if (!source?.endsWith('service-worker.js')) return
                app.config.skipAlert = true
                chatgpt.isLoaded().then(() => modals.open('about'))
            },
            syncConfigToUI: () => syncConfigToUI(options)
        }[action]?.() || console.warn(`Chome msg listener warning: "${action}"`))
    })

    // Init SETTINGS
    await settings.load(Object.keys(settings.controls))
    if (!app.config.skipAlert) await settings.load('skipAlert') // only if not showing About modal

    // Define FUNCTIONS

    async function syncConfigToUI(options = {}) { // eslint-disable-line
        await settings.load('extensionDisabled', Object.keys(settings.controls)) // load from Chrome storage to app.config
        if (app.config.extensionDisabled) {
            // Remove all hacks
        } else {
            // Add/remove hacks to reflect each potentially updated setting per settings.controls in lib/settings.mjs
            // e.g. if you created toolbar popup toggle to hide ChatGPT footer using hiddenFooter key...
            // ...here you would use options.updatedKey == 'hiddenFooter' && app.config.hiddenFooter...
            // ...to conditionally append/remove hidden footer style...
            // ...(initial style creation + append if app.config.hiddenFooter would go in main routine)
        }
    }

    // Run MAIN routine

    chatgpt.printAllFunctions() // to console

    // CHILL a bit if your hacks depend on delayed DOM content
    await chatgpt.isLoaded()
    await new Promise(resolve => setTimeout(resolve, 500)) // sleep .5s

    // Add RISING PARTICLES styles for modals
    ;['gray', 'white'].forEach(color => document.head.append(
        dom.create.elem('link', { rel: 'stylesheet',
            href: `https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@71695ca/assets/styles/rising-particles/dist/${
                color}.min.css`
    })))

    if (app.config.extensionDisabled) return

    if (!app.config.skipAlert) // alert to extension load
        modals.alert('≫ ChatGPT extension loaded! 🚀', // title
            'Success! Press Ctrl+Shift+J to view all chatgpt.js methods.', // msg
            function getHelp() { // button
                open(`${app.urls.github}/issues`) },
            function dontShowAgain() { // checkbox
                settings.save('skipAlert', !app.config.skipAlert) }
        )

    // Monitor SCHEME PREF CHANGES to update modal colors + env.ui.scheme for your use
    new MutationObserver(handleSchemePrefChange).observe( // for site scheme pref changes
        document.documentElement, { attributes: true, attributeFilter: ['class'] })
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener( // for browser/system scheme pref changes
        'change', () => requestAnimationFrame(handleSchemePrefChange))
    function handleSchemePrefChange() {
        const displayedScheme = ui.getScheme()
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
