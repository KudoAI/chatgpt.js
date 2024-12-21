// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license

(async () => {

    // Import JS resources
    for (const resource of ['components/modals.js', 'lib/chatgpt.js', 'lib/dom.js', 'lib/settings.js'])
        await import(chrome.runtime.getURL(resource))

    // Import APP data
    const { app } = await chrome.storage.sync.get('app')
    modals.dependencies.import({ app, siteAlert })

    // Add CHROME MSG listener
    chrome.runtime.onMessage.addListener(req => { // from service-worker.js + popup/index.html
        if (req.action == 'notify')
            notify(...['msg', 'pos', 'notifDuration', 'shadow'].map(arg => req.options[arg]))
        else if (req.action == 'alert')
            siteAlert(...['title', 'msg', 'btns', 'checkbox', 'width'].map(arg => req.options[arg]))
        else if (req.action == 'showAbout') chatgpt.isLoaded().then(() => { modals.open('about') })
        else if (req.action == 'syncConfigToUI') syncConfigToUI(req.options)
    })

    // Init SETTINGS
    await settings.load(Object.keys(settings.controls), 'skipAlert')

    // Define FEEDBACK functions

    function notify(msg, pos = '', notifDuration = '', shadow = '') {

        // Strip state word to append colored one later
        const foundState = ['ON', 'OFF'].find(word => msg.includes(word))
        if (foundState) msg = msg.replace(foundState, '')

        // Show notification
        chatgpt.notify(`${app.symbol} ${msg}`, pos, notifDuration,
            shadow || chatgpt.isDarkMode() ? '' : 'shadow' )
        const notif = document.querySelector('.chatgpt-notif:last-child')

        // Append styled state word
        if (foundState) {
            const styledStateSpan = document.createElement('span')
            styledStateSpan.style.cssText = `color: ${
                foundState == 'OFF' ? '#ef4848 ; text-shadow: rgba(255, 169, 225, 0.44) 2px 1px 5px'
                                    : '#5cef48 ; text-shadow: rgba(255, 250, 169, 0.38) 2px 1px 5px' }`
            styledStateSpan.append(foundState) ; notif.append(styledStateSpan)
        }
    }

    function siteAlert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        const alertID = chatgpt.alert(title, msg, btns, checkbox, width)
        return document.getElementById(alertID).firstChild
    }

    // Define SYNC function

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

    // Run MAIN routine

    chatgpt.printAllFunctions() // to console

    // CHILL a bit if your hacks depend on delayed DOM content
    await chatgpt.isLoaded()
    await new Promise(resolve => setTimeout(resolve, 500)); // sleep .5s

    // Add STARS styles for modals
    ['black', 'white'].forEach(color => document.head.append(
        dom.create.elem('link', { rel: 'stylesheet',
            href: `https://assets.aiwebextensions.com/styles/css/${color}-rising-stars.min.css?v=542104c`
    })))

    if (config.extensionDisabled) return

    if (!config.skipAlert) // alert to extension load
        chatgpt.alert('≫ ChatGPT extension loaded! 🚀', // title
            'Success! Press Ctrl+Shift+J to view all chatgpt.js methods.', // msg
            function getHelp() { // button
                chrome.tabs.create({ url: `${app.urls.gitHub}/issues` }) },
            function dontShowAgain() { // checkbox
                settings.save('skipAlert', !config.skipAlert) }
        )

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
