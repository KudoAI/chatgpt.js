// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license

(async () => {

    // Import LIBS
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))
    await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Import APP data
    const { app } = await chrome.storage.sync.get('app')

    // Add CHROME MSG listener
    chrome.runtime.onMessage.addListener(req => {
        if (req.action == 'notify') notify(req.msg, req.pos)
        else if (req.action == 'alert') siteAlert(req.title, req.msg, req.btns)
        else if (req.action == 'syncStorageToUI') syncStorageToUI()
    })

    // Init CONFIG
    await settings.load(...settings.availKeys, 'skipAlert')

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
        return chatgpt.alert(`${app.symbol} ${title}`, msg, btns, checkbox, width )}

    // Define SYNC function

    async function syncStorageToUI() { // on toolbar popup toggles + ChatGPT tab activations
        await settings.load(settings.availKeys) // load from Chrome storage to content.js config
        if (config.extensionDisabled) {
            // Remove all hacks
        } else {
            // Add/remove hacks to reflect each potentially updated setting per settings.availKeys in lib/settings.js
            // e.g. if you created toolbar popup toggle to hide ChatGPT footer using hiddenFooter key...
            // ...here you would use config.hiddenFooter to conditionally append/remove hidden footer style...
            // ...(initial style creation + append if config.hiddenFooter would go in main routine)
        }
    }

    // Run MAIN routine

    if (config.extensionDisabled) return

    chatgpt.printAllFunctions() // to console
    if (!config.skipAlert) // alert to extension load
        chatgpt.alert('≫ ChatGPT extension loaded! 🚀', // title
            'Success! Press Ctrl+Shift+J to view all chatgpt.js methods.', // msg
            function getHelp() { // button
                chrome.tabs.create({ url: `${app.urls.gitHub}/issues` }) },
            function dontShowAgain() { // checkbox
                settings.save('skipAlert', !config.skipAlert) }
        )

    await chatgpt.isLoaded() // if your hacks depend on delayed DOM content

    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...

})()
