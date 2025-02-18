(async () => {

    // Import JS resources
    for (const resource of ['components/icons.js', 'lib/dom.js', 'lib/settings.js'])
        await import(chrome.runtime.getURL(resource))

    // Init ENV context
    const env = {
        site: /([^.]+)\.[^.]+$/.exec(new URL((await chrome.tabs.query(
            { active: true, currentWindow: true }))[0].url).hostname)?.[1]
    }

    // Import DATA
    const { app } = await chrome.storage.local.get('app')
    icons.import({ app }) // for src's using app.urls.assetHost

    // Define FUNCTIONS

    function notify(msg, pos = 'bottom-right') { sendMsgToActiveTab('notify', { msg, pos }) }

    async function sendMsgToActiveTab(action, options) {
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
        return await chrome.tabs.sendMessage(activeTab.id, { action: action, options: { ...options }})
    }

    const sync = {
        fade() {

            // Toolbar icon
            chrome.action.setIcon({ path: Object.fromEntries(
                Object.keys(chrome.runtime.getManifest().icons).map(dimension =>
                    [dimension, `../icons/${ config.extensionDisabled ? 'faded/' : '' }icon${dimension}.png`]
            ))})

            // Menu elems
            document.querySelectorAll('.logo, .menu-title, .menu-entry').forEach((elem, idx) => {
                elem.style.transition = config.extensionDisabled ? '' : 'opacity 0.15s ease-in'
                setTimeout(() => elem.classList.toggle('disabled', config.extensionDisabled),
                    config.extensionDisabled ? 0 : idx *10) // fade-out abruptly, fade-in staggered
            })
        },

        configToUI(options) { return sendMsgToActiveTab('syncConfigToUI', options) }
    }

    // Run MAIN routine

    // Init MASTER TOGGLE
    const masterToggle = {
        div: document.querySelector('.master-toggle'),
        switch: dom.create.elem('div', { class: 'toggle menu-icon highlight-on-hover' }),
        track: dom.create.elem('span', { class: 'track' })
    }
    masterToggle.div.append(masterToggle.switch) ; masterToggle.switch.append(masterToggle.track)
    await settings.load('extensionDisabled') ; masterToggle.switch.classList.toggle('on', !config.extensionDisabled)
    masterToggle.div.onclick = () => {
        env.extensionWasDisabled = config.extensionDisabled
        masterToggle.switch.classList.toggle('on') ; settings.save('extensionDisabled', !config.extensionDisabled)
        Object.keys(sync).forEach(key => sync[key]()) // sync fade + storage to UI
        notify(`${app.name} ${ this.checked ? 'ON' : 'OFF' }`)
    }

    // Create CHILD menu entries on chatgpt.com
    if (env.site == 'chatgpt') {
        const childEntriesDiv = dom.create.elem('div') ; document.body.append(childEntriesDiv)
        await settings.load(Object.keys(settings.controls))
        Object.keys(settings.controls).forEach(key => {
            const controlType = settings.controls[key].type

            // Init entry's elems
            const entry = {
                div: dom.create.elem('div', {
                    class: 'menu-entry highlight-on-hover', title: settings.controls[key].helptip || '' }),
                leftElem: dom.create.elem('div', { class: `menu-icon ${ controlType || '' }` }),
                label: dom.create.elem('span')
            }
            entry.label.textContent = settings.controls[key].label
            entry.div.append(entry.leftElem, entry.label) ; childEntriesDiv.append(entry.div)
            if (controlType == 'toggle') { // add track to left, init knob pos
                entry.leftElem.append(dom.create.elem('span', { class: 'track' }))
                entry.leftElem.classList.toggle('on', /disabled/i.test(key) ^ config[key])
            } else { // add symbol to left, append status to right
                entry.leftElem.innerText = settings.controls[key].symbol
                entry.label.innerText += `— ${settings.controls[key].status}`
            }

            entry.div.onclick = () => {
                if (controlType == 'toggle') {
                    entry.leftElem.classList.toggle('on')
                    settings.save(key, !config[key]) ; sync.configToUI({ updatedKey: key })
                    notify(`${settings.controls[key].label} ${/disabled/i.test(key) ^ config[key] ? 'ON' : 'OFF' }`)
                }
            }
        })
    }

    sync.fade() // based on master toggle

    // Create/append FOOTER container
    const footer = dom.create.elem('footer') ; document.body.append(footer)

    // Create/append CHATGPT.JS footer logo
    const cjsSpan = dom.create.elem('span', { class: 'cjs-span' })
    const cjsLogo = dom.create.elem('img', {
        src: `${app.urls.cjsAssetHost}/images/badges/powered-by-chatgpt.js.png?b2a1975` })
    cjsSpan.onclick = () => { open(app.urls.chatgptJS) ; close() }
    cjsSpan.append(cjsLogo) ; footer.append(cjsSpan)

    // Create/append ABOUT footer button
    const aboutSpan = dom.create.elem('span', {
        title: `About ${app.name}`,
        class: 'menu-icon highlight-on-hover', style: 'right:30px ; padding-top: 2px' })
    const aboutIcon = icons.create('questionMark', { width: 15, height: 13, style: 'margin-bottom: 0.04rem' })
    aboutSpan.onclick = () => { chrome.runtime.sendMessage({ action: 'showAbout' }) ; close() }
    aboutSpan.append(aboutIcon) ; footer.append(aboutSpan)

    // Create/append RELATED EXTENSIONS footer button
    const moreExtensionsSpan = dom.create.elem('span', {
        title: 'More AI Extensions',
        class: 'menu-icon highlight-on-hover', style: 'right:2px ; padding-top: 2px' })
    const moreExtensionsIcon = icons.create('plus')
    moreExtensionsSpan.onclick = () => { open(app.urls.relatedExtensions) ; close() }
    moreExtensionsSpan.append(moreExtensionsIcon) ; footer.append(moreExtensionsSpan)

    // Remove loading spinner
    document.querySelectorAll('[class^=loading]').forEach(elem => elem.remove())

})()
