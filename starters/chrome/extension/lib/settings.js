const config = {
    appSymbol: '🤖', appName: 'ChatGPT Extension',
    ghRepoURL: 'https://github.kudoai.com/chatgpt.js-chrome-starter' }

const settings = {
    load() {
        const keys = ( // original array if array, else new array from multiple args
            Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments))
        return Promise.all(keys.map(key => // resolve promise when all keys load
            new Promise(resolve => // resolve promise when single key value loads
                chrome.storage.sync.get(key, result => { // load from Chrome
                    config[key] = result[key] || false ; resolve()
    }))))},

    save(key, val) {
        chrome.storage.sync.set({ [key]: val }) // save to Chrome
        config[key] = val // save to memory
    }
}

export { config, settings }
