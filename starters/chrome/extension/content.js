// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// (c) 2023 KudoAI & contributors under the MIT license
// Source: https://github.com/kudoai/chatgpt.js

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
    chatgpt.alert('≫ ChatGPT extension loaded! 🚀', // title
        'Success! Press Ctrl+Shift+I to view all chatgpt.js methods.', // msg
        function getHelp() { window.open(config.ghRepoURL + '/issues'); }); // button

    // Your code here...

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow ? shadow : ( chatgpt.isDarkMode() ? '' : 'shadow' ));}

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width );}

    // Define SYNC function

    syncExtension = () => { // settings, then disable modes or sync taller chatbox
        settings.load('extensionDisabled')
            .then(() => {
                if (config.extensionDisabled) {
                    // remove hacks
                } else {
                    // sync new settings in settings.load()
    }});};

})();
