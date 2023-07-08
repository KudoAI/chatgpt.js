// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org
// (c) 2023 KudoAI & contributors under the MIT license
// Source: https://github.com/kudoai/chatgpt.js

(async () => {

    // Import libs
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));

    await chatgpt.isLoaded();
    chatgpt.printAllFunctions(); // to console
    chatgpt.alert('≫ ChatGPT extension loaded! 🚀', // title
        'Success! Press Ctrl+Shift+I to view all chatgpt.js methods.', // msg
        function getHelp() { window.open(GM_info.scriptSupportURL || GM_info.script.supportURL || ''); }); // button

    // Your code here...

})();
