const chatgptURL = 'https://chatgpt.com'

// Init APP data
chrome.storage.local.set({ app: {
    name: chrome.runtime.getManifest().name,
    version: chrome.runtime.getManifest().version, symbol: '🤖', cssPrefix: 'chatgpt-extension',
    author: { name: 'KudoAI', url: 'https://kudoai.com' },
    urls: {
        assetHost: 'https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js-chrome-starter@latest',
        chatgptJS: 'https://chatgptjs.org',
        contributors: 'https://docs.chatgptjs.org/#-contributors',
        gitHub: 'https://github.com/KudoAI/chatgpt.js-chrome-starter',
        relatedExtensions: 'https://aiwebextensions.com',
        support: 'https://github.com/KudoAI/chatgpt.js-chrome-starter/issues'
    }
}}) // save to Chrome storage

// Launch CHATGPT on install
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason == 'install') // to exclude updates
        chrome.tabs.create({ url: chatgptURL })
})

// Sync SETTINGS to activated tabs
chrome.tabs.onActivated.addListener(activeInfo =>
    chrome.tabs.sendMessage(activeInfo.tabId, { action: 'syncConfigToUI' }))

// Show ABOUT modal on ChatGPT when toolbar button clicked
chrome.runtime.onMessage.addListener(async req => {
    if (req.action == 'showAbout') {
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
        const chatgptTab = new URL(activeTab.url).hostname == 'chatgpt.com' ? activeTab
            : await chrome.tabs.create({ url: chatgptURL })
        if (activeTab != chatgptTab) await new Promise(resolve => // after new tab loads
            chrome.tabs.onUpdated.addListener(function loadedListener(tabId, changeInfo) {
                if (tabId == chatgptTab.id && changeInfo.status == 'complete') {
                    chrome.tabs.onUpdated.removeListener(loadedListener) ; setTimeout(resolve, 500)
        }}))
        chrome.tabs.sendMessage(chatgptTab.id, { action: 'showAbout' })
    }
})
