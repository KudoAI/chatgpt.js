window.config = {}
window.settings = {

    controls: {
        // Add settings options as keys, with each key's value being an object that includes:
        // - 'type': the control type (e.g. 'toggle', 'slider', 'link' or 'prompt')
        // - 'label': a descriptive label
        // - 'defaultVal' (optional): default value of setting (true for toggles if unspecified, false otherwise)
        // - 'category' (optional): string key from this.categories to group control under
        // - 'symbol' (optional): for icon display (e.g. ⌚)
        // - 'helptip' (optional): tooltip to display on hover

        // NOTE: Controls are displayed in top-to-bottom order (within categories and in top-level)
        // NOTE: Toggles are disabled by default unless defaultVal is true
        //    ...or key name contains 'disabled' or 'hidden' (case insensitive)

        // EXAMPLES:
        // autoScrollDisabled: { type: 'toggle', label: 'Auto-Scroll' },
        // replyLanguage: { type: 'prompt', symbol: '🌐', label: 'Reply Language' }
    },

    categories: {
        // Add category entries as keys, with each key's value being an object that includes:
        // - 'label': a descriptive label
        // - 'symbol' (optional): for icon display (e.g. ⌚)
        // - 'color' (optional): hex code (w/o #) of color for left-border
        // - 'helptip' (optional): tooltip to display on hover
        // - 'autoExpand' (optional): true/false to auto-expand categories on toolbar icon click

        // NOTE: Categories are displayed in top-to-bottom order

        // EXAMPLE:
        // displaySettings: {
        //     symbol: '🖥️', color: '94fca2', label: 'Display Settings', helptip: 'Display-related settings' }
    },

    typeIsEnabled(key) { // for menu labels + notifs to return ON/OFF for type w/o suffix
        const reInvertFlags = /disabled|hidden/i
        return reInvertFlags.test(key) // flag in control key name
            && !reInvertFlags.test(this.controls[key]?.label) // but not in label name
                ? !config[key] : config[key] // so invert since flag reps opposite type state, else don't
    },

    load(...keys) {
        return Promise.all(keys.flat().map(async key => // resolve promise when all keys load
            config[key] = (await chrome.storage.local.get(key))[key] ?? initDefaultVal(key)))
        function initDefaultVal(key) {
            const ctrlData = this.controls?.[key]
            return ctrlData?.defaultVal ?? ( ctrlData?.type == 'slider' ? 100 : ctrlData?.type == 'toggle' )
        }
    },

    save(key, val) {
        chrome.storage.local.set({ [key]: val }) // save to Chrome extension storage
        config[key] = val // save to memory
    }
};
