// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license

(async () => {

    // Import LIBS
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))
    await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add CHROME MSG listener
    chrome.runtime.onMessage.addListener(req => {
        if (req.action === 'notify') notify(req.msg, req.position)
        else if (req.action === 'alert') alert(req.title, req.msg, req.btns)
        else if (req.action === 'syncExtension') syncExtension()
    })

    // Init CONFIG
    await settings.load(settings.availKeys)

    // Define FEEDBACK functions

    function notify(msg, pos = '', notifDuration = '', shadow = '') {
        
        // Strip state word to append colored one later
        const foundState = ['ON', 'OFF'].find(word => msg.includes(word))
        if (foundState) msg = msg.replace(foundState, '')

        // Show notification
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, pos, notifDuration,
            shadow || chatgpt.isDarkMode() ? '' : 'shadow' )
        const notif = document.querySelector('.chatgpt-notif:last-child')

        // Append styled state word
        if (foundState) {
            const styledState = document.createElement('span')
            styledState.style.cssText = `color: ${
                foundState == 'OFF' ? '#ef4848 ; text-shadow: rgba(255, 169, 225, 0.44) 2px 1px 5px'
                                    : '#5cef48 ; text-shadow: rgba(255, 250, 169, 0.38) 2px 1px 5px' }`
            styledState.append(foundState) ; notif.append(styledState)
        }
    }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    // Define SYNC function

    async function syncExtension() {
        await settings.load(settings.availKeys)
        if (config.extensionDisabled) {
            // remove your hacks
        } else {
            // sync each potentially updated setting stored in lib/settings.js's settings.availKeys
        }
    }

    // Run MAIN routine

    if (config.extensionDisabled) return

    chatgpt.printAllFunctions() // to console
    if (!config.skipAlert) { // alert to extension load
        chatgpt.alert('≫ ChatGPT extension loaded! 🚀', // title
            'Success! Press Ctrl+Shift+J to view all chatgpt.js methods.', // msg
            function getHelp() { // button
                window.open(config.ghRepoURL + '/issues', '_blank', 'noopener') },
            function dontShowAgain() { // checkbox
                settings.save('skipAlert', !config.skipAlert) }
    )}

    await chatgpt.isLoaded()

    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...

})()
