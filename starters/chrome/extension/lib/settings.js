const config = {
    appSymbol: '🤖', appName: 'ChatGPT Extension',
    ghRepoURL: 'https://github.kudoai.com/chatgpt.js-chrome-starter' }

const settings = {

    load: function() {
        const keys = ( // original array if array, else new array from multiple args
            Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments))
        return Promise.all(keys.map((key) => { // resolve promise when all keys load
            return new Promise((resolve) => { // resolve promise when single key value loads
                chrome.storage.local.get(key, (result) => { // load from Chrome
                    config[key] = result[key] || false ; resolve()
    })})}))},

    save: function(key, value) {
        const obj = {} ; obj[key] = value
        chrome.storage.local.set(obj) // save to Chrome
        config[key] = value // save to memory
    }

}

export { config, settings }
