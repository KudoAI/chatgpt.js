(async () => {

    // Import LIBS
    await import(chrome.runtime.getURL('lib/dom.js'))
    const { config, settings } = await import(chrome.runtime.getURL('lib/settings.js'))

    // Ipmort APP data
    const { app } = await chrome.storage.sync.get('app')

    // Import ICONS
    const { icons } = await import(chrome.runtime.getURL('components/icons.js'))
    icons.appProps = app // for src's using urls.mediaHost

    // Define FUNCTIONS

    async function sendMsgToActiveTab(req) {
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
        return await chrome.tabs.sendMessage(activeTab.id, req)
    }

    function notify(msg) { sendMsgToActiveTab({ action: 'notify', msg: msg, pos: 'bottom-right' })}

    const sync = {
        fade() {

            // Update toolbar icon
            const iconDimensions = [16, 32, 64, 128], iconPaths = {}
            iconDimensions.forEach(dimension => {
                iconPaths[dimension] = '../icons/'
                    + (config.extensionDisabled ? 'faded/' : '')
                    + 'icon' + dimension + '.png'
            })
            chrome.action.setIcon({ path: iconPaths })
    
            // Update menu contents
            document.querySelectorAll('div.logo, div.menu-title, div.menu')
                .forEach(elem => {
                    elem.classList.remove(masterToggle.checked ? 'disabled' : 'enabled')
                    elem.classList.add(masterToggle.checked ? 'enabled' : 'disabled')
                })
        },

        storageToUI() { return sendMsgToActiveTab({ action: 'syncStorageToUI' })}
    }

    // Run MAIN routine

    // Init MASTER TOGGLE
    const masterToggle = document.querySelector('input')
    await settings.load('extensionDisabled')
    masterToggle.checked = !config.extensionDisabled ; sync.fade()
    masterToggle.onchange = () => {    
        settings.save('extensionDisabled', !config.extensionDisabled)
        Object.keys(sync).forEach(key => sync[key]()) // sync fade + storage to UI
        notify(`${chrome.runtime.getManifest().name} ${ this.checked ? 'ON' : 'OFF' }`)
    }

    // Create/append FOOTER container
    const footer = document.createElement('footer')
    document.body.append(footer)

    // Create/append CHATGPT.JS footer logo
    const cjsDiv = dom.create.elem('div', { class: 'chatgpt-js' })
    const cjsLogo = dom.create.elem('img', {
        title: 'Powered by chatgpt.js',
        src: `${app.urls.cjsMediaHost}/images/badges/powered-by-chatgpt.js-faded.png` })
    cjsLogo.onmouseover = cjsLogo.onmouseout = event => cjsLogo.src = `${
        app.urls.cjsMediaHost}/images/badges/powered-by-chatgpt.js${ event.type == 'mouseover' ? '' : '-faded' }.png`
    cjsLogo.onclick = () => chrome.tabs.create({ url: app.urls.chatgptJS })
    cjsDiv.append(cjsLogo) ; footer.append(cjsDiv)

    // Create/append SUPPORT footer button
    const supportSpan = dom.create.elem('span', {
        title: 'Get Support',
        class: 'menu-icon menu-area', style: 'right:30px ; padding-top: 2px' })
    const supportIcon = icons.create({ name: 'questionMark', width: 15, height: 13, style: 'margin-bottom: 0.04rem' })
    supportSpan.onclick = () => { chrome.tabs.create({ url: app.urls.support }) ; close() }
    supportSpan.append(supportIcon) ; footer.append(supportSpan)

    // Create/append RELATED APPS footer button
    const moreAppsSpan = dom.create.elem('span', {
        title:  'More AI Extensions',
        class: 'menu-icon menu-area', style: 'right:2px ; padding-top: 2px' })
    const moreAppsIcon = icons.create({ name: 'plus', size: 16 })
    moreAppsSpan.onclick = () => { chrome.tabs.create({ url: app.urls.relatedExtensions }) ; close() }
    moreAppsSpan.append(moreAppsIcon) ; footer.append(moreAppsSpan)

})()
