(async () => {

    // Init SCHEME
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches)
        document.documentElement.classList.add('dark')

    // Import JS resources
    for (const resource of ['components/icons.js', 'lib/dom.js', 'lib/settings.js'])
        await import(chrome.runtime.getURL(resource))

    // Init ENV context
    window.env = {
        site: new URL((await chrome.tabs.query({ active: true, currentWindow: true }))[0].url)
            .hostname.split('.').slice(-2, -1)[0], // extract 2nd-level domain
        menu: { isDark: document.documentElement.classList.contains('dark') }
    }

    // Import DATA
    ;({ app: window.app } = await chrome.storage.local.get('app'))

    // Define FUNCTIONS

    function createMenuEntry(entryData) {

        // Assemble elems
        const entry = {
            div: dom.create.elem('div', {
                id: entryData.key, class: 'menu-entry highlight-on-hover', title: entryData.helptip || '' }),
            leftElem: dom.create.elem('div', { class: `menu-icon ${ entryData.type || '' }`}),
            label: dom.create.elem('span')
        }
        entry.label.textContent = entryData.label
        entry.div.append(entry.leftElem, entry.label)
        if (entryData.type == 'toggle') { // add track to left, init knob pos
            entry.leftElem.append(dom.create.elem('span', { class: 'track' }))
            entry.leftElem.classList.toggle('on', settings.typeIsEnabled(entryData.key))
        } else { // add symbol to left, append status to right
            entry.leftElem.textContent = entryData.symbol || '⚙️' ; entry.label.style.flexGrow = 1
            if (entryData.status) entry.label.textContent += ` — ${entryData.status}`
            if (entryData.type == 'link') {
                entry.label.after(entry.rightElem = dom.create.elem('div', { class: 'menu-right-elem' }))
                entry.rightElem.append(icons.create({ key: 'open', size: 17, fill: 'black' }))
            }
        }
        if (entryData.type == 'slider') { // append slider, add listeners, remove .highlight-on-hover
            entry.slider = dom.create.elem('input', { class: 'slider', type: 'range',
                min: entry.min || 0, max: entry.max || 100, value: config[entryData.key] })
            entry.label.textContent += `: ${entry.slider.value}${ entryData.labelSuffix || '' }`
            entry.slider.style.setProperty('--track-fill-percent', `${ entry.slider.value / entry.slider.max *100 }%`)
            entry.slider.oninput = ({ target: { value }}) => { // update label/color
                settings.save(entryData.key, parseInt(value)) ; sync.configToUI({ updatedKey: entryData.key })
                entry.label.textContent = `${entryData.label}: ${value}${ entryData.labelSuffix || '' }`
                entry.slider.style.setProperty('--track-fill-percent', `${ value / entry.slider.max *100 }%`)
            }
            entry.div.onwheel = event => { // move slider by 2 steps
                entry.slider.value = parseInt(entry.slider.value) -Math.sign(event.deltaY) *2
                entry.slider.dispatchEvent(new Event('input'))
            }
            entry.div.append(entry.slider) ; entry.div.classList.remove('highlight-on-hover')
        }
        if (entryData.type == 'category')
            entry.div.append(icons.create({ key: 'caretDown', size: 11, class: 'menu-caret menu-right-elem' }))
        if (entryData.dependencies) entry.div.classList.add('disabled')

        // Add click listener
        entry.div.onclick = () => {
            const now = Date.now()
            const throttleMs = typeof entryData.throttle == 'number' ? entryData.throttle
                             : entryData.throttle ? 1500 : 0
            if (throttleMs && now -( entry.div.lastClickTime || 0 ) < throttleMs) return
            entry.div.classList.remove('disabled') ; entry.div.lastClickTime = now
            ;({
                category: () => toggleCategorySettingsVisiblity(entryData.key),
                toggle: () => {
                    entry.leftElem.classList.toggle('on')
                    settings.save(entryData.key, !config[entryData.key])
                    sync.configToUI({ updatedKey: entryData.key })
                    requestAnimationFrame(() => notify(`${entryData.label} ${chrome.i18n.getMessage(`state_${
                        settings.typeIsEnabled(entryData.key) ? 'on' : 'off' }`).toUpperCase()}`))
                },
                link: () => { open(entryData.url) ; close() }
            })[entryData.type]()

            // Throttle re-click
            if (entryData.throttle) {
                entry.div.classList.add('disabled')
                setTimeout(() => entry.div.classList.remove('disabled'), throttleMs)
            }

            // Enable/disable dependent entries
            for (const [ctrlKey, ctrlData] of Object.entries({ ...settings.categories, ...settings.controls }))
                if (Object.values(ctrlData.dependencies || {}).flat().includes(entryData.key)) {
                    const depDiv = document.querySelector(`div#${ctrlKey}`) ; if (!depDiv) continue
                    const toDisable = !settings.typeIsEnabled(entryData.key)
                    depDiv.style.transition = toDisable ? '' : 'opacity 0.15s ease-in'
                    depDiv.classList.toggle('disabled', toDisable)
                }
        }

        return entry.div
    }

    function depIsEnabled(ctrlKey) {
        const deps = settings.controls[ctrlKey]?.dependencies
        return !deps || Object.values(deps).flat(Infinity).some(depKey => settings.typeIsEnabled(depKey))
    }

    function notify(msg, pos = 'bottom-right') { sendMsgToActiveTab('notify', { msg, pos }) }

    async function sendMsgToActiveTab(action, options) {
        const activeTabID = (await chrome.tabs.query({ active: true, currentWindow: true }))[0].id
        return await chrome.tabs.sendMessage(activeTabID, { action, options })
    }

    const sync = {
        fade() {

            // Toolbar icon
            chrome.action.setIcon({ path: Object.fromEntries(
                Object.keys(chrome.runtime.getManifest().icons).map(dimension =>
                    [dimension, `../icons/${ config.extensionDisabled ? 'faded/' : '' }icon${dimension}.png`]
            ))})

            // Menu elems
            document.querySelectorAll('.logo, .menu-title, .menu-entry, .slider, .categorized-entries')
                .forEach((elem, idx) => {
                    if (elem.id && (elem.matches(`#${elem.id}:has(> div.link)`) || elem.id == 'aboutEntry'))
                        return // never disable link/About entries
                    elem.style.transition = config.extensionDisabled ? '' : 'opacity 0.15s ease-in'
                    const toDisable = config.extensionIsDisabled || !depIsEnabled(elem.id)
                    if (elem.classList.contains('categorized-entries')) { // fade category strip
                        elem.style.transition = toDisable ? 'none' : 'var(--border-transition)'
                        elem.style.borderImage = elem.style.borderImage.replace(
                            /rgba?\(([\d,\s]+)(?:,\s*[\d.]+)?\)/,
                            `rgba($1,${ toDisable ? 0.3 : env.menu.isDark ? 0.5 : 1 })`
                        )
                    } else // fade entry
                        setTimeout(() => elem.classList.toggle('disabled', toDisable),
                            toDisable ? 0 : idx *10) // fade-out abruptly, fade-in staggered
                })
        },

        configToUI(options) { return sendMsgToActiveTab('syncConfigToUI', options) }
    }

    function toggleCategorySettingsVisiblity(category, { transitions = true, action } = {}) {
        const transitionDuration = 350, // ms
              ctgDiv = document.getElementById(category),
              caret = ctgDiv.querySelector('.menu-caret'),
              ctgChildrenDiv = ctgDiv.nextSibling,
              ctgChild = ctgChildrenDiv.querySelectorAll('.menu-entry')
        if (action != 'hide' && dom.get.computedHeight(ctgChildrenDiv) == 0) { // show category settings
            ctgDiv.classList.toggle('expanded', true)
            Object.assign(ctgChildrenDiv.style, { height: `${dom.get.computedHeight(ctgChild)}px`,
                transition: transitions ? 'height 0.25s' : '' })
            Object.assign(caret.style, { // point it down
                transform: 'rotate(0deg)', transition: transitions ? 'transform 0.15s ease-out' : '' })
            ctgChild.forEach(row => { // reset styles to support continuous transition on rapid show/hide
                row.style.transition = 'none' ; row.style.opacity = 0 })
            ctgChildrenDiv.offsetHeight // force reflow to insta-apply reset
            ctgChild.forEach((row, idx) => { // fade-in staggered
                if (transitions) row.style.transition = `opacity ${ transitionDuration /1000 }s ease-in-out`
                setTimeout(() => row.style.opacity = 1, transitions ? idx * transitionDuration /10 : 0)
            })
            document.querySelectorAll(`.menu-entry:has(.menu-caret):not(#${category})`).forEach(otherCtgDiv =>
                toggleCategorySettingsVisiblity(otherCtgDiv.id, { action: 'hide' }))
        } else { // hide category settings
            ctgDiv.classList.toggle('expanded', false)
            Object.assign(ctgChildrenDiv.style, { height: 0, transition: '' })
            Object.assign(caret.style, { transform: 'rotate(-90deg)', transition: '' }) // point it right
        }
    }

    // Run MAIN routine

    // Append RISING PARTICLES styles
    ['gray', 'white'].forEach(color => document.head.append(
        dom.create.elem('link', { rel: 'stylesheet',
            href: `https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@71695ca/assets/styles/rising-particles/dist/${
                color}.min.css`
    })))
    dom.addRisingParticles(document.body, { lightScheme: env.menu.isDark ? 'white' : 'gray' })

    // Init MASTER TOGGLE
    const masterToggle = {
        div: document.querySelector('.master-toggle'),
        switch: dom.create.elem('div', { class: 'toggle menu-icon highlight-on-hover', style: 'height: 26px' }),
        track: dom.create.elem('span', { class: 'track', style: 'position: relative ; top: 7.5px' })
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
    const footer = document.querySelector('footer')
    if (env.site == 'chatgpt') {
        await settings.load(Object.keys(settings.controls))
        const menuEntriesDiv = dom.create.elem('div') ; footer.before(menuEntriesDiv)

        // Group controls by category
        const categorizedCtrls = {}
        Object.entries(settings.controls).forEach(([key, ctrl]) =>
            ( categorizedCtrls[ctrl.category || 'general'] ??= {} )[key] = { ...ctrl, key })

        // Create/append general controls
        Object.values(categorizedCtrls.general || {}).forEach(ctrl => menuEntriesDiv.append(createMenuEntry(ctrl)))

        // Create/append categorized controls
        Object.entries(categorizedCtrls).forEach(([category, ctrls]) => {
            if (category == 'general') return
            const ctgData = { ...settings.categories[category], key: category, type: 'category' },
                  ctgChildrenDiv = dom.create.elem('div', { class: 'categorized-entries' })
            if (ctgData.color) { // color the stripe
                const [r, g, b] = ctgData.color.match(/\w\w/g).map(v => parseInt(v, 16))
                ctgChildrenDiv.style.borderImage = `linear-gradient(transparent, rgba(${r},${g},${b},${
                    env.menu.isDark ? 0.5 : 1 })) 30 100% ${ env.menu.isDark ? '/ 100' : '' }`
            }
            menuEntriesDiv.append(createMenuEntry(ctgData), ctgChildrenDiv)
            Object.values(ctrls).forEach(ctrl => ctgChildrenDiv.append(createMenuEntry(ctrl)))
        })
    }

    // Create/append ABOUT entry
    const aboutEntry = {
        div: createMenuEntry({ key: 'aboutEntry', symbol: '💡', label: 'About...', helptip: `About ${app.name}` }),
        ticker: {
            xGap: '&emsp;&emsp;&emsp;',
            span: dom.create.elem('span', { class: 'ticker' }), innerDiv: dom.create.elem('div')
        }
    }
    aboutEntry.div.querySelector('div.menu-icon').style.paddingLeft = '10px'
    aboutEntry.div.querySelector('span').style.paddingLeft = '2.5px'
    aboutEntry.ticker.content = `Version: <span class="ticker-em">v${ app.version + aboutEntry.ticker.xGap }</span>`
                              + `Powered by <span class="ticker-em">chatgpt.js</span>${aboutEntry.ticker.xGap}`
    for (let i = 0 ; i < 7 ; i++) aboutEntry.ticker.content += aboutEntry.ticker.content // make long af
    aboutEntry.ticker.innerDiv.innerHTML = aboutEntry.ticker.content
    aboutEntry.ticker.span.append(aboutEntry.ticker.innerDiv)
    aboutEntry.div.append(aboutEntry.ticker.span) ; footer.before(aboutEntry.div)
    aboutEntry.div.onclick = () => { chrome.runtime.sendMessage({ action: 'showAbout' }) ; close() }

    // Create/append CHATGPT entry
    const activeTabURL = (await chrome.tabs.query({ active: true, currentWindow: true }))[0].url,
          chatgptURL = chrome.runtime.getManifest().content_scripts[0].matches.map(url => url.replace(/\/\*$/, ''))
    if (!activeTabURL.includes(chatgptURL)) footer.before(createMenuEntry({
        key: 'chatgptEntry', type: 'link', symbol: '💬', label: 'Open ChatGPT', url: chatgptURL, helptip: chatgptURL }))

    // Create/append LATEST CHANGES entry
    const latestChangesURL = `${app.urls.github}/commits`
    footer.before(createMenuEntry({
        key: 'latestChangesEntry', type: 'link', symbol: '🚀',
        label: 'Latest Changes...', url: latestChangesURL, helptip: latestChangesURL
    }))

    // Init FOOTER
    const footerElems = { // left-to-right
        chatgptjs: { logo: footer.querySelector('.chatgptjs-logo') },
        about: { span: footer.querySelector('.about-span') },
        moreExt: { span: footer.querySelector('.more-ext-span') }
    }
    footerElems.chatgptjs.logo.src = 'https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@858b952'
        + `/assets/images/badges/powered-by-chatgpt.js/${ env.menu.isDark ? 'white' : 'black' }/with-robot/95x19.png`
    footerElems.chatgptjs.logo.onclick = () => { open(app.urls.chatgptjs) ; close() }
    footerElems.about.span.title = `About ${app.name}`
    footerElems.about.span.append(icons.create({ key: 'questionMark', width: 15, height: 13 }))
    footerElems.about.span.onclick = () => { chrome.runtime.sendMessage({ action: 'showAbout' }) ; close() }
    footerElems.moreExt.span.title = 'More AI Extensions'
    footerElems.moreExt.span.append(icons.create({ key: 'plus' }))
    footerElems.moreExt.span.onclick = () => { open(app.urls.relatedExtensions) ; close() }

    // AUTO-EXPAND categories
    document.querySelectorAll('.menu-entry:has(.menu-caret)').forEach(ctgDiv => {
        if (settings.categories[ctgDiv.id]?.autoExpand)
            toggleCategorySettingsVisiblity(ctgDiv.id, { transitions: false })
    })

    // REMOVE LOADING spinner after imgs load
    Promise.all([...document.querySelectorAll('img')].map(img =>
        img.complete ? Promise.resolve() : new Promise(resolve => img.onload = resolve)
    )).then(() => {
        document.querySelectorAll('[class^=loading]').forEach(elem => elem.remove())
        sync.fade() // based on master toggle state
    })

})()
