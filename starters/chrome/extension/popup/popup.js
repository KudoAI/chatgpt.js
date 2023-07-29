(async () => {

    // Import settings-utils.js
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings-utils.js'));

    // Initialize popup toggles
    settings.load('extensionDisabled')
        .then(function() { // restore extension/toggle states
            mainToggle.checked = !config.extensionDisabled;
            updateGreyness();
        });

    // Add main toggle click-listener
    const toggles = document.querySelectorAll('input');
    const mainToggle = toggles[0];
    mainToggle.addEventListener('change', function() {    
        settings.save('extensionDisabled', !this.checked);
        syncExtension() ; updateGreyness();
        notify(config.appName + ( this.checked ? ' ON' : ' OFF' ));
    });

    // Add update-check span click-listener
    const updateSpan = document.querySelector('span[title*="update" i]');
    updateSpan.addEventListener('click', () => {
        window.close(); // popup
        chrome.runtime.requestUpdateCheck((status, details) => {
            alertToUpdate(status === 'update_available' ? details.version : '');
    });});

    // Add Support span click-listener
    const supportLink = document.querySelector('a[title*="support" i]');
    const supportSpan = supportLink.parentNode ;
    supportSpan.addEventListener('click', (event) => {
        if (event.target == supportSpan) supportLink.click(); // to avoid double-toggle
    });

    // Add More Add-ons span click-listener
    const moreAddOnsLink = document.querySelector('a[title*="more" i]');
    const moreAddOnsSpan = moreAddOnsLink.parentNode ;
    moreAddOnsSpan.addEventListener('click', (event) => {
        if (event.target == moreAddOnsSpan) moreAddOnsLink.click(); // to avoid double-toggle
    });

    // Add Powered by chatgpt.js hover-listener
    const chatGPTjsHostPath = 'https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/badges/';
    const chatGPTjsImg = document.querySelector('.chatgpt-js img');
    chatGPTjsImg.addEventListener('mouseover', () => {
        chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js.png'; });
    chatGPTjsImg.addEventListener('mouseout', () => {
      chatGPTjsImg.src = chatGPTjsHostPath + 'powered-by-chatgpt.js-faded.png'; });

    // Define FEEDBACK functions

    function notify(msg, position) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'notify', msg: msg, position: position || 'bottom-right' });
    });}
    
    function alertToUpdate(version) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'alertToUpdate', args: version });
    });}

    // Define SYNC functions

    function syncExtension() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'syncExtension' });
    });}

    function updateGreyness() {

        // Updated toolbar icon
        const iconDimensions = [16, 32, 64, 128], iconPaths = {};
        iconDimensions.forEach((dimension) => {
            iconPaths[dimension] = '../icons/'
                + (config.extensionDisabled ? 'faded/' : '')
                + 'icon' + dimension + '.png';
        });
        chrome.action.setIcon({ path: iconPaths });

        // Update menu contents
        document.querySelectorAll('div.logo, div.menu-title, div.menu')
            .forEach((elem) => {
                elem.classList.remove(mainToggle.checked ? 'disabled' : 'enabled');
                elem.classList.add(mainToggle.checked ? 'enabled' : 'disabled');
            });
    }

})();
