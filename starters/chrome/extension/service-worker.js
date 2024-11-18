// Init APP data
const app = {
    symbol: '🤖',
    urls: {
        assetHost: 'https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js-chrome-starter',
        cjsMediaHost: 'https://media.chatgptjs.org',
        gitHub: 'https://github.com/KudoAI/chatgpt.js-chrome-starter',
        relatedExtensions: 'https://aiwebextensions.com',
        support: 'https://github.com/KudoAI/chatgpt.js-chrome-starter/issues'
    }
}

// Init SETTINGS props (for popup menu)
Object.assign(app, { settings: {
    // Add settings options as keys, with each key's value being an object that includes:
    // - 'type': the control type (e.g. 'toggle' or 'prompt')
    // - 'label': a descriptive label
    // - 'symbol' (optional): for icon display (e.g. ⌚)
    // NOTE: Toggles are disabled by default unless key name contains 'disabled' or 'hidden' (case insensitive)
    // NOTE: Also add each key name to settings.availKeys in lib/settings.js for proper loading
    // EXAMPLES:
    // autoScrollDisabled: { type: 'toggle', label: 'Auto-Scroll' },
    // replyLanguage: { type: 'prompt', symbol: '🌐', label: 'Reply Language' }
}})

chrome.storage.sync.set({ app }) // save to Chrome storage

// Launch ChatGPT on install
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason == 'install')
        chrome.tabs.create({ url: 'https://chatgpt.com/' })
})

// Sync settings to activated tabs
chrome.tabs.onActivated.addListener(activeInfo =>
    chrome.tabs.sendMessage(activeInfo.tabId, { action: 'syncStorageToUI' }))
