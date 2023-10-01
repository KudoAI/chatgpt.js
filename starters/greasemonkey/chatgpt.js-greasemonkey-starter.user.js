// ==UserScript==
// @name          ChatGPT Userscript
// @description   A Greasemonkey template to start using chatgpt.js like a boss
// @author        chatgpt.js
// @namespace     https://chatgpt.js.org
// @version       2023.10.1
// @license       MIT
// @match         https://chat.openai.com/*
// @icon          https://raw.githubusercontent.com/kudoai/chatgpt.js-greasemonkey-starter/main/media/images/icons/robot/icon48.png
// @icon64        https://raw.githubusercontent.com/kudoai/chatgpt.js-greasemonkey-starter/main/media/images/icons/robot/icon64.png
// @require       https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@2535c87dc1204a4dbe464b69450bfff6197d3d99/dist/chatgpt-2.3.5.min.js
// @grant         GM_getValue
// @grant         GM_setValue
// @noframes
// @homepageURL   https://github.com/kudoai/chatgpt.js-greasemonkey-starter
// @supportURL    https://github.com/kudoai/chatgpt.js-greasemonkey-starter/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license

(async () => {

    // Init config
    const config = { prefix: 'chatgptScript' }; loadSetting('skipAlert');

    // Print chatgpt.js methods
    await chatgpt.isLoaded(); chatgpt.printAllFunctions(); // to console

    // Show alert
    if (!config.skipAlert) {
        chatgpt.alert('≫ ChatGPT script loaded! 🚀', // title
            'Success! Press Ctrl+Shift+' // msg
                + ( navigator.userAgent.indexOf('Firefox') > -1 ? 'K' : 'J' )
                + ' to view all chatgpt.js functions.',
            function getHelp() { // button
                window.open('https://github.kudoai.com/chatgpt.js-greasemonkey-starter/issues', '_blank', 'noopener'); },
            function dontShowAgain() { // checkbox
                saveSetting('skipAlert', !config.skipAlert); });
    }

    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...
    // Your code here...

    // Define HELPER functions
    function loadSetting(...keys) { keys.forEach(key => { config[key] = GM_getValue(config.prefix + '_' + key, false); });}
    function saveSetting(key, value) { GM_setValue(config.prefix + '_' + key, value); config[key] = value; }

})();
