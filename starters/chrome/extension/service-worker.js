// Init APP data
const app = {
    symbol: '🤖',
    urls: {
        cjsMediaHost: 'https://media.chatgptjs.org',
        gitHub: 'https://github.com/KudoAI/chatgpt.js-chrome-starter',
        assetHost: 'https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js-chrome-starter'
    }
}
chrome.storage.sync.set({ app })

// Launch ChatGPT on install
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason == 'install')
        chrome.tabs.create({ url: 'https://chatgpt.com/' })
})

// Sync settings to activated tabs
chrome.tabs.onActivated.addListener(activeInfo =>
    chrome.tabs.sendMessage(activeInfo.tabId, { action: 'syncStorageToUI' }))
