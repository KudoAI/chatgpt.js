// Open ChatGPT on install
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason == 'install') chrome.tabs.create({ url: 'https://chat.openai.com/' });
});
