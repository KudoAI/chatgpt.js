// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// (c) 2023 KudoAI & contributors under the MIT license
// Source: https://github.com/kudoai/chatgpt.js
// Latest minified release: https://code.chatgptjs.org/chatgpt-latest-min.js

(async () => {

    // Import libs
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js'));
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));

    // Add Chrome action msg listener
    chrome.runtime.onMessage.addListener((request) => {
        if (request.action === 'notify') notify(request.msg, request.position);
        else if (request.action === 'alert') alert(request.title, request.msg, request.btns);
        else if (typeof window[request.action] === 'function') {
            const args = Array.isArray(request.args) ? request.args // preserve array if supplied
                       : request.args !== undefined ? [request.args] : []; // convert to array if single or no arg
            window[request.action](...args); // call expression functions
        }
        return true;
    });

    await chatgpt.isLoaded();
    chatgpt.printAllFunctions(); // to console
    settings.load('skipAlert').then(() => {
        if (!config.skipAlert) {
            chatgpt.alert('≫ ChatGPT extension loaded! 🚀', // title
                'Success! Press Ctrl+Shift+J to view all chatgpt.js methods.', // msg
                function getHelp() { // button
                    window.open(config.ghRepoURL + '/issues', '_blank', 'noopener'); },
                function dontShowAgain() { // checkbox
                    settings.save('skipAlert', !config.skipAlert); }
    );}});

    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow || chatgpt.isDarkMode() ? '' : 'shadow' ); }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width );}

    // Define SYNC function

    syncExtension = () => {
        settings.load('extensionDisabled').then(() => {
            if (config.extensionDisabled) {
                // remove your hacks
            } else {
                // sync each potentially updated setting passed to settings.load()
    }});};

})();
