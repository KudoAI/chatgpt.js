window.config = {}
window.settings = {

    // Init SETTINGS props (for popup menu)
    controls: {
        // Add settings options as keys, with each key's value being an object that includes:
        // - 'type': the control type (e.g. 'toggle' or 'prompt')
        // - 'label': a descriptive label
        // - 'defaultVal' (optional): default value of setting (true for toggles if unspecified, false otherwise)
        // - 'symbol' (optional): for icon display (e.g. ⌚)
        // NOTE: Toggles are disabled by default unless key name contains 'disabled' or 'hidden' (case insensitive)
        // NOTE: Controls are displayed in top-to-bottom order
        // EXAMPLES:
        // autoScrollDisabled: { type: 'toggle', label: 'Auto-Scroll' },
        // replyLanguage: { type: 'prompt', symbol: '🌐', label: 'Reply Language' }
    },

    load(...keys) {
        return Promise.all(keys.flat().map(async key => // resolve promise when all keys load
            window.config[key] = (await chrome.storage.sync.get(key))[key]
                ?? this.controls[key]?.defaultVal ?? this.controls[key]?.type == 'toggle'
        ))
    },

    save(key, val) {
        chrome.storage.sync.set({ [key]: val }) // save to Chrome extension storage
        window.config[key] = val // save to memory
    }
};
