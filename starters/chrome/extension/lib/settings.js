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

    typeIsEnabled(key) { // for menu labels + notifs to return ON/OFF for type w/o suffix
        const reInvertFlags = /disabled|hidden/i
        return reInvertFlags.test(key) // flag in control key name
            && !reInvertFlags.test(this.controls[key]?.label) // but not in label name
                ? !config[key] : config[key] // so invert since flag reps opposite type state, else don't
    },

    load(...keys) {
        return Promise.all(keys.flat().map(async key => // resolve promise when all keys load
            config[key] = (await chrome.storage.local.get(key))[key]
                ?? this.controls[key]?.defaultVal ?? this.controls[key]?.type == 'toggle'
        ))
    },

    save(key, val) {
        chrome.storage.local.set({ [key]: val }) // save to Chrome extension storage
        config[key] = val // save to memory
    }
};
