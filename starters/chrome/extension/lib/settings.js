window.config = {}
window.settings = {

    // Init SETTINGS props (for popup menu)
    controls: {
        // Add settings options as keys, with each key's value being an object that includes:
        // - 'type': the control type (e.g. 'toggle' or 'prompt')
        // - 'label': a descriptive label
        // - 'symbol' (optional): for icon display (e.g. ⌚)
        // NOTE: Toggles are disabled by default unless key name contains 'disabled' or 'hidden' (case insensitive)
        // NOTE: Controls are displayed in top-to-bottom order
        // EXAMPLES:
        // autoScrollDisabled: { type: 'toggle', label: 'Auto-Scroll' },
        // replyLanguage: { type: 'prompt', symbol: '🌐', label: 'Reply Language' }
    },

    load() {
        const keys = ( // original array if array, else new array from multiple args
            Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments))
        return Promise.all(keys.map(key => // resolve promise when all keys load
            new Promise(resolve => // resolve promise when single key value loads
                chrome.storage.sync.get(key, result => { // load from Chrome extension storage
                    window.config[key] = result[key] || false ; resolve()
    }))))},

    save(key, val) {
        chrome.storage.sync.set({ [key]: val }) // save to Chrome extension storage
        window.config[key] = val // save to memory
    }
};
