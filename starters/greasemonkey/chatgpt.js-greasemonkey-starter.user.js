// ==UserScript==
// @name          ChatGPT Userscript
// @description   A Greasemonkey template to start using chatgpt.js like a boss
// @author        chatgpt.js
// @namespace     https://chatgpt.js.org
// @version       2023.7.7.7
// @license       MIT
// @match         https://chat.openai.com/*
// @icon          https://raw.githubusercontent.com/kudoai/chatgpt.js-greasemonkey-starter/main/media/images/icons/robot/icon48.png
// @icon64        https://raw.githubusercontent.com/kudoai/chatgpt.js-greasemonkey-starter/main/media/images/icons/robot/icon64.png
// @require       https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@8483b553675c3444db5c6b40a8686531c11b2a35/dist/chatgpt-1.11.0.min.js
// @grant         none
// @noframes
// @homepageURL   https://github.com/kudoai/chatgpt.js-greasemonkey-starter
// @supportURL    https://github.com/kudoai/chatgpt.js-greasemonkey-starter/issues
// ==/UserScript==

(async () => {
    await chatgpt.isLoaded();
    chatgpt.notify('🤖 ChatGPT Userscript ON');
    chatgpt.printAllFunctions(); // in console
    // Your code here...
})();
