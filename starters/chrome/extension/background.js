// Add install/update actions
chrome.runtime.onInstalled.addListener((details) => {
    chrome.storage.local.set({ 'chatgptJS_extensionDisabled': false }); // auto-enable
    if (details.reason == 'install') chrome.tabs.create({ url: 'https://chat.openai.com/' }); // open ChatGPT
});

// Sync extension state/settings when ChatGPT tab active
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url.match(/^https:\/\/chat\.openai\.com/)) {
            chrome.tabs.sendMessage(tab.id, { action: 'syncExtension' });
}});});
