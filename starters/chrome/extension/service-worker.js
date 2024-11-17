// Init APP data
const app = { symbol: '🤖', urls: { gitHub: 'https://github.com/KudoAI/chatgpt.js-chrome-starter' }}
chrome.storage.sync.set({ app })

// Launch ChatGPT on install
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason == 'install')
        chrome.tabs.create({ url: 'https://chatgpt.com/' })
})

// Sync settings to activated tabs
chrome.tabs.onActivated.addListener(activeInfo =>
    chrome.tabs.sendMessage(activeInfo.tabId, { action: 'syncStorageToUI' }))
