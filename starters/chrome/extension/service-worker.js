const allowedHosts = ['chatgpt.com', 'chat.openai.com']

// Launch ChatGPT on install
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason == 'install')
        chrome.tabs.create({ url: 'https://chatgpt.com/' })
})

// Sync extension state/settings when ChatGPT tab active
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (allowedHosts.includes(new URL(tab.url).hostname)) {
            chrome.tabs.sendMessage(tab.id, { action: 'syncStorageToUI' })
}})})
