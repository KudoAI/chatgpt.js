// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// © 2023–2024 KudoAI & contributors under the MIT license

(async () => {

    // Import libs
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))
    await import(chrome.runtime.getURL('lib/chatgpt.js'))

    // Add Chrome action msg listener
    chrome.runtime.onMessage.addListener((request) => {
        if (request.action === 'notify') notify(request.msg, request.position);
        else if (request.action === 'alert') alert(request.title, request.msg, request.btns)
        else if (request.action === 'syncExtension') syncExtension()
        return true
    })

    // Init CONFIG
    await settings.load(settings.availKeys)

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow || chatgpt.isDarkMode() ? '' : 'shadow' ) }

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
