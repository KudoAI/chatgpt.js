(async () => {

    // Import settings.js
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))

    // Define FUNCTIONS

    function notify(msg, pos) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'notify', msg: msg, pos: pos || 'bottom-right' })
    })}

    function syncStorageToUI() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'syncStorageToUI' })
    })}

    function updateGreyness() {

        // Updated toolbar icon
        const iconDimensions = [16, 32, 64, 128], iconPaths = {}
        iconDimensions.forEach((dimension) => {
            iconPaths[dimension] = '../icons/'
                + (config.extensionDisabled ? 'faded/' : '')
                + 'icon' + dimension + '.png'
        })
        chrome.action.setIcon({ path: iconPaths })

        // Update menu contents
        document.querySelectorAll('div.logo, div.menu-title, div.menu')
            .forEach((elem) => {
                elem.classList.remove(masterToggle.checked ? 'disabled' : 'enabled')
                elem.classList.add(masterToggle.checked ? 'enabled' : 'disabled')
            })
    }

    // Run MAIN routine

    // Initialize popup toggles
    settings.load('extensionDisabled')
        .then(function() { // restore extension/toggle states
            masterToggle.checked = !config.extensionDisabled
            updateGreyness()
        })

    // Add main toggle click-listener
    const toggles = document.querySelectorAll('input'),
          masterToggle = toggles[0]
    masterToggle.addEventListener('change', function() {    
        settings.save('extensionDisabled', !this.checked)
        syncStorageToUI() ; updateGreyness()
        notify(`${chrome.runtime.getManifest().name} ${ this.checked ? 'ON' : 'OFF' }`)
    })

    // Add Support span click-listener
    const supportLink = document.querySelector('a[title*="support" i]'),
          supportSpan = supportLink.parentNode;
    supportSpan.addEventListener('click', (event) => {
        if (event.target == supportSpan) supportLink.click() // to avoid double-toggle
    })

    // Add More Add-ons span click-listener
    const moreAddOnsLink = document.querySelector('a[title*="more" i]'),
          moreAddOnsSpan = moreAddOnsLink.parentNode
    moreAddOnsSpan.addEventListener('click', (event) => {
        if (event.target == moreAddOnsSpan) moreAddOnsLink.click() // to avoid double-toggle
    })

    // Add Powered by chatgpt.js hover-listener
    const chatGPTjsHostPath = 'https://media.chatgptjs.org/images/badges/',
          chatGPTjsImg = document.querySelector('.chatgpt-js img')
    chatGPTjsImg.addEventListener('mouseover', () => {
        chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js.png' })
    chatGPTjsImg.addEventListener('mouseout', () => {
      chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js-faded.png' })

})()
