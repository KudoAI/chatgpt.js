// © 2023–2025 KudoAI & contributors under the MIT license.
// Source: https://github.com/KudoAI/chatgpt.js
// User guide: https://chatgptjs.org/userguide
// Latest minified release: https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js

// Init feedback props
localStorage.alertQueue = JSON.stringify([])
localStorage.notifyProps = JSON.stringify({ queue: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }})

// Define chatgpt API
const chatgpt = {

    endpoints: {
        assets: 'https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js',
        openAI: {
            session: 'https://chatgpt.com/api/auth/session',
            chats: 'https://chatgpt.com/backend-api/conversations',
            chat: 'https://chatgpt.com/backend-api/conversation',
            share_create: 'https://chatgpt.com/backend-api/share/create',
            share: 'https://chatgpt.com/backend-api/share',
            instructions: 'https://chatgpt.com/backend-api/user_system_messages'
        }
    },

    selectors: {
        btns: {
            continue: 'button:has(svg[class*=rotate] > path[d^="M4.47189"])',
            createImage: 'button[data-testid="composer-create-image"]',
            deepResearch: 'button[data-testid="composer-deep-research"]',
            login: 'button[data-testid*=login]',
            newChat: 'a[href="/"]:has(svg),' // Pencil button (when logged in)
                   + 'button:has([d^="M3.06957"])', // Cycle Arrows button (in temp chat logged out)
            regen: 'button[data-testid*=regenerate],' // oval button in place of chatbar on errors
                    // 'Try Again' entry of model selector below msg
                 + 'div[role=menuitem] div:has(svg):has(path[d^="M3.06957"])',
            scroll: 'button:has(> svg > path[d^="M12 21C11.7348"])',
            search: 'button[data-testid="composer-button-search"]',
            reason: 'button[data-testid="composer-button-reason"]',
            send: 'button[data-testid=send-button]',
            sidebar: 'button[data-testid*=sidebar-button]',
            stop: 'button[data-testid=stop-button]',
            upload: 'button:has(> svg > path[d^="M12 3C12.5523"])',
            voice: 'button[data-testid*=composer-speech-button]'
        },
        chatDivs: {
            convo: 'div[class*=thread]', msg: 'div[data-message-author-role]',
            reply: 'div[data-message-author-role=assistant]'
        },
        chatHistory: 'div#history',
        errors: { toast: 'div.toast-root', txt: 'div[class*=text-error]' },
        footer: 'div#thread-bottom-container > div:last-of-type > div, span.text-sm.leading-none',
        header: 'div#page-header, main div.sticky:first-of-type',
        links: { newChat: 'nav a[href="/"]', sidebarItem: 'nav a' },
        sidebar: 'div.bg-token-sidebar-surface-primary',
        ssgManifest: 'script[src*="_ssgManifest.js"]'
    },

    actAs(persona) {
    // Prompts ChatGPT to act as a persona from https://github.com/KudoAI/chat-prompts/blob/main/personas.json

        const promptsUrl = 'https://cdn.jsdelivr.net/gh/KudoAI/chat-prompts/dist/personas.min.json'
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', promptsUrl, true) ; xhr.send()
            xhr.onload = () => {
                if (xhr.status != 200) return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve prompts data.')
                const data = JSON.parse(xhr.responseText).personas
                if (!persona) {
                    console.log('\n%c🤖 chatgpt.js personas\n',
                        'font-family: sans-serif ; font-size: xxx-large ; font-weight: bold')
                    for (const prompt of data) // list personas
                        console.log(`%c${prompt.title}`, 'font-family: monospace ; font-size: larger ;')
                    return resolve()
                }
                const selectedPrompt = data.find(obj => obj.title.toLowerCase() == persona.toLowerCase())
                if (!selectedPrompt)
                    return reject(`🤖 chatgpt.js >> Persona '${persona}' was not found!`)
                chatgpt.send(selectedPrompt.prompt, 'click')
                console.info(`Loading ${persona} persona...`)
                chatgpt.isIdle().then(() => console.info('Persona activated!'))
                return resolve()
            }
        })
    },

    activateDarkMode() {
        document.documentElement.classList.replace('light', 'dark')
        document.documentElement.style.colorScheme = localStorage.theme = 'dark'
    },

    activateLightMode() {
        document.documentElement.classList.replace('dark', 'light')
        document.documentElement.style.colorScheme = localStorage.theme = 'light'
    },

    alert(title, msg, btns, checkbox, width) {
    // [ title/msg = strings, btns = [named functions], checkbox = named function, width (px) = int ] = optional
    // * Spaces are inserted into button labels by parsing function names in camel/kebab/snake case

        // Init env context
        const scheme = chatgpt.isDarkMode() ? 'dark' : 'light',
              isMobile = chatgpt.browser.isMobile()

        // Define event handlers
        const handlers = {

            dismiss: {
                click(event) {
                    if (event.target == event.currentTarget || event.target.closest('[class*=-close-btn]'))
                        dismissAlert()
                },

                key(event) {
                    if (!/^(?: |Space|Enter|Return|Esc)/.test(event.key) || ![32, 13, 27].includes(event.keyCode))
                        return
                    for (const alertId of alertQueue) { // look to handle only if triggering alert is active
                        const alert = document.getElementById(alertId)
                        if (!alert || alert.style.display == 'none') return
                        if (event.key.startsWith('Esc') || event.keyCode == 27) dismissAlert() // and do nothing
                        else { // Space/Enter pressed
                            const mainBtn = alert.querySelector('.modal-buttons').lastChild // look for main button
                            if (mainBtn) { mainBtn.click() ; event.preventDefault() } // click if found
                        }
                    }
                }
            },

            drag: {
                mousedown(event) { // find modal, update styles, attach listeners, init XY offsets
                    if (event.button != 0) return // prevent non-left-click drag
                    if (!/auto|default/.test(getComputedStyle(event.target).cursor))
                        return // prevent drag on interactive elems
                    chatgpt.draggingModal = event.currentTarget
                    event.preventDefault() // prevent sub-elems like icons being draggable
                    Object.assign(chatgpt.draggingModal.style, {
                        transition: '0.1s', willChange: 'transform', transform: 'scale(1.05)' })
                    document.body.style.cursor = 'grabbing' // update cursor
                    ;[...chatgpt.draggingModal.children] // prevent hover FX if drag lags behind cursor
                        .forEach(child => child.style.pointerEvents = 'none')
                    ;['mousemove', 'mouseup'].forEach(eventType => // add listeners
                        document.addEventListener(eventType, handlers.drag[eventType]))
                    const draggingModalRect = chatgpt.draggingModal.getBoundingClientRect()
                    handlers.drag.offsetX = event.clientX - draggingModalRect.left +21
                    handlers.drag.offsetY = event.clientY - draggingModalRect.top +12
                },

                mousemove(event) { // drag modal
                    if (!chatgpt.draggingModal) return
                    const newX = event.clientX - handlers.drag.offsetX,
                          newY = event.clientY - handlers.drag.offsetY
                    Object.assign(chatgpt.draggingModal.style, { left: `${newX}px`, top: `${newY}px` })
                },

                mouseup() { // restore styles/pointer events, remove listeners, reset chatgpt.draggingModal
                    Object.assign(chatgpt.draggingModal.style, { // restore styles
                        cursor: 'inherit', transition: 'inherit', willChange: 'auto', transform: 'scale(1)' })
                    document.body.style.cursor = '' // restore cursor
                    ;[...chatgpt.draggingModal.children] // restore pointer events
                        .forEach(child => child.style.pointerEvents = '')
                    ;['mousemove', 'mouseup'].forEach(eventType => // remove listeners
                        document.removeEventListener(eventType, handlers.drag[eventType]))
                    chatgpt.draggingModal = null
                }
            }
        }

        // Create modal parent/children elems
        const modalContainer = document.createElement('div')
        modalContainer.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now()
        modalContainer.classList.add('chatgpt-modal') // add class to main div
        const modal = document.createElement('div'),
              modalTitle = document.createElement('h2'),
              modalMessage = document.createElement('p')

        // Create/append/update modal style (if missing or outdated)
        const thisUpdated = 1739338889852 // timestamp of last edit for this file's `modalStyle`
        let modalStyle = document.querySelector('#chatgpt-modal-style') // try to select existing style
        if (!modalStyle || parseInt(modalStyle.getAttribute('last-updated'), 10) < thisUpdated) { // if missing or outdated
            if (!modalStyle) { // outright missing, create/id/attr/append it first
                modalStyle = document.createElement('style') ; modalStyle.id = 'chatgpt-modal-style'
                modalStyle.setAttribute('last-updated', thisUpdated.toString())
                document.head.append(modalStyle)
            }
            modalStyle.textContent = ( // update prev/new style contents
                `.chatgpt-modal { /* vars */
                    --transition: opacity 0.65s cubic-bezier(.165,.84,.44,1), /* for fade-in */
                                  transform 0.55s cubic-bezier(.165,.84,.44,1) ; /* for move-in */
                    --bg-transition: background-color 0.25s ease ; /* for bg dim */
                    --btn-transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out ; /* for smooth zoom */
                    --btn-shadow: 2px 1px ${ scheme == 'dark' ? '54px #00cfff' : '30px #9cdaff' }}`

                + '.no-mobile-tap-outline { outline: none ; -webkit-tap-highlight-color: transparent }'

                // Background styles
                + `.chatgpt-modal {
                      pointer-events: auto ; /* override any disabling from site modals (like guest login spam) */
                      position: fixed ; top: 0 ; left: 0 ; width: 100% ; height: 100% ; /* expand to full view-port */
                      display: flex ; justify-content: center ; align-items: center ; z-index: 9999 ; /* align */
                      transition: var(--bg-transition) ; /* for bg dim */
                         -webkit-transition: var(--bg-transition) ; -moz-transition: var(--bg-transition) ;
                         -o-transition: var(--bg-transition) ; -ms-transition: var(--bg-transition) }`

                // Alert styles
                + `.chatgpt-modal > div {
                      position: absolute ; /* to be click-draggable */
                      opacity: 0 ; /* to fade-in */
                      font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
                                   Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif ;
                      padding: 20px ; margin: 12px 23px ; font-size: 20px ;
                      color: ${ scheme == 'dark' ? 'white' : 'black' };
                      background-color: ${ scheme == 'dark' ? 'black' : 'white' };
                      border: 1px solid ${ scheme == 'dark' ? 'white' : '#b5b5b5' };
                      transform: translateX(-3px) translateY(7px) ; /* offset to move-in from */
                      max-width: 75vw ; word-wrap: break-word ; border-radius: 15px ;
                    --shadow: 0 30px 60px rgba(0,0,0,0.12) ; box-shadow: var(--shadow) ;
                         -webkit-box-shadow: var(--shadow) ; -moz-box-shadow: var(--shadow) ;
                      user-select: none ; -webkit-user-select: none ; -moz-user-select: none ;
                         -o-user-select: none ; -ms-user-select: none ;
                      transition: var(--transition) ; /* for fade-in + move-in */
                         -webkit-transition: var(--transition) ; -moz-transition: var(--transition) ;
                         -o-transition: var(--transition) ; -ms-transition: var(--transition) }
                  .chatgpt-modal h2 { font-weight: bold ; font-size: 24px ; margin-bottom: 9px }
                  .chatgpt-modal a { color: ${ scheme == 'dark' ? '#00cfff' : '#1e9ebb' }}
                  .chatgpt-modal a:hover { text-decoration: underline }
                  .chatgpt-modal.animated > div {
                      z-index: 13456 ; opacity: 0.98 ; transform: translateX(0) translateY(0) }
                  @keyframes alert-zoom-fade-out {
                      0% { opacity: 1 } 50% { opacity: 0.25 ; transform: scale(1.05) }
                      100% { opacity: 0 ; transform: scale(1.35) }}`

                // Button styles
                + `.modal-buttons {
                        display: flex ; justify-content: flex-end ; margin: 20px -5px -3px 0 ;
                        ${ isMobile ? 'flex-direction: column-reverse' : '' }}
                  .chatgpt-modal button {
                      font-size: 14px ; text-transform: uppercase ; cursor: crosshair ;
                      margin-left: ${ isMobile ? 0 : 10 }px ; padding: ${ isMobile ? 15 : 8 }px 18px ;
                      ${ isMobile ? 'margin-top: 5px ; margin-bottom: 3px ;' : '' }
                      border-radius: 0 ; border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' };
                      transition: var(--btn-transition) ;
                         -webkit-transition: var(--btn-transition) ; -moz-transition: var(--btn-transition) ;
                         -o-transition: var(--btn-transition) ; -ms-transition: var(--btn-transition) }
                  .chatgpt-modal button:hover {
                      transform: scale(1.055) ; color: black ;
                      background-color: #${ scheme == 'dark' ? '00cfff' : '9cdaff' };
                      box-shadow: var(--btn-shadow) ;
                          -webkit-box-shadow: var(--btn-shadow) ; -moz-box-shadow: var(--btn-shadow) }
                  .primary-modal-btn {
                      border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' };
                      background: ${ scheme == 'dark' ? 'white' : 'black' };
                      color: ${ scheme == 'dark' ? 'black' : 'white' }}
                  .modal-close-btn {
                      cursor: pointer ; width: 29px ; height: 29px ; border-radius: 17px ;
                      float: right ; position: relative ; right: -6px ; top: -5px }
                  .modal-close-btn svg { margin: 10px } /* center SVG for hover underlay */
                  .modal-close-btn:hover { background-color: #f2f2f2${ scheme == 'dark' ? '00' : '' }}`

                // Checkbox styles
                + `.chatgpt-modal .checkbox-group { margin: 5px 0 -8px 5px }
                  .chatgpt-modal input[type=checkbox] {
                      cursor: pointer ; transform: scale(0.7) ; margin-right: 5px ;
                      border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' }}
                  .chatgpt-modal input[type=checkbox]:checked {
                      background-color: black ; position: inherit ;
                      border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' }}
                  .chatgpt-modal input[type=checkbox]:focus {
                      outline: none ; box-shadow: none ; -webkit-box-shadow: none ; -moz-box-shadow: none }
                  .chatgpt-modal .checkbox-group label {
                      cursor: pointer ; font-size: 14px ; color: ${ scheme == 'dark' ? '#e1e1e1' : '#1e1e1e' }}`
            )
        }

        // Insert text into elems
        modalTitle.textContent = title || '' ; modalMessage.innerText = msg || '' ; chatgpt.renderHTML(modalMessage)

        // Create/append buttons (if provided) to buttons div
        const modalButtons = document.createElement('div')
        modalButtons.classList.add('modal-buttons', 'no-mobile-tap-outline')
        if (btns) { // are supplied
            if (!Array.isArray(btns)) btns = [btns] // convert single button to array if necessary
            btns.forEach((buttonFn) => { // create title-cased labels + attach listeners
                const button = document.createElement('button')
                button.textContent = buttonFn.name
                    .replace(/[_-]\w/g, match => match.slice(1).toUpperCase()) // convert snake/kebab to camel case
                    .replace(/([A-Z])/g, ' $1') // insert spaces
                    .replace(/^\w/, firstChar => firstChar.toUpperCase()) // capitalize first letter
                button.onclick = () => { dismissAlert() ; buttonFn() }
                modalButtons.insertBefore(button, modalButtons.firstChild)
            })
        }

        // Create/append OK/dismiss button to buttons div
        const dismissBtn = document.createElement('button')
        dismissBtn.textContent = btns ? 'Dismiss' : 'OK'
        modalButtons.insertBefore(dismissBtn, modalButtons.firstChild)

        // Highlight primary button
        modalButtons.lastChild.classList.add('primary-modal-btn')

        // Create/append checkbox (if provided) to checkbox group div
        const checkboxDiv = document.createElement('div')
        if (checkbox) { // is supplied
            checkboxDiv.classList.add('checkbox-group')
            const checkboxFn = checkbox, // assign the named function to checkboxFn
                  checkboxInput = document.createElement('input')
            checkboxInput.type = 'checkbox' ; checkboxInput.onchange = checkboxFn

            // Create/show label
            const checkboxLabel = document.createElement('label')
            checkboxLabel.onclick = () => { checkboxInput.checked = !checkboxInput.checked ; checkboxFn() }
            checkboxLabel.textContent = checkboxFn.name[0].toUpperCase() // capitalize first char
                + checkboxFn.name.slice(1) // format remaining chars
                    .replace(/([A-Z])/g, (match, letter) => ' ' + letter.toLowerCase()) // insert spaces, convert to lowercase
                    .replace(/\b(\w+)nt\b/gi, '$1n\'t') // insert apostrophe in 'nt' suffixes
                    .trim() // trim leading/trailing spaces

            checkboxDiv.append(checkboxInput) ; checkboxDiv.append(checkboxLabel)
        }

        // Create close button
        const closeBtn = document.createElement('div')
        closeBtn.title = 'Close' ; closeBtn.classList.add('modal-close-btn', 'no-mobile-tap-outline')
        const closeSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        closeSVG.setAttribute('height', '10px')
        closeSVG.setAttribute('viewBox', '0 0 14 14')
        closeSVG.setAttribute('fill', 'none')
        const closeSVGpath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        closeSVGpath.setAttribute('fill-rule', 'evenodd')
        closeSVGpath.setAttribute('clip-rule', 'evenodd')
        closeSVGpath.setAttribute('fill', chatgpt.isDarkMode() ? 'white' : 'black')
        closeSVGpath.setAttribute('d', 'M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976312 12.6834 -0.0976312 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976312 0.683417 -0.0976312 0.292893 0.292893C-0.0976312 0.683417 -0.0976312 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976312 12.6834 -0.0976312 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z')
        closeSVG.append(closeSVGpath) ; closeBtn.append(closeSVG)

        // Assemble/append div
        modal.append(closeBtn, modalTitle, modalMessage, checkboxDiv, modalButtons)
        modal.style.width = `${ width || 458 }px`
        modalContainer.append(modal) ; document.body.append(modalContainer)

        // Enqueue alert
        let alertQueue = JSON.parse(localStorage.alertQueue)
        alertQueue.push(modalContainer.id)
        localStorage.alertQueue = JSON.stringify(alertQueue)

        // Show alert if none active
        modalContainer.style.display = 'none'
        if (alertQueue.length == 1) {
            modalContainer.style.display = ''
            setTimeout(() => { // dim bg
                modal.parentNode.style.backgroundColor = `rgba(67,70,72,${ scheme == 'dark' ? 0.62 : 0.33 })`
                modal.parentNode.classList.add('animated')
            }, 100) // delay for transition fx
        }

        // Add listeners
        [modalContainer, closeBtn, closeSVG, dismissBtn].forEach(elem => elem.onclick = handlers.dismiss.click)
        document.addEventListener('keydown', handlers.dismiss.key)
        modal.onmousedown = handlers.drag.mousedown // enable click-dragging

        // Define alert dismisser
        const dismissAlert = () => {
            modalContainer.style.backgroundColor = 'transparent'
            modal.style.animation = 'alert-zoom-fade-out 0.165s ease-out'
            modal.onanimationend = () => {

                // Remove alert
                modalContainer.remove() // ...from DOM
                alertQueue = JSON.parse(localStorage.alertQueue)
                alertQueue.shift() // + memory
                localStorage.alertQueue = JSON.stringify(alertQueue) // + storage
                document.removeEventListener('keydown', handlers.dismiss.key) // prevent memory leaks

                // Check for pending alerts in queue
                if (alertQueue.length > 0) {
                    const nextAlert = document.getElementById(alertQueue[0])
                    setTimeout(() => {
                        nextAlert.style.display = ''
                        setTimeout(() => nextAlert.classList.add('animated'), 100)
                    }, 500)
                }
            }
        }

        return modalContainer.id // if assignment used
    },

    async askAndGetReply(query) {
        chatgpt.send(query) ; await chatgpt.isIdle()
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest')
    },

    autoRefresh: {
        activate(interval) {
            if (this.isActive) // already running, do nothing
                return console.log(
                    `↻ ChatGPT >> [${chatgpt.autoRefresh.nowTimeStamp()}] Auto refresh already active!`)

            const autoRefresh = this

            // Run main activate routine
            this.toggle.refreshFrame()
            const scheduleRefreshes = interval => {
                const randomDelay = Math.max(2, Math.floor(chatgpt.randomFloat() * 21 - 10)) // set random delay up to ±10 secs
                autoRefresh.isActive = setTimeout(() => {
                    const manifestScript = document.querySelector(chatgpt.selectors.ssgManifest)
                    if (manifestScript) {
                        document.querySelector('#refresh-frame').src = manifestScript.src + '?' + Date.now()
                        console.log(`↻ ChatGPT >> [${autoRefresh.nowTimeStamp()}] ChatGPT session refreshed`)
                    }
                    scheduleRefreshes(interval)
                }, (interval + randomDelay) * 1000)
            };
            scheduleRefreshes( interval ? parseInt(interval, 10) : 30 )
            console.log(`↻ ChatGPT >> [${chatgpt.autoRefresh.nowTimeStamp()}] Auto refresh activated`)

            // Add listener to send beacons in Chromium to thwart auto-discards if Page Visibility API supported
            if (navigator.userAgent.includes('Chrome') && typeof document.hidden != 'undefined')
                document.addEventListener('visibilitychange', this.toggle.beacons)
        },

        deactivate() {
            if (this.isActive) {
                this.toggle.refreshFrame()
                document.removeEventListener('visibilitychange', this.toggle.beacons)
                clearTimeout(this.isActive) ; this.isActive = null
                console.log(`↻ ChatGPT >> [${chatgpt.autoRefresh.nowTimeStamp()}] Auto refresh de-activated`)
            } else
                console.log(`↻ ChatGPT >> [${chatgpt.autoRefresh.nowTimeStamp()}] Auto refresh already inactive!`)
        },

        nowTimeStamp() {
            const now = new Date()
            const hours = now.getHours() % 12 || 12 // convert to 12h format
            let minutes = now.getMinutes(), seconds = now.getSeconds()
            if (minutes < 10) minutes = '0' + minutes; if (seconds < 10) seconds = '0' + seconds
            const meridiem = now.getHours() < 12 ? 'AM' : 'PM'
            return `${hours}:${minutes}:${seconds} ${meridiem}`
        },

        toggle: {

            beacons() {
                if (chatgpt.autoRefresh.beaconID) {
                    clearInterval(chatgpt.autoRefresh.beaconID) ; chatgpt.autoRefresh.beaconID = null
                    console.log(`↻ ChatGPT >> [${chatgpt.autoRefresh.nowTimeStamp()}] Beacons de-activated`)
                } else {
                    chatgpt.autoRefresh.beaconID = setInterval(() => {
                        navigator.sendBeacon('https://httpbin.org/post', new Uint8Array())
                        console.log(`↻ ChatGPT >> [${chatgpt.autoRefresh.nowTimeStamp()}] Beacon sent`)
                    }, 90000)
                    console.log(`ChatGPT >> [${chatgpt.autoRefresh.nowTimeStamp()}] Beacons activated`)
                }
            },

            refreshFrame() {
                let refreshFrame = document.querySelector('#refresh-frame')
                if (refreshFrame) refreshFrame.remove()
                else {
                    refreshFrame = Object.assign(document.createElement('iframe'),
                        { id: 'refresh-frame', style: 'display: none' })
                    document.head.prepend(refreshFrame)
                }
            }
        }
    },

    browser: {

        isLightMode() { return window.matchMedia?.('(prefers-color-scheme: light)')?.matches },
        isDarkMode() { return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches },
        isChromium() { return !!JSON.stringify(navigator.userAgentData?.brands)?.includes('Chromium') },
        isChrome() { return !!JSON.stringify(navigator.userAgentData?.brands)?.includes('Chrome') },
        isEdge() { return !!JSON.stringify(navigator.userAgentData?.brands)?.includes('Edge') },
        isBrave() { return !!JSON.stringify(navigator.userAgentData?.brands)?.includes('Brave') },
        isFirefox() { return navigator.userAgent.includes('Firefox') },

        isFullScreen() {
            const userAgentStr = navigator.userAgent
            return userAgentStr.includes('Chrome') ? window.matchMedia('(display-mode: fullscreen)').matches
                 : userAgentStr.includes('Firefox') ? window.fullScreen
                 : /MSIE|rv:/.test(userAgentStr) ? document.msFullscreenElement : document.webkitIsFullScreen
        },

        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }
    },

    async clearChats() { // back-end method
        return new Promise((resolve, reject) =>
            chatgpt.getAccessToken().then(token => {
                const xhr = new XMLHttpRequest()
                xhr.open('PATCH', chatgpt.endpoints.openAI.chats, true)
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                xhr.onload = () => {
                    if (xhr.status != 200) return reject('🤖 chatgpt.js >> Request failed. Cannot clear chats.')
                    console.info('Chats successfully cleared') ; resolve()
                }
                xhr.send(JSON.stringify({ is_visible: false }))
            }).catch(err => reject(new Error(err.message)))
        )
    },

    code: {
    // Tip: Use template literals for easier passing of code arguments. Ensure backticks and `$`s are escaped (using `\`)

        async execute(code) {
            if (!code) return console.error('Code argument not supplied. Pass some code!')
            if (typeof code != 'string') return console.error('Code argument must be a string!')
            chatgpt.send('Display the output as if you were terminal:\n\n' + code)
            console.info('Executing code...')
            await chatgpt.isIdle()
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'))
        },

        extract(msg) { // extract pure code from response (targets last block)
            const codeBlocks = msg.match(/(?<=```.*\n)[\s\S]*?(?=```)/g)
            return codeBlocks ? codeBlocks[codeBlocks.length - 1] : msg
        },

        async isIdle(timeout = null) {
            const obsConfig = { childList: true, subtree: true }

            // Create promises
            const timeoutPromise = timeout ? new Promise(resolve => setTimeout(() => resolve(false), timeout)) : null
            const isIdlePromise = (async () => {
                await new Promise(resolve => { // when on convo page
                    if (document.querySelector(chatgpt.selectors.chatDivs.msg)) resolve()
                    else new MutationObserver((_, obs) => {
                        if (document.querySelector(chatgpt.selectors.chatDivs.msg)) { obs.disconnect() ; resolve() }
                    }).observe(document.body, obsConfig)
                })
                await new Promise(resolve => // when reply starts generating
                    new MutationObserver((_, obs) => {
                        if (chatgpt.getStopBtn()) { obs.disconnect() ; resolve() }
                    }).observe(document.body, { childList: true, subtree: true })
                )
                const replyDivs = document.querySelectorAll(chatgpt.selectors.chatDivs.reply),
                      lastReplyDiv = replyDivs[replyDivs.length - 1]
                await new Promise(resolve => // when code starts generating
                    new MutationObserver((_, obs) => {
                        if (lastReplyDiv?.querySelector('pre')) { obs.disconnect() ; resolve() }
                    }).observe(document.body, obsConfig)
                )
                return new Promise(resolve => // when code stops generating
                    new MutationObserver((_, obs) => {
                        if (lastReplyDiv?.querySelector('pre')?.nextElementSibling // code block not last child of reply div
                            || !chatgpt.getStopBtn() // ...or reply outright stopped generating
                        ) { obs.disconnect() ; resolve(true) }
                    }).observe(document.body, obsConfig)
                )
            })()

            return await (timeoutPromise ? Promise.race([isIdlePromise, timeoutPromise]) : isIdlePromise)
        },

        async minify(code) {
            if (!code) return console.error('Code argument not supplied. Pass some code!')
            if (typeof code != 'string') return console.error('Code argument must be a string!')
            chatgpt.send('Minify the following code:\n\n' + code)
            console.info('Minifying code...')
            await chatgpt.isIdle()
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'))
        },

        async obfuscate(code) {
            if (!code) return console.error('Code argument not supplied. Pass some code!')
            if (typeof code != 'string') return console.error('Code argument must be a string!')
            chatgpt.send('Obfuscate the following code:\n\n' + code)
            console.info('Obfuscating code...')
            await chatgpt.isIdle()
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'))
        },

        async refactor(code, objective) {
            if (!code) return console.error('Code (1st) argument not supplied. Pass some code!')
            for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] != 'string')
                return console.error(`Argument ${ i + 1 } must be a string.`)
            chatgpt.send(`Refactor the following code for ${ objective || 'brevity' }:\n\n${code}`)
            console.info('Refactoring code...')
            await chatgpt.isIdle()
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'))
        },

        async review(code) {
            if (!code) return console.error('Code argument not supplied. Pass some code!')
            if (typeof code == 'string') return console.error('Code argument must be a string!')
            chatgpt.send('Review the following code for me:\n\n' + code)
            console.info('Reviewing code...')
            await chatgpt.isIdle()
            return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest')
        },

        async unminify(code) {
            if (!code) return console.error('Code argument not supplied. Pass some code!')
            if (typeof code != 'string') return console.error('Code argument must be a string!')
            chatgpt.send('Unminify the following code.:\n\n' + code)
            console.info('Unminifying code...')
            await chatgpt.isIdle()
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'))
        },

        async write(prompt, outputLang) {
            if (!prompt) return console.error('Prompt (1st) argument not supplied. Pass a prompt!')
            if (!outputLang) return console.error('outputLang (2nd) argument not supplied. Pass a language!')
            for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] != 'string')
                return console.error(`Argument ${ i + 1 } must be a string.`)
            chatgpt.send(`${prompt}\n\nWrite this as code in ${outputLang}`)
            console.info('Writing code...')
            await chatgpt.isIdle()
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'))
        }
    },

    continue() { chatgpt.response.continue() },

    async detectLanguage(text) {
        if (!text) return console.error('Text argument not supplied. Pass some text!')
        if (typeof text != 'string') return console.error('Text argument must be a string!')
        chatgpt.send(`Detect the language of the following text:\n\n${text}`
            + '\n\nOnly respond with the name of the language')
        console.info('Reviewing text...')
        await chatgpt.isIdle()
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest')
    },

    executeCode() { chatgpt.code.execute() },

    async exportChat(chatToGet, format) {
    // chatToGet = 'active' (default) | 'latest' | index|title|id of chat to get
    // format = 'html' (default) | 'md' | 'pdf' | 'text'

        // Init args
        chatToGet = !chatToGet ? 'active' // default to 'active' if unpassed
                  : Number.isInteger(chatToGet) || /^\d+$/.test(chatToGet) ? // else if string/int num passed
                      parseInt(chatToGet, 10) // parse as integer
                  : chatToGet // else preserve non-num string as 'active', 'latest' or title/id of chat to get
        format = format.toLowerCase() || 'html' // default to 'html' if unpassed

        // Create transcript + filename
        console.info('Generating transcript...')
        let transcript = '', filename
        if (/te?xt/.test(format)) { // generate plain transcript + filename for TXT export

            // Format filename using date/time
            const now = new Date(),
                  day = now.getDate().toString().padStart(2, '0'),
                  month = (now.getMonth() + 1).toString().padStart(2, '0'),
                  year = now.getFullYear(),
                  hour = now.getHours().toString().padStart(2, '0'),
                  minute = now.getMinutes().toString().padStart(2, '0')
            filename = `ChatGPT_${day}-${month}-${year}_${hour}-${minute}.txt`

            // Create transcript from active chat
            if (chatToGet == 'active' && /\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(window.location.href)) {
                const chatDivs = document.querySelectorAll(chatgpt.selectors.chatDivs.convo)
                if (!chatDivs.length) return console.error('Chat is empty!')
                const msgs = [] ; let isUserMsg = true
                chatDivs.forEach(div => {
                    const sender = isUserMsg ? 'USER' : 'CHATGPT'; isUserMsg = !isUserMsg
                    const msg = [...div.childNodes].map(node => node.innerText)
                              .join('\n\n') // insert double line breaks between paragraphs
                              .replace('Copy code', '')
                    msgs.push(`${sender}: ${msg}`)
                })
                transcript = msgs.join('\n\n')

            // ...or from getChatData(chatToGet)
            } else
                for (const entry of await chatgpt.getChatData(chatToGet, 'msg', 'both', 'all'))
                    transcript += `USER: ${entry.user}\n\nCHATGPT: ${entry.chatgpt}\n\n`

        } else { // generate rich transcript + filename for HTML/MD/PDF export

            // Fetch HTML transcript from OpenAI
            const response = await fetch(await chatgpt.shareChat(chatToGet)),
                  htmlContent = await response.text()

            // Format filename after <title>
            const parser = new DOMParser(),
                  parsedHtml = parser.parseFromString(htmlContent, 'text/html')
            filename = `${ parsedHtml.querySelector('title').textContent || 'ChatGPT conversation' }.html`

            // Convert relative CSS paths to absolute ones
            const cssLinks = parsedHtml.querySelectorAll('link[rel=stylesheet]')
            cssLinks.forEach(link => {
                const href = link.getAttribute('href')
                if (href?.startsWith('/')) link.setAttribute('href', 'https://chat.openai.com' + href)
            });

            // Serialize updated HTML to string
            transcript = new XMLSerializer().serializeToString(parsedHtml)
        }

        // Export transcript
        console.info(`Exporting transcript as ${format.toUpperCase()}...`)
        if (format == 'pdf') { // convert SVGs + launch PDF printer

            // Convert SVG icons to data URLs for proper PDF rendering
            transcript = transcript.replace(/<svg.*?<\/svg>/g, (match) => {
                const dataURL = 'data:image/svg+xml,' + encodeURIComponent(match)
                return `<img src="${dataURL}">`
            })

            // Launch PDF printer
            const transcriptPopup = window.open('', '', 'toolbar=0, location=0, menubar=0, height=600, width=800')
            transcriptPopup.document.write(transcript)
            setTimeout(() => { transcriptPopup.print({ toPDF: true }) }, 100)

        } else { // auto-save to file

            if (format == 'md') { // remove extraneous HTML + fix file extension
                const mdMatch = /<.*<h1(.|\n)*?href=".*?continue[^"]*".*?\/a>.*?<[^/]/.exec(transcript)[1]
                transcript = mdMatch || transcript; filename = filename.replace('.html', '.md')
            }
            const blob = new Blob([transcript],
                { type: 'text/' + ( format == 'html' ? 'html' : format == 'md' ? 'markdown' : 'plain' )})
            const link = document.createElement('a'), blobURL = URL.createObjectURL(blob)
            link.href = blobURL ; link.download = filename ; document.body.append(link)
            link.click() ; document.body.removeChild(link) ; URL.revokeObjectURL(blobURL)
        }
    },

    extractCode() { chatgpt.code.extract() },
    focusChatbar() { chatgpt.getChatBox()?.focus() },

    footer: {
        get() { return document.querySelector(chatgpt.selectors.footer) },

        hide() {
            const footer = chatgpt.footer.get()
            if (!footer) return console.error('Footer element not found!')
            if (footer.style.visibility == 'hidden') return console.info('Footer already hidden!')
            footer.style.display = 'none'
        },

        show() {
            const footer = chatgpt.footer.get()
            if (!footer) return console.error('Footer element not found!')
            if (footer.style.visibility != 'hidden') return console.info('Footer already shown!')
            footer.style.display = 'inherit'
        }
    },

    generateRandomIP() {
        const ip = Array.from({length: 4}, () => Math.floor(chatgpt.randomFloat() * 256)).join('.')
        console.info('IP generated: ' + ip)
        return ip
    },

    get(targetType, targetName = '') {
    // targetType = 'button'|'link'|'div'|'response'
    // targetName = from get[targetName][targetType] methods, e.g. 'send'

        // Validate argument types to be string only
        if (typeof targetType != 'string' || typeof targetName != 'string')
            throw new TypeError('Invalid arguments. Both arguments must be strings.')

        // Validate targetType
        if (!cjsTargetTypes.includes(targetType.toLowerCase()))
            throw new Error(`Invalid targetType: ${targetType}. Valid values are: ${JSON.stringify(cjsTargetTypes)}`)

        // Validate targetName scoped to pre-validated targetType
        const targetNames = [], reTargetName = new RegExp(`^get(.*)${targetType}$`, 'i')
        for (const prop in chatgpt) {
            if (typeof chatgpt[prop] == 'function' && reTargetName.test(prop)) {
                targetNames.push( // add found targetName to valid array
                    prop.replace(reTargetName, '$1').toLowerCase())
        }}
        if (!targetNames.includes(targetName.toLowerCase()))
            throw new Error(`Invalid targetName: ${targetName}. `
                + (targetNames.length > 0 ? 'Valid values are: ' + JSON.stringify(targetNames)
                    : 'targetType ' + targetType.toLowerCase() + ' does not require additional options.'))

        // Call target function using pre-validated name components
        const targetFuncNameLower = ('get' + targetName + targetType).toLowerCase()
        const targetFuncName = Object.keys(this).find( // find originally cased target function name
            (name) => { return name.toLowerCase() == targetFuncNameLower }) // test for match
        return this[targetFuncName]() // call found function
    },

    getAccessToken() {
        return new Promise((resolve, reject) => {
            if (chatgpt.accessToken && (Date.parse(chatgpt.accessToken.expireDate) - Date.parse(new Date()) >= 0))
                return resolve(chatgpt.accessToken.token) // unexpired one exists already
            const xhr = new XMLHttpRequest()
            xhr.open('GET', chatgpt.endpoints.openAI.session, true)
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.onload = () => {
                if (xhr.status != 200) return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve access token.')
                console.info(`Token expiration: ${
                    new Date(JSON.parse(xhr.responseText).expires).toLocaleString().replace(',', ' at')}`)
                chatgpt.accessToken = {
                    token: JSON.parse(xhr.responseText).accessToken, expireDate: JSON.parse(xhr.responseText).expires }
                resolve(chatgpt.accessToken.token)
            }
            xhr.send()
        })
    },

    getAccountDetails(...details) {
    // details = [email|id|image|name|picture] = optional

        // Build details array
        const validDetails = [ 'email', 'id', 'image', 'name', 'picture' ]
        details = ( !arguments[0] ? validDetails // no details passed, populate w/ all valid ones
                : Array.isArray(arguments[0]) ? arguments[0] // details array passed, do nothing
                : Array.from(arguments) ) // details arg(s) passed, convert to array

        // Validate detail args
        for (const detail of details) if (!validDetails.includes(detail))
            return console.error(
                `Invalid detail arg '${detail}' supplied. Valid details are:\n`
              + `                    [${validDetails}]`)

        // Return account details
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', chatgpt.endpoints.openAI.session, true)
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.onload = () => {
                if (xhr.status == 200) {
                    const data = JSON.parse(xhr.responseText).user, detailsToReturn = {}
                    for (const detail of details) detailsToReturn[detail] = data[detail]
                    return resolve(detailsToReturn)
                } else return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve account details.')
            }
            xhr.send()
        })
    },

    getChatBox() { return document.getElementById('prompt-textarea') },

    getChatData(chatToGet = 1, detailsToGet = 'all', sender = 'all', msgToGet = 'all') {
    // chatToGet = 'active' | 'latest' | index|title|id of chat to get (defaults to active OpenAI chat > latest chat)
    // detailsToGet = 'all' | [ 'id' | 'title' | 'create_time' | 'update_time' | 'msg' ] (defaults to 'all', excludes msg's)
    // sender = ( 'all' | 'both' ) | 'user' | 'chatgpt' (defaults to 'all', requires 2nd param = 'msg')
    // msgToGet = 'all' | 'latest' | index of msg to get (defaults to 'all', requires 2nd param = 'msg')

        // Init args
        const validDetails = [ 'all', 'id', 'title', 'create_time', 'update_time', 'msg' ]
        const validSenders = [ 'all', 'both', 'user', 'chatgpt' ]
        chatToGet = !chatToGet ? 'active' // if '' passed, set to active
                  : Number.isInteger(chatToGet) || /^\d+$/.test(chatToGet) ? // else if string/int num passed
                      ( parseInt(chatToGet, 10) == 0 ? 0 : parseInt(chatToGet, 10) - 1 ) // ...offset -1 or keep as 0
                  : chatToGet // else preserve non-num string as 'active', 'latest' or title/id of chat to get
        detailsToGet = ['all', ''].includes(detailsToGet) ? // if '' or 'all' passed
                         validDetails.filter(detail => /^(?!all$|msg$).*/.test(detail)) // populate w/ [validDetails] except 'all' & 'msg'
                     : Array.isArray(detailsToGet) ? detailsToGet : [detailsToGet] // else convert to array if needed
        sender = !sender ? 'all' // if '' or unpassed, set to 'all'
               : validSenders.includes(sender) ? sender : 'invalid' // else set to validSenders or 'invalid'
        msgToGet = Number.isInteger(msgToGet) || /^\d+$/.test(msgToGet) ? // if string/int num passed
                     ( parseInt(msgToGet, 10) == 0 ? 0 : parseInt(msgToGet, 10) - 1 ) // ...offset -1 or keep as 0
                 : ['all', 'latest'].includes(msgToGet.toLowerCase()) ? // else if 'all' or 'latest' passed
                     msgToGet.toLowerCase() // ...preserve it
                 : !msgToGet ? 'all' // else if '', set to 'all'
                 : 'invalid' // else set 'invalid' for validation step

        // Validate args
        for (const detail of detailsToGet)
            if (!validDetails.includes(detail)) return console.error(
                `Invalid detail arg '${detail}' passed. Valid details are:\n`
              + `                    [${validDetails}]`)
        if (sender == 'invalid') return console.error(
            'Invalid sender arg passed. Valid senders are:\n'
          + `                    [${validSenders}]`)
        if (msgToGet == 'invalid') return console.error(
            `Invalid msgToGet arg passed. Valid msg's to get are:\n`
          + `                    [ 'all' | 'latest' | index of msg to get ]`)

        const getChatDetails = (token, detailsToGet) => {
            const re_chatID = /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.open('GET', chatgpt.endpoints.openAI.chats, true)
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                xhr.onload = () => {
                    if (xhr.status != 200)
                        return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve chat details.')
                    const data = JSON.parse(xhr.responseText).items
                    if (data.length <= 0) return reject('🤖 chatgpt.js >> Chat list is empty.')
                    const detailsToReturn = {}

                    // Return by index if num, 'latest', or 'active' passed but not truly active
                    if (Number.isInteger(chatToGet) || chatToGet == 'latest' ||
                            (chatToGet == 'active' && !new RegExp(`\/${re_chatID.source}$`).test(location.href))) {
                        chatToGet = Number.isInteger(chatToGet) ? chatToGet : 0 // preserve index, otherwise get latest
                        if (chatToGet > data.length) // reject if index out-of-bounds
                            return reject(`🤖 chatgpt.js >> Chat with index ${ chatToGet +1 }`
                                + ` is out of bounds. Only ${data.length} chats exist!`)
                        for (const detail of detailsToGet) detailsToReturn[detail] = data[chatToGet][detail]
                        return resolve(detailsToReturn)
                    }

                    // Return by title, ID or active chat
                    const chatIdentifier = ( // determine to check by ID or title
                        chatToGet == 'active' ||
                            new RegExp(`^${re_chatID.source}$`).test(chatToGet) ? 'id' : 'title' )
                    if (chatToGet == 'active') // replace chatToGet w/ actual ID
                        chatToGet = re_chatID.exec(window.location.href)[0]
                    let idx, chatFound // index of potentially found chat, flag if found
                    for (idx = 0 ; idx < data.length ; idx++) { // search for id/title to set chatFound flag
                        if (data[idx][chatIdentifier] == chatToGet) { chatFound = true ; break }}
                    if (!chatFound) // exit
                        return reject(`🤖 chatgpt.js >> No chat with ${chatIdentifier} = ${chatToGet} found.`)
                    for (const detail of detailsToGet) detailsToReturn[detail] = data[idx][detail]
                    return resolve(detailsToReturn)
                }
                xhr.send()
        })}

        const getChatMsgs = token => {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                getChatDetails(token, ['id']).then(chat => {
                    xhr.open('GET', `${chatgpt.endpoints.openAI.chat}/${chat.id}`, true)
                    xhr.setRequestHeader('Content-Type', 'application/json')
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                    xhr.onload = () => {
                        if (xhr.status != 200)
                            return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve chat messages.')

                        // Init const's
                        const data = JSON.parse(xhr.responseText).mapping // get chat messages
                        const userMessages = [], chatGPTMessages = [], msgsToReturn = []

                        // Fill [userMessages]
                        for (const key in data)
                            if (data[key].message != null && data[key].message.author.role == 'user')
                                userMessages.push({ id: data[key].id, msg: data[key].message })
                        userMessages.sort((a, b) => a.msg.create_time - b.msg.create_time) // sort in chronological order

                        if (parseInt(msgToGet, 10) + 1 > userMessages.length) // reject if index out of bounds
                            return reject(`🤖 chatgpt.js >> Message/response with index ${ msgToGet +1 }`
                                + ` is out of bounds. Only ${userMessages.length} messages/responses exist!`)

                        // Fill [chatGPTMessages]
                        for (const userMessage of userMessages) {
                            let sub = []
                            for (const key in data) {
                                if (data[key].message != null && data[key].message.author.role == 'assistant'
                                    && data[key].parent == userMessage.id)
                                        sub.push(data[key].message)
                            }
                            sub.sort((a, b) => a.create_time - b.create_time) // sort in chronological order
                            sub = sub.map(x => { // pull out msgs after sorting
                                switch(x.content.content_type) {
                                    case 'code': return x.content.text
                                    case 'text': return x.content.parts[0]
                                    default: return
                                }
                            })
                            sub = sub.length == 1 ? sub[0] : sub // convert not regenerated responses to strings
                            chatGPTMessages.push(sub) // array of arrays (length > 1 = regenerated responses)
                        }

                        if (sender == 'user') // Fill [msgsToReturn] with user messages
                            for (const userMessage in userMessages)
                                msgsToReturn.push(userMessages[userMessage].msg.content.parts[0])
                        else if (sender == 'chatgpt') // Fill [msgsToReturn] with ChatGPT responses
                            for (const chatGPTMessage of chatGPTMessages)
                                msgsToReturn.push(msgToGet == 'latest' ? chatGPTMessages[chatGPTMessages.length - 1] : chatGPTMessage );
                        else { // Fill [msgsToReturn] with objects of user messages and chatgpt response(s)
                            let i = 0
                            for (const message in userMessages) {
                                msgsToReturn.push({
                                    user: userMessages[message].msg.content.parts[0],
                                    chatgpt: msgToGet == 'latest' ? chatGPTMessages[i][chatGPTMessages[i].length - 1] : chatGPTMessages[i]
                                })
                                i++
                            }
                        }
                        return resolve(msgToGet == 'all' ? msgsToReturn // if 'all' passed, return array
                                     : msgToGet == 'latest' ? msgsToReturn[msgsToReturn.length - 1] // else if 'latest' passed, return latest
                                     : msgsToReturn[msgToGet] ) // else return element of array
                    }
                    xhr.send()
        })})}

        // Return chat data
        return new Promise(resolve => chatgpt.getAccessToken().then(token => {
            return resolve(detailsToGet.includes('msg') ? getChatMsgs(token)
                         : getChatDetails(token, detailsToGet))
        }))
    },

    getChatInput() { return chatgpt.getChatBox().firstChild.innerText },
    getContinueButton() { return document.querySelector(chatgpt.selectors.btns.continue) },
    getErrorMsg() { return document.querySelector(`${chatgpt.selectors.errors.txt}:last-of-type`)?.innerText },
    getFooterDiv() { return chatgpt.footer.get() },
    getHeaderDiv() { return chatgpt.header.get() },
    getLastPrompt() { return chatgpt.getChatData('active', 'msg', 'user', 'latest') },
    getLastResponse() { return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest') },
    getLoginButton() { return document.querySelector(chatgpt.selectors.btns.login) },
    getNewChatButton() { return document.querySelector(chatgpt.selectors.btns.newChat) },
    getNewChatLink() { return document.querySelector(chatgpt.selectors.links.newChat) },
    getRegenerateButton() { return document.querySelector(chatgpt.selectors.btns.regen) },

    getResponse() {
    // * Returns response via DOM by index arg if OpenAI chat page is active, otherwise uses API w/ following args:
    // chatToGet = index|title|id of chat to get (defaults to latest if '' unpassed)
    // responseToGet = index of response to get (defaults to latest if '' unpassed)
    // regenResponseToGet = index of regenerated response to get (defaults to latest if '' unpassed)

        return chatgpt.response.get(...arguments)
    },

    getResponseFromAPI(chatToGet, responseToGet) { return chatgpt.response.getFromAPI(chatToGet, responseToGet) },
    getResponseFromDOM(pos) { return chatgpt.response.getFromDOM(pos) },
    getScrollToBottomButton() { return document.querySelector(chatgpt.selectors.btns.scroll) },
    getSendButton() { return document.querySelector(chatgpt.selectors.btns.send) },
    getStopButton() { return document.querySelector(chatgpt.selectors.btns.stop) },

    getUserLanguage() {
        return navigator.languages[0] || navigator.language || navigator.browserLanguage
            || navigator.systemLanguage || navigator.userLanguage || ''
    },

    getVoiceButton() { return document.querySelector(chatgpt.selectors.btns.voice) },

    header: {
        get() { return document.querySelector(chatgpt.selectors.header) },
        hide() { chatgpt.header.get().style.display = 'none' },
        show() { chatgpt.header.get().style.display = 'flex' }
    },

    hideFooter() { chatgpt.footer.hide() },
    hideHeader() { chatgpt.header.hide() },

    history: {
        async isLoaded(timeout = null) {
            const timeoutPromise = timeout ? new Promise(resolve => setTimeout(() => resolve(false), timeout)) : null
            const isLoadedPromise = new Promise(resolve => {
                if (document.querySelector(chatgpt.selectors.chatHistory)) resolve(true)
                else new MutationObserver((_, obs) => {
                    if (document.querySelector(chatgpt.selectors.chatHistory)) { obs.disconnect() ; resolve(true) }
                }).observe(document.documentElement, { childList: true, subtree: true })
            })
            return await ( timeoutPromise ? Promise.race([isLoadedPromise, timeoutPromise]) : isLoadedPromise )
        }
    },

    instructions: {
    // NOTE: DOM is not updated to reflect new instructions added/removed or toggle state (until session refresh)

        add(instruction, target) {
            if (!instruction) return console.error('Please provide an instruction')
            if (typeof instruction != 'string') return console.error('Instruction must be a string')
            const validTargets = ['user', 'chatgpt'] // valid targets
            if (!target) return console.error('Please provide a valid target!')
            if (typeof target != 'string') return console.error('Target must be a string')
            target = target.toLowerCase() // lowercase target
            if (!validTargets.includes(target))
                return console.error(`Invalid target ${target}. Valid targets are [${validTargets}]`)

            instruction = `\n\n${instruction}` // add 2 newlines to the new instruction

            return new Promise(resolve => {
                chatgpt.getAccessToken().then(async token => {
                    const instructionsData = await this.fetchData()

                    // Concatenate old instructions with new instruction
                    if (target == 'user') instructionsData.about_user_message += instruction
                    else if (target == 'chatgpt') instructionsData.about_model_message += instruction

                    await this.sendRequest('POST', token, instructionsData)
                    return resolve();
                });
            });
        },

        clear(target) {
            const validTargets = ['user', 'chatgpt'] // valid targets
            if (!target) return console.error('Please provide a valid target!')
            if (typeof target != 'string') return console.error('Target must be a string')
            target = target.toLowerCase() // lowercase target
            if (!validTargets.includes(target))
                return console.error(`Invalid target ${target}. Valid targets are [${validTargets}]`)

            return new Promise(resolve => {
                chatgpt.getAccessToken().then(async token => {
                    const instructionsData = await this.fetchData()

                    // Clear target's instructions
                    if (target == 'user') instructionsData.about_user_message = ''
                    else if (target == 'chatgpt') instructionsData.about_model_message = ''

                    await this.sendRequest('POST', token, instructionsData)
                    return resolve()
                })})
        },

        fetchData() {
        // INTERNAL METHOD
            return new Promise(resolve =>
                chatgpt.getAccessToken().then(async token =>
                    resolve(await this.sendRequest('GET', token)))) // return API data
        },

        sendRequest(method, token, body) {
        // INTERNAL METHOD
            // Validate args
            for (let i = 0 ; i < arguments.length - 1 ; i++) if (typeof arguments[i] == 'string')
                return console.error(`Argument ${ i + 1 } must be a string`)
            const validMethods = ['POST', 'GET']
            method = (method || '').trim().toUpperCase()
            if (!method || !validMethods.includes(method)) // reject if not valid method
                return console.error(`Valid methods are ${validMethods}`)
            if (!token) return console.error('Please provide a valid access token!')
            if (body && typeof body != 'object') // reject if body is passed but not an object
                return console.error(`Invalid body data type. Got ${ typeof body }, expected object`)

            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.open(method, chatgpt.endpoints.openAI.instructions, true)
                // Set headers
                xhr.setRequestHeader('Accept-Language', 'en-US')
                xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                if (method == 'POST') xhr.setRequestHeader('Content-Type', 'application/json')

                xhr.onload = () => {
                    const responseData = JSON.parse(xhr.responseText)
                    if (xhr.status == 422)
                        return reject('🤖 chatgpt.js >> Character limit exceeded. Custom instructions can have a maximum length of 1500 characters.');
                    else if (xhr.status == 403 && responseData.detail.reason == 'content_policy')
                        return reject('🤖 chatgpt.js >> ' + responseData.detail.description)
                    else if (xhr.status != 200)
                        return reject('🤖 chatgpt.js >> Request failed. Cannot contact custom instructions endpoint.')
                    console.info(`Custom instructions successfully contacted with method ${method}`)
                    return resolve(responseData || {}) // return response data no matter what the method is
                }
                xhr.send(JSON.stringify(body) || '') // if body is passed send it, else just send the request
            })
        },

        turnOff() {
            return new Promise(resolve => chatgpt.getAccessToken().then(async token => {
                const instructionsData = await this.fetchData()
                instructionsData.enabled = false
                await this.sendRequest('POST', token, instructionsData)
                return resolve()
            }))
        },

        turnOn() {
            return new Promise(resolve => chatgpt.getAccessToken().then(async token => {
                const instructionsData = await this.fetchData()
                instructionsData.enabled = true
                await this.sendRequest('POST', token, instructionsData)
                return resolve()
            }))
        },

        toggle() {
            return new Promise(resolve => this.fetchData().then(async instructionsData => {
                await (instructionsData.enabled ? this.turnOff() : this.turnOn())
                return resolve()
            }))
        }
    },

    isDarkMode() { return document.documentElement.classList.contains('dark') },
    isFullScreen() { return chatgpt.browser.isFullScreen() },

    async isIdle(timeout = null) {
        const obsConfig = { childList: true, subtree: true }

        // Create promises
        const timeoutPromise = timeout ? new Promise(resolve => setTimeout(() => resolve(false), timeout)) : null
        const isIdlePromise = (async () => {
            await new Promise(resolve => { // when on convo page
                if (document.querySelector(chatgpt.selectors.chatDivs.msg)) resolve()
                else new MutationObserver((_, obs) => {
                    if (document.querySelector(chatgpt.selectors.chatDivs.msg)) { obs.disconnect() ; resolve() }
                }).observe(document.body, obsConfig)
            })
            await new Promise(resolve => // when reply starts generating
                new MutationObserver((_, obs) => {
                    if (chatgpt.getStopBtn()) { obs.disconnect() ; resolve() }
                }).observe(document.body, obsConfig)
            )
            return new Promise(resolve => // when reply stops generating
                new MutationObserver((_, obs) => {
                    if (!chatgpt.getStopBtn()) { obs.disconnect() ; resolve(true) }
                }).observe(document.body, obsConfig)
            )
        })()

        return await (timeoutPromise ? Promise.race([isIdlePromise, timeoutPromise]) : isIdlePromise)
    },

    async isLoaded(timeout = null) {
        const timeoutPromise = timeout ? new Promise(resolve => setTimeout(() => resolve(false), timeout)) : null
        const isLoadedPromise = new Promise(resolve => {
            if (chatgpt.getNewChatBtn()) resolve(true)
            else new MutationObserver((_, obs) => {
                if (chatgpt.getNewChatBtn()) { obs.disconnect() ; resolve(true) }
            }).observe(document.documentElement, { childList: true, subtree: true })
        })
        return await ( timeoutPromise ? Promise.race([isLoadedPromise, timeoutPromise]) : isLoadedPromise )
    },

    isLightMode() { return document.documentElement.classList.contains('light') },
    isTempChat() { return location.search == '?temporary-chat=true' },
    isTyping() { return !!this.getStopButton() },
    login() { window.location.href = 'https://chat.openai.com/auth/login' },
    logout() { window.location.href = 'https://chat.openai.com/auth/logout' },

    menu: {
        elems: [],

        append(elem, attrs = {}) {
        // elem = 'button' | 'dropdown' REQUIRED (no default value)
        // attrs = { ... }
        // attrs for 'button': 'icon' = src string, 'label' = string, 'onclick' = function
        // attrs for 'dropdown': 'items' = [ { text: string, value: string }, ... ] array of objects
        // where 'text' is the displayed text of the option and 'value' is the value of the option

            const validElems = ['button', 'dropdown']
            if (!elem || typeof elem != 'string') // element not passed or invalid type
                return console.error('🤖 chatgpt.js >> Please supply a valid string element name!')
            elem = elem.toLowerCase()
            if (!validElems.includes(elem)) // element not in list
                return console.error(`🤖 chatgpt.js >> Invalid element! Valid elems are [${validElems}]`)

            const newElem = document.createElement(elem == 'dropdown' ? 'select' : elem == 'button' ? 'a' : elem)
            newElem.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now()

            if (elem == 'button') {
                newElem.textContent = attrs?.label && typeof attrs.label == 'string' ? attrs.label : 'chatgpt.js button'
                const icon = document.createElement('img')
                icon.src = attrs?.icon && typeof attrs.icon == 'string' // can also be base64 encoded image string
                    ? attrs.icon // add icon to button element if given, else default one
                    : `${chatgpt.endpoints.assets}/starters/chrome/extension/icons/icon128.png`
                icon.width = 18
                newElem.firstChild.before(icon)
                newElem.onclick = attrs?.onclick && typeof attrs.onclick == 'function' ? attrs.onclick : function(){}
            }

            else if (elem == 'dropdown') {
                if (!attrs?.items || // there no are options to add
                    !Array.isArray(attrs.items) || // it's not an array
                    !attrs.items.length) // the array is empty
                        attrs.items = [{ text: '🤖 chatgpt.js option', value: 'chatgpt.js option value' }] // set default dropdown entry

                if (!attrs.items.every(el => typeof el == 'object')) // the entries of the array are not objects
                    return console.error('\'items\' must be an array of objects!')

                newElem.style = 'background-color: #000; width: 100%; border: none;'

                attrs.items.forEach(item => {
                    const optionElement = document.createElement('option')
                    optionElement.textContent = item?.text
                    optionElement.value = item?.value
                    newElem.add(optionElement)
                })
            }

            const addElemsToMenu = () => {
                const optionBtns = document.querySelectorAll('a[role=menuitem]')
                let cssClasses
                for (const navLink of optionBtns)
                    if (navLink.textContent == 'Settings') { cssClasses = navLink.classList ; break }
                const headlessNav = optionBtns[0].parentNode
                chatgpt.menu.elems.forEach(elem => {
                    elem.setAttribute('class', cssClasses)
                    if (!headlessNav.contains(elem))
                        try { headlessNav.firstChild.before(elem) }
                        catch (err) { console.error(err) }
                })
            }

            this.elems.push(newElem)
            const menuBtn = document.querySelector('nav button[id*=headless]')
            if (!this.addedEvent) { // to prevent adding more than one event
                menuBtn?.addEventListener('click', () => setTimeout(addElemsToMenu, 25)) ; this.addedEvent = true }

            return newElem.id
        },

        close() {
            try { document.querySelector('nav [id*=menu-button][aria-expanded=true]').click() }
            catch (err) { console.error(err.message) }
        },

        open() {
            try { document.querySelector('nav [id*=menu-button][aria-expanded=false]').click() }
            catch (err) { console.error(err.message) }
        }
    },

    minify() { chatgpt.code.minify(); },

    notify(...args) {
        const scheme = chatgpt.isDarkMode() ? 'dark' : 'light'
        let msg, position, notifDuration, shadow, toast
        if (typeof args[0] == 'object' && !Array.isArray(args[0]))
            ({ msg, position, notifDuration, shadow, toast } = args[0])
        else [msg, position, notifDuration, shadow] = args
        notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
        const fadeDuration = 0.35, // sec duration of fade-out
              vpYoffset = 23, vpXoffset = 27 // px offset from viewport border

        // Create/append notification div
        const notificationDiv = document.createElement('div') // make div
        notificationDiv.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now()
        notificationDiv.classList.add('chatgpt-notif')
        notificationDiv.textContent = msg // insert msg
        document.body.append(notificationDiv) // insert into DOM

        // Create/append close button
        const closeBtn = document.createElement('div')
        closeBtn.title = 'Dismiss'; closeBtn.classList.add('notif-close-btn', 'no-mobile-tap-outline')
        const closeSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        closeSVG.setAttribute('height', '8px')
        closeSVG.setAttribute('viewBox', '0 0 14 14')
        closeSVG.setAttribute('fill', 'none')
        closeSVG.style.height = closeSVG.style.width = '8px' // override SVG styles on non-OpenAI sites
        const closeSVGpath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        closeSVGpath.setAttribute('fill-rule', 'evenodd')
        closeSVGpath.setAttribute('clip-rule', 'evenodd')
        closeSVGpath.setAttribute('fill', 'white')
        closeSVGpath.setAttribute('d', 'M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976312 12.6834 -0.0976312 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976312 0.683417 -0.0976312 0.292893 0.292893C-0.0976312 0.683417 -0.0976312 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976312 12.6834 -0.0976312 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z');
        closeSVG.append(closeSVGpath) ; closeBtn.append(closeSVG) ; notificationDiv.append(closeBtn)

        // Determine div position/quadrant
        notificationDiv.isTop = !position || !/low|bottom/i.test(position)
        notificationDiv.isRight = !position || !/left/i.test(position)
        notificationDiv.quadrant = (notificationDiv.isTop ? 'top' : 'bottom')
                                 + (notificationDiv.isRight ? 'Right' : 'Left')

        // Create/append/update notification style (if missing or outdated)
        const thisUpdated = 1746996635555 // timestamp of last edit for this file's `notifStyle`
        let notifStyle = document.querySelector('#chatgpt-notif-style') // try to select existing style
        if (!notifStyle || parseInt(notifStyle.getAttribute('last-updated'), 10) < thisUpdated) { // if missing or outdated
            if (!notifStyle) { // outright missing, create/id/attr/append it first
                notifStyle = document.createElement('style') ; notifStyle.id = 'chatgpt-notif-style'
                notifStyle.setAttribute('last-updated', thisUpdated.toString())
                document.head.append(notifStyle)
            }
            notifStyle.textContent = ( // update prev/new style contents
                '.chatgpt-notif {'
                    + 'font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC",'
                        + '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", sans-serif ;'
                    + '.no-mobile-tap-outline { outline: none ; -webkit-tap-highlight-color: transparent }'
                    + 'background-color: black ; padding: 10px 13px 10px 18px ;' // bubble style
                        + 'border-radius: 11px ; border: 1px solid #f5f5f7 ;'
                    + 'opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white ;' // visibility
                    + 'user-select: none ; -webkit-user-select: none ; -moz-user-select: none ; -o-user-select: none ;'
                        + '-ms-user-select: none ;'
                    + `transform: translateX(${ // init off-screen for transition fx
                          !notificationDiv.isRight ? '-' : '' }35px) ;`
                    + ( shadow ? `--shadow: -8px 13px 25px 0 ${ /\b(?:shadow|on)\b/i.test(shadow) ? 'gray' : shadow };
                        box-shadow: var(--shadow) ; -webkit-box-shadow: var(--shadow) ; -moz-box-shadow: var(--shadow)`
                            : '' ) + '}'
                + `.notif-close-btn {
                      cursor: pointer ; float: right ; position: relative ; right: -4px ; margin-left: -3px ;`
                    + 'display: grid }' // top-align for non-OpenAI sites
                + '@keyframes notif-zoom-fade-out { 0% { opacity: 1 ; transform: scale(1) }' // transition out keyframes
                    + '15% { opacity: 0.35 ; transform: rotateX(-27deg) scale(1.05) }'
                    + '45% { opacity: 0.05 ; transform: rotateX(-81deg) }'
                    + '100% { opacity: 0 ; transform: rotateX(-180deg) scale(1.15) }}'
            )
            if (toast) notifStyle.textContent += `
                div.chatgpt-notif {
                    position: absolute ; left: 50% ; right: 21% !important ; text-align: center ;
                    ${ scheme == 'dark' ? 'border: 2px solid white ;' : '' }
                    margin-${ !notificationDiv.isTop ? 'bottom: 105px' : 'top: 42px' };
                    transform: translate(-50%, -50%) scale(0.6) !important }
                div.chatgpt-notif > div.notif-close-btn { top: 18px ; right: 7px ; transform: scale(2) }`
        }

        // Enqueue notification
        let notifyProps = JSON.parse(localStorage.notifyProps)
        notifyProps.queue[notificationDiv.quadrant].push(notificationDiv.id)
        localStorage.notifyProps = JSON.stringify(notifyProps)

        // Position notification (defaults to top-right)
        notificationDiv.style.top = notificationDiv.isTop ? vpYoffset.toString() + 'px' : ''
        notificationDiv.style.bottom = !notificationDiv.isTop ? vpYoffset.toString() + 'px' : ''
        notificationDiv.style.right = notificationDiv.isRight ? vpXoffset.toString() + 'px' : ''
        notificationDiv.style.left = !notificationDiv.isRight ? vpXoffset.toString() + 'px' : ''

        // Re-position old notifications
        const thisQuadrantQueue = notifyProps.queue[notificationDiv.quadrant]
        if (thisQuadrantQueue.length > 1) {
            try { // to move old notifications
                for (const divId of thisQuadrantQueue.slice(0, -1)) { // exclude new div
                    const oldDiv = document.getElementById(divId),
                          offsetProp = oldDiv.style.top ? 'top' : 'bottom', // pick property to change
                          vOffset = +parseInt(oldDiv.style[offsetProp]) +5 + oldDiv.getBoundingClientRect().height
                    oldDiv.style[offsetProp] = `${vOffset}px` // change prop
                }
            } catch (err) { console.warn('Failed to re-position notification:', err) }
        }

        // Show notification
        setTimeout(() => {
            notificationDiv.style.opacity = chatgpt.isDarkMode() ? 0.8 : 0.67 // show msg
            notificationDiv.style.transform = 'translateX(0)' // bring from off-screen
            notificationDiv.style.transition = 'transform 0.15s ease, opacity 0.15s ease'
        }, 10)

        // Init delay before hiding
        const hideDelay = fadeDuration > notifDuration ? 0 // don't delay if fade exceeds notification duration
                        : notifDuration - fadeDuration // otherwise delay for difference

        // Add notification dismissal to timeout schedule + button clicks
        const dismissNotif = () => {
            notificationDiv.style.animation = `notif-zoom-fade-out ${fadeDuration}s ease-out`;
            clearTimeout(dismissFuncTID)
        }
        const dismissFuncTID = setTimeout(dismissNotif, hideDelay * 1000) // maintain visibility for `hideDelay` secs, then dismiss
        closeSVG.onclick = dismissNotif // add to close button clicks

        // Destroy notification
        notificationDiv.onanimationend = () => {
            notificationDiv.remove() // remove from DOM
            notifyProps = JSON.parse(localStorage.notifyProps)
            notifyProps.queue[notificationDiv.quadrant].shift() // + memory
            localStorage.notifyProps = JSON.stringify(notifyProps) // + storage
        }

        return notificationDiv
    },

    obfuscate() { chatgpt.code.obfuscate() },

    printAllFunctions() {

        // Define colors
        const colors = { // element: [light, dark]
            cmdPrompt: ['#ff00ff', '#00ff00'], // pink, green
            objName: ['#0611e9', '#f9ee16'], // blue, yellow
            methodName: ['#005aff', '#ffa500'], // blue, orange
            entryType: ['#467e06', '#b981f9'], // green, purple
            srcMethod: ['#ff0000', '#00ffff'] // red, cyan
        }
        Object.keys(colors).forEach(elem => { // populate dark scheme colors if missing
            colors[elem][1] = colors[elem][1] ||
                '#' + (Number(`0x1${colors[elem][0].replace(/^#/, '')}`) ^ 0xFFFFFF)
                    .toString(16).substring(1).toUpperCase() // convert to hex
        })

        // Create [functionNames]
        const functionNames = []
        for (const prop in this) {
            if (typeof this[prop] == 'function') {
                const chatgptIsParent = !Object.keys(this)
                    .find(obj => Object.keys(this[obj]).includes(this[prop].name))
                const functionParent = chatgptIsParent ? 'chatgpt' : 'other'
                functionNames.push([functionParent, prop])
            } else if (typeof this[prop] == 'object') {
                for (const nestedProp in this[prop]) {
                    if (typeof this[prop][nestedProp] == 'function') {
                        functionNames.push([prop, nestedProp])
        }}}}
        functionNames.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]))

        // Print methods
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches,
              baseFontStyles = 'font-family: monospace ; font-size: larger ; '
        console.log('\n%c🤖 chatgpt.js methods\n', 'font-family: sans-serif ; font-size: xxx-large ; font-weight: bold')
        for (const functionName of functionNames) {
            const isChatGptObjParent = /chatgpt|other/.test(functionName[0]),
                  rootFunction = ( functionName[0] == 'chatgpt' ? this[functionName[1]].name
                    : functionName[0] != 'other' ? functionName[0] + '.' + functionName[1]
                    : (( Object.keys(this).find(obj => Object.keys(this[obj]).includes(this[functionName[1]].name)) + '.' )
                        + this[functionName[1]].name )),
                  isAsync = this[functionName[1]]?.constructor.name == 'AsyncFunction'
            console.log('%c>> %c' + ( isChatGptObjParent ? '' : `${functionName[0]}.%c`) + functionName[1]
                    + ' - https://chatgptjs.org/userguide/' + /(?:.*\.)?(.*)/.exec(rootFunction)[1].toLowerCase() + ( isAsync ? '-async' : '' ) + '\n%c[%c'
                + ((( functionName[0] == 'chatgpt' && functionName[1] == this[functionName[1]].name ) || // parent is chatgpt + names match or
                    !isChatGptObjParent) // parent is chatgpt.obj
                        ? 'Function' : 'Alias of' ) + '%c: %c'
                + rootFunction + '%c]',

                // Styles
                baseFontStyles + 'font-weight: bold ; color:' + colors.cmdPrompt[+isDarkMode],
                baseFontStyles + 'font-weight: bold ;'
                    + 'color:' + colors[isChatGptObjParent ? 'methodName' : 'objName'][+isDarkMode],
                baseFontStyles + 'font-weight: ' + ( isChatGptObjParent ? 'initial' : 'bold' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? 'initial' : colors.methodName[+isDarkMode] ),
                baseFontStyles + 'font-weight: ' + ( isChatGptObjParent ? 'bold' : 'initial' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? colors.entryType[+isDarkMode] : 'initial' ),
                baseFontStyles + 'font-weight: ' + ( isChatGptObjParent ? 'initial' : 'bold' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? 'initial' : colors.entryType[+isDarkMode] ),
                baseFontStyles + ( isChatGptObjParent ? 'font-style: italic' : 'font-weight: initial' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? colors.srcMethod[+isDarkMode] : 'initial' ),
                baseFontStyles + ( isChatGptObjParent ? 'font-weight: initial' : 'font-style: italic' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? 'initial' : colors.srcMethod[+isDarkMode] ),
                isChatGptObjParent ? '' : ( baseFontStyles + 'color: initial ; font-weight: initial' ))
        }
    },

    randomFloat() {
    // * Generates a random, cryptographically secure value between 0 (inclusive) & 1 (exclusive)
        const crypto = window.crypto || window.msCrypto
        return crypto?.getRandomValues(new Uint32Array(1))[0] / 0xFFFFFFFF || Math.random()
    },

    refactor() { chatgpt.code.refactor() },
    regenerate() { chatgpt.response.regenerate() },

    renderHTML(node) {
        const reTags = /<([a-z\d]+)\b([^>]*)>([\s\S]*?)<\/\1>/g,
              reAttrs = /(\S+)=['"]?((?:.(?!['"]?\s+\S+=|[>']))+.)['"]?/g, // eslint-disable-line
              nodeContent = node.childNodes

        // Preserve consecutive spaces + line breaks
        if (!chatgpt.renderHTML.preWrapSet) {
            node.style.whiteSpace = 'pre-wrap' ; chatgpt.renderHTML.preWrapSet = true
            setTimeout(() => chatgpt.renderHTML.preWrapSet = false, 100)
        }

        // Process child nodes
        for (const childNode of nodeContent) {

            // Process text node
            if (childNode.nodeType == Node.TEXT_NODE) {
                const text = childNode.nodeValue,
                      elems = [...text.matchAll(reTags)]

                // Process 1st element to render
                if (elems.length > 0) {
                    const elem = elems[0],
                          [tagContent, tagName, tagAttrs, tagText] = elem.slice(0, 4),
                          tagNode = document.createElement(tagName) ; tagNode.textContent = tagText

                    // Extract/set attributes
                    const attrs = [...tagAttrs.matchAll(reAttrs)]
                    attrs.forEach(attr => {
                        const name = attr[1], value = attr[2].replace(/['"]/g, '')
                        tagNode.setAttribute(name, value)
                    })

                    const renderedNode = chatgpt.renderHTML(tagNode) // render child elems of newly created node

                    // Insert newly rendered node
                    const beforeTextNode = document.createTextNode(text.substring(0, elem.index)),
                          afterTextNode = document.createTextNode(text.substring(elem.index + tagContent.length))

                    // Replace text node with processed nodes
                    node.replaceChild(beforeTextNode, childNode)
                    node.insertBefore(renderedNode, beforeTextNode.nextSibling)
                    node.insertBefore(afterTextNode, renderedNode.nextSibling)
                }

            // Process element nodes recursively
            } else if (childNode.nodeType == Node.ELEMENT_NODE) chatgpt.renderHTML(childNode)
        }

        return node // if assignment used
    },

    async resend() { chatgpt.send(await chatgpt.getChatData('latest', 'msg', 'user', 'latest')) },

    response: {
        continue() { try { chatgpt.getContinueBtn().click() } catch (err) { console.error(err.message) }},

        get() {
            // * Returns response via DOM by index arg if OpenAI chat page is active, otherwise uses API w/ following args:
            // chatToGet = index|title|id of chat to get (defaults to latest if '' unpassed)
            // responseToGet = index of response to get (defaults to latest if '' unpassed)
            // regenResponseToGet = index of regenerated response to get (defaults to latest if '' unpassed)

                return this[`getFrom${ location.href.startsWith('https://chatgpt.com/c/') ? 'DOM' : 'API' }`]
                    .apply(null, arguments)
        },

        getFromAPI(chatToGet, responseToGet) {
        // chatToGet = index|title|id of chat to get (defaults to latest if '' or unpassed)
        // responseToGet = index of response to get (defaults to latest if '' or unpassed)

            chatToGet = chatToGet || 'latest'; responseToGet = responseToGet || 'latest'
            return chatgpt.getChatData(chatToGet, 'msg', 'chatgpt', responseToGet)
        },

        getFromDOM(pos) {
            const responseDivs = document.querySelectorAll('div[data-message-author-role=assistant]'),
                  strPos = pos.toString().toLowerCase()
            let response = ''
            if (!responseDivs.length) return console.error('No conversation found!')
            if (/last|final/.test(strPos)) // get last response
                response = responseDivs[responseDivs.length - 1].textContent
            else { // get nth response
                const nthOfResponse = (

                    // Calculate base number
                    Number.isInteger(pos) ? pos : // do nothing for integers
                    /^\d+/.test(strPos) ? /^\d+/.exec(strPos)[0] : // extract first digits for strings w/ them
                    ( // convert words to integers for digitless strings
                        /^(?:1|one|fir)(?:st)?$/.test(strPos) ? 1
                        : /^(?:2|tw(?:o|en|el(?:ve|f))|seco)(?:nd|t[yi])?(?:e?th)?$/.test(strPos) ? 2
                        : /^(?:3|th(?:ree|ir?))(?:rd|teen|t[yi])?(?:e?th)?$/.test(strPos) ? 3
                        : /^(?:4|fou?r)(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 4
                        : /^(?:5|fi(?:ve|f))(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 5
                        : /^(?:6|six)(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 6
                        : /^(?:7|seven)(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 7
                        : /^(?:8|eight?)(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 8
                        : /^(?:9|nine?)(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 9
                        : /^(?:10|ten)(?:th)?$/.test(strPos) ? 10 : 1 )

                    // Transform base number if suffixed
                    * ( /(?:ty|ieth)$/.test(strPos) ? 10 : 1 ) // x 10 if -ty/ieth
                    + ( /teen(?:th)?$/.test(strPos) ? 10 : 0 ) // + 10 if -teen/teenth

                )
                response = responseDivs[nthOfResponse - 1].textContent
            }
            response = response.replace(/^ChatGPT(?:ChatGPT)?/, '') // strip sender name
            return response
        },

        getLast() { return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest') },
        regenerate() { try { chatgpt.getRegenerateBtn().click() } catch (err) { console.error(err.message) }},
        stopGenerating() { try { chatgpt.getStopBtn().click() } catch (err) { console.error(err.message) }}
    },

    reviewCode() { chatgpt.code.review() },
    scrollToBottom() { try { chatgpt.getScrollBtn().click() } catch (err) { console.error(err.message) }},

    send(msg, method='') {
        for (let i = 0 ; i < arguments.length ; i++) if (typeof arguments[i] != 'string')
            return console.error(`Argument ${ i + 1 } must be a string!`)
        const textArea = chatgpt.getChatBox()
        if (!textArea) return console.error('Chatbar element not found!')
        const msgP = document.createElement('p'); msgP.textContent = msg
        textArea.querySelector('p').replaceWith(msgP)
        textArea.dispatchEvent(new Event('input', { bubbles: true })) // enable send button
        setTimeout(function delaySend() {
            const sendBtn = chatgpt.getSendButton()
            if (!sendBtn?.hasAttribute('disabled')) { // send msg
                method.toLowerCase() == 'click' || chatgpt.browser.isMobile() ? sendBtn.click()
                    : textArea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
            } else setTimeout(delaySend, 222)
        }, 222)
    },

    sendInNewChat(msg) {
        if (typeof msg != 'string') return console.error('Message must be a string!')
        try { chatgpt.getNewChatBtn().click() } catch (err) { return console.error(err.message) }
        setTimeout(() => chatgpt.send(msg), 500)
    },

    settings: {
        scheme: {
            isDark() { return document.documentElement.classList.contains('dark') },
            isLight() { return document.documentElement.classList.contains('light') },
            set(value) {

                // Validate value
                const validValues = ['dark', 'light', 'system']
                if (!value) return console.error('Please specify a scheme value!')
                if (!validValues.includes(value))
                    return console.error(`Invalid scheme value. Valid values are [${validValues}]`)

                // Determine scheme to set
                let schemeToSet = value
                if (value == 'system')
                    schemeToSet = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                localStorage.setItem('theme', value)
                console.info(`Scheme set to ${value.toUpperCase()}.`)

                // Toggle scheme if necessary
                if (!document.documentElement.classList.contains(schemeToSet)) this.toggle()
            },
            toggle() {
                const [schemeToRemove, schemeToAdd] = this.isDark() ? ['dark', 'light'] : ['light', 'dark']
                document.documentElement.classList.replace(schemeToRemove, schemeToAdd)
                document.documentElement.style.colorScheme = schemeToAdd
                localStorage.setItem('theme', schemeToAdd)
            }
        }
    },

    async sentiment(text, entity) {
        for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] != 'string')
            return console.error(`Argument ${ i + 1 } must be a string.`)
        chatgpt.send('What is the sentiment of the following text'
            + ( entity ? ` towards the entity ${entity},` : '')
            + ' from strongly negative to strongly positive?\n\n' + text )
        console.info('Analyzing sentiment...')
        await chatgpt.isIdle()
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest')
    },

    setScheme(value) { chatgpt.settings.scheme.set(value) },

    shareChat(chatToGet, method = 'clipboard') {
    // chatToGet = index|title|id of chat to get (defaults to latest if '' or unpassed)
    // method = [ 'alert'|'clipboard' ] (defaults to 'clipboard' if '' or unpassed)

        const validMethods = ['alert', 'notify', 'notification', 'clipboard', 'copy']
        if (!validMethods.includes(method)) return console.error(
            `Invalid method '${method}' passed. Valid methods are [${validMethods}].`)

        const getChatNode = token => {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                chatgpt.getChatData(chatToGet).then(chat => {
                    xhr.open('GET', `${chatgpt.endpoints.openAI.chat}/${chat.id}`, true)
                    xhr.setRequestHeader('Content-Type', 'application/json')
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                    xhr.onload = () => {
                        if (xhr.status != 200)
                            return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve chat node.')
                        return resolve(JSON.parse(xhr.responseText).current_node) // chat messages until now
                    }
                    xhr.send()
        })})}

        const makeChatToShare = (token, node) => {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                chatgpt.getChatData(chatToGet).then(chat => {
                    xhr.open('POST', chatgpt.endpoints.openAI.share_create, true)
                    xhr.setRequestHeader('Content-Type', 'application/json')
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                    xhr.onload = () => {
                        if (xhr.status != 200)
                            return reject('🤖 chatgpt.js >> Request failed. Cannot initialize share chat.')
                        return resolve(JSON.parse(xhr.responseText)) // return untouched data
                    }
                    xhr.send(JSON.stringify({ // request body
                        current_node_id: node, // by getChatNode
                        conversation_id: chat.id, // current chat id
                        is_anonymous: true // show user name in the conversation or not
                    }))
        })})}

        const confirmShareChat = (token, data) => {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.open('PATCH', `${chatgpt.endpoints.openAI.share}/${data.share_id}`, true)
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                xhr.onload = () => {
                    if (xhr.status != 200)
                        return reject('🤖 chatgpt.js >> Request failed. Cannot share chat.')
                    console.info(`Chat shared at '${data.share_url}'`)
                    return resolve() // the response has nothing useful
                }
                xhr.send(JSON.stringify({ // request body
                    share_id: data.share_id,
                    highlighted_message_id: data.highlighted_message_id,
                    title: data.title,
                    is_public: true, // must be true or it'll cause a 404 error
                    is_visible: data.is_visible,
                    is_anonymous: data.is_anonymous
                }))
        })}

        return new Promise(resolve => {
            chatgpt.getAccessToken().then(token => { // get access token
                getChatNode(token).then(node => { // get chat node
                    makeChatToShare(token, node).then(data => {
                        confirmShareChat(token, data).then(() => {
                            if (['copy', 'clipboard'].includes(method)) navigator.clipboard.writeText(data.share_url)
                            else chatgpt.alert('🚀 Share link created!',
                                `"${data.title}" is available at: <a target="blank" rel="noopener" href="${
                                    data.share_url}">${data.share_url}</a>`,
                                [ function openLink() { window.open(data.share_url, '_blank', 'noopener') },
                                    function copyLink() { navigator.clipboard.writeText(data.share_url) }])
                            resolve(data.share_url)
        })})})})})
    },

    showFooter() { chatgpt.footer.show() },
    showHeader() { chatgpt.header.show() },

    sidebar: {
        elems: [], observer: {},

        activateObserver() {

            // Stop the previous observer to preserve resources
            if (this.observer instanceof MutationObserver) this.observer.disconnect()

            if (!this.elems.length) return console.error('🤖 chatgpt.js >> No elems to append!')

            // Grab CSS from original website elems
            let cssClasses
            for (let navLink of document.querySelectorAll(chatgpt.selectors.links.sidebarItem))
                if (/.*chat/.exec(navLink.text)[0]) {
                    cssClasses = navLink.classList
                    navLink.parentNode.style.margin = '2px 0' // add v-margins for consistency across all inserted btns
                    break
                }

            // Apply CSS to make the added elems look like they belong to the website
            this.elems.forEach(elem => {
                elem.setAttribute('class', cssClasses)
                elem.style.maxHeight = elem.style.minHeight = '44px' // fix the height of the element
                elem.style.margin = '2px 0'
            })

            // Create MutationObserver instance
            const navBar = document.querySelector(chatgpt.selectors.chatHistory)
            if (!navBar) return console.error('Sidebar element not found!')
            this.observer = new MutationObserver(mutations =>
                mutations.forEach(mutation => {
                    if ((mutation.type == 'childList' && mutation.addedNodes.length) ||
                        (mutation.type == 'attributes' && mutation.attributeName == 'data-chatgptjs')) // check for trigger
                            this.elems.forEach(elem => { // try to insert each element...
                                if (!navBar.contains(elem)) // ...if it's not already present...
                                    try { navBar.querySelector('a').parentNode.before(elem) } // ...at top of sidebar
                                    catch (err) { console.error(err) }
                            })
                })
            )

            this.observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true })
        },

        append(elem, attrs = {}) {
        // element = 'button' | 'dropdown' REQUIRED (no default value)
        // attrs = { ... }
        // attrs for 'button': 'icon' = src string, 'label' = string, 'onclick' = function
        // attrs for 'dropdown': 'items' = [ { text: string, value: string }, ... ] array of objects
        // where 'text' is the displayed text of the option and 'value' is the value of the option
            const validElems = ['button', 'dropdown']
            if (!elem || typeof elem != 'string') // Element not passed or invalid type
                return console.error('🤖 chatgpt.js >> Please supply a valid string element name!')
            elem = elem.toLowerCase()
            if (!validElems.includes(elem)) // Element not in list
                return console.error(`🤖 chatgpt.js >> Invalid element! Valid elems are [${validElems}]`)

            const newElem = document.createElement(elem == 'dropdown' ? 'select' : elem)
            newElem.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now() // Add random id to the element

            if (elem == 'button') {
                newElem.textContent = attrs?.label && typeof attrs.label == 'string'
                    ? attrs.label
                    : 'chatgpt.js button'
                const icon = document.createElement('img')
                icon.src = attrs?.icon && typeof attrs.icon == 'string' // Can also be base64 encoded image string
                    ? attrs.icon // Add icon to button element if given, else default one
                    : `${chatgpt.endpoints.assets}/starters/chrome/extension/icons/icon128.png`
                icon.width = 18
                newElem.firstChild.before(icon)
                newElem.onclick = attrs?.onclick && typeof attrs.onclick == 'function' ? attrs.onclick : function(){}
            }

            else if (elem == 'dropdown') {
                if (!attrs?.items || // There no are options to add
                    !Array.isArray(attrs.items) || // It's not an array
                    !attrs.items.length) // The array is empty
                        attrs.items = [{ text: '🤖 chatgpt.js option', value: 'chatgpt.js option value' }] // Set default dropdown entry

                if (!attrs.items.every(el => typeof el == 'object')) // The entries of the array are not objects
                    return console.error('\'items\' must be an array of objects!')

                attrs.items.forEach(item => {
                    const optionElement = document.createElement('option')
                    optionElement.textContent = item?.text
                    optionElement.value = item?.value
                    newElem.add(optionElement)
                })
            }


            // Fix for blank background on dropdown elems
            if (elem == 'dropdown') newElem.style.backgroundColor = 'var(--gray-900, rgb(32,33,35))'

            this.elems.push(newElem)
            this.activateObserver()
            document.body.setAttribute('data-chatgptjs', 'observer-trigger') // add attribute to trigger the observer

            return newElem.id // Return the element id
        },

        exists() { return !!chatgpt.getNewChatLink(); },
        hide() { this.isOn() ? this.toggle() : console.info('Sidebar already hidden!') },
        show() { this.isOff() ? this.toggle() : console.info('Sidebar already shown!') },
        isOff() { return !this.isOn() },

        isOn() {
            const sidebar = (() => {
                return chatgpt.sidebar.exists() ? document.querySelector(chatgpt.selectors.sidebar) : null })()
            if (!sidebar) { return console.error('Sidebar element not found!') || false }
            else return chatgpt.browser.isMobile() ?
                document.documentElement.style.overflow == 'hidden'
              : sidebar.style.visibility != 'hidden' && sidebar.style.width != '0px'
        },

        toggle() {
            const sidebarToggle = document.querySelector(chatgpt.selectors.btns.sidebar)
            if (!sidebarToggle) console.error('Sidebar toggle not found!')
            sidebarToggle.click()
        },

        async isLoaded(timeout = 5000) {
            await chatgpt.isLoaded()
            const timeoutPromise = new Promise(resolve => setTimeout(() => resolve(false), timeout))
            const isLoadedPromise = new Promise(resolve => {
                if (chatgpt.getNewChatLink()) resolve(true)
                else new MutationObserver((_, obs) => {
                    if (chatgpt.getNewChatLink()) { obs.disconnect() ; resolve(true) }
                }).observe(document.documentElement, { childList: true, subtree: true })
            })
            return await Promise.race([isLoadedPromise, timeoutPromise])
        }
    },

    startNewChat() { try { chatgpt.getNewChatBtn().click() } catch (err) { console.error(err.message) }},
    stop() { chatgpt.response.stopGenerating(); },

    async suggest(ideaType, details) {
        if (!ideaType) return console.error('ideaType (1st argument) not supplied'
            + `(e.g. 'gifts', 'names', 'recipes', etc.)`)
        for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] != 'string')
            return console.error(`Argument ${ i + 1 } must be a string.`)
        chatgpt.send('Suggest some names. ' + ( details || '' ))
        console.info(`Creating ${ideaType}...`)
        await chatgpt.isIdle()
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest')
    },

    speak(msg, { voice = 2, pitch = 2, speed = 1.1, onend } = {} ) {
    // Example call: chatgpt.speak(await chatgpt.getLastResponse(), { voice: 1, pitch: 2, speed: 3 })
    // - voice = index of voices available on user device
    // - pitch = float for pitch of speech from 0 to 2
    // - speed = float for rate of speech from 0.1 to 10
    // - onend = callback function invoked when speech finishes playing

        // Validate args
        if (typeof msg != 'string') return console.error('Message must be a string!')
        const validOptionKeys = ['voice', 'pitch', 'speed', 'onend']
        for (const key in arguments[1]) {
            if (!validOptionKeys.includes(key))
                return console.error(`Invalid option '${key}'. Valid keys are: ${validOptionKeys}`)
            const val = arguments[1][key]
            if (key != 'onend' && typeof val != 'number' && !/^\d+$/.test(val))
                return console.error(`Invalid ${key} value '${val}'. Must be a number!`)
            else if (key == 'onend' && typeof val != 'function')
                return console.error(`Invalid ${key} value. Must be a function!`)
        }

        try { // to speak msg
            const utterance = new SpeechSynthesisUtterance(), voices = speechSynthesis.getVoices()
            Object.assign(utterance, { text: msg, voice: voices[voice], pitch: pitch, speed: speed, onend: onend })
            speechSynthesis.speak(utterance)
        } catch (err) { console.error(err) }
    },

    async summarize(text) {
        if (!text) return console.error('Text (1st) argument not supplied. Pass some text!')
        if (typeof text != 'string') return console.error('Text argument must be a string!')
        chatgpt.send('Summarize the following text:\n\n' + text)
        console.info('Summarizing text...')
        await chatgpt.isIdle()
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest')
    },

    toggleScheme() { chatgpt.settings.scheme.toggle(); },

    async translate(text, outputLang) {
        if (!text) return console.error('Text (1st) argument not supplied. Pass some text!')
        if (!outputLang) return console.error('outputLang (2nd) argument not supplied. Pass a language!')
        for (let i = 0 ; i < arguments.length ; i++) if (typeof arguments[i] != 'string')
            return console.error(`Argument ${ i + 1 } must be a string!`)
        chatgpt.send(`Translate the following text to ${outputLang}. Only reply with the translation.\n\n${text}`)
        console.info('Translating text...')
        await chatgpt.isIdle()
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest')
    },

    unminify() { chatgpt.code.unminify() },

    uuidv4() {
        try {
            // use native secure uuid generator when available
            return crypto.randomUUID()
        } catch(_e) {
            let d = new Date().getTime() // get current timestamp in ms (to ensure UUID uniqueness)
            const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                const r = ( // generate random nibble
                    ( d + (window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1))*16)%16 | 0 )
                d = Math.floor(d/16) // correspond each UUID digit to unique 4-bit chunks of timestamp
                return ( c == 'x' ? r : (r&0x3|0x8) ).toString(16); // generate random hexadecimal digit
            })
            return uuid
        }
    },

    writeCode() { chatgpt.code.write() }
}

chatgpt.scheme = { ...chatgpt.settings.scheme } // copy `chatgpt.settings.scheme` methods into `chatgpt.scheme`

// Create chatgpt.[actions]Button(identifier) functions
const cjsBtnActions = ['click', 'get'], cjsTargetTypes = [ 'button', 'link', 'div', 'response' ]
for (const btnAction of cjsBtnActions) {
    chatgpt[`${btnAction}Button`] = function handleButton(btnIdentifier) {
        const btn = /^[.#]/.test(btnIdentifier) ? document.querySelector(btnIdentifier)
          : /send/i.test(btnIdentifier) ? document.querySelector(chatgpt.selectors.btns.send)
          : /scroll/i.test(btnIdentifier) ? document.querySelector(chatgpt.selectors.btns.scroll)
          : (function() { // get via text content
                for (const btn of document.querySelectorAll('button'))
                    if (btn.textContent.toLowerCase().includes(btnIdentifier.toLowerCase()))
                        return btn
                for (const navLink of document.querySelectorAll(chatgpt.selectors.links.sidebarItem))
                    if (navLink.textContent.toLowerCase().includes(btnIdentifier.toLowerCase()))
                        return navLink
            })()
        if (btnAction == 'click') btn.click() ; else return btn
    }
}

// Create ALIAS functions
const cjsFuncAliases = [
    ['actAs', 'act', 'become', 'persona', 'premadePrompt', 'preMadePrompt', 'prePrompt', 'rolePlay', 'rp'],
    ['activateAutoRefresh', 'activateAutoRefresher', 'activateRefresher', 'activateSessionRefresher',
        'autoRefresh', 'autoRefresher', 'autoRefreshSession', 'refresher', 'sessionRefresher'],
    ['continue', 'continueChat', 'continueGenerating', 'continueResponse'],
    ['deactivateAutoRefresh', 'deactivateAutoRefresher', 'deactivateRefresher', 'deactivateSessionRefresher'],
    ['detectLanguage', 'getLanguage'],
    ['executeCode', 'codeExecute'],
    ['exists', 'isAvailable', 'isExistent', 'isPresent'],
    ['exportChat', 'chatExport', 'export'],
    ['getFooterDiv', 'getFooter'],
    ['getHeaderDiv', 'getHeader'],
    ['getLastPrompt', 'getLastQuery', 'getMyLastMessage', 'getMyLastQuery'],
    ['getContinueButton', 'getContinueGeneratingButton'],
    ['getScrollToBottomButton', 'getScrollButton'],
    ['getStopButton', 'getStopGeneratingButton'],
    ['getTextarea', 'getTextArea', 'getChatbar', 'getChatBar', 'getChatbox', 'getChatBox'],
    ['getVoiceButton', 'getVoiceModeButton'],
    ['isFullScreen', 'isFullscreen'],
    ['isTempChat', 'isIncognito', 'isIncognitoMode', 'isTempChatMode'],
    ['minify', 'codeMinify', 'minifyCode'],
    ['new', 'newChat', 'startNewChat'],
    ['obfuscate', 'codeObfuscate', 'obfuscateCode'],
    ['printAllFunctions', 'showAllFunctions'],
    ['refactor', 'codeRefactor', 'refactorCode'],
    ['refreshReply', 'regenerate', 'regenerateReply'],
    ['refreshSession', 'sessionRefresh'],
    ['renderHTML', 'renderHtml', 'renderLinks', 'renderTags'],
    ['reviewCode', 'codeReview'],
    ['send', 'sendChat', 'sendMessage'],
    ['sendInNewChat', 'sendNewChat'],
    ['sentiment', 'analyzeSentiment', 'sentimentAnalysis'],
    ['startNewChat', 'new', 'newChat'],
    ['stop', 'stopChat', 'stopGenerating', 'stopResponse'],
    ['suggest', 'suggestion', 'recommend'],
    ['toggleAutoRefresh', 'toggleAutoRefresher', 'toggleRefresher', 'toggleSessionRefresher'],
    ['toggleScheme', 'toggleMode'],
    ['translate', 'translation', 'translator'],
    ['unminify', 'unminifyCode', 'codeUnminify'],
    ['writeCode', 'codeWrite']
]
const cjsFuncSynonyms = [
    ['account', 'acct'],
    ['activate', 'turnOn'],
    ['analyze', 'check', 'evaluate', 'review'],
    ['ask', 'send', 'submit'],
    ['button', 'btn'],
    ['continue', 'resume'],
    ['chats', 'history'],
    ['chat', 'conversation', 'convo'],
    ['clear', 'delete', 'remove'],
    ['data', 'details'],
    ['deactivate', 'deActivate', 'turnOff'],
    ['execute', 'interpret', 'interpreter', 'run'],
    ['firefox', 'ff'],
    ['generating', 'generation'],
    ['login', 'logIn', 'logOn', 'signIn', 'signOn'],
    ['logout', 'logOut', 'logOff', 'signOff', 'signOut'],
    ['message', 'msg'],
    ['minify', 'uglify'],
    ['refactor', 'rewrite'],
    ['regenerate', 'regen'],
    ['render', 'parse'],
    ['reply', 'response'],
    ['sentiment', 'attitude', 'emotion', 'feeling', 'opinion', 'perception'],
    ['speak', 'play', 'say', 'speech', 'talk', 'tts'],
    ['summarize', 'tldr'],
    ['temp', 'temporary'],
    ['typing', 'generating'],
    ['unminify', 'beautify', 'prettify', 'prettyPrint']
];
(function createCJSaliasFuncs(obj = chatgpt) {
    for (const prop in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) continue // skip inherited props
        if (typeof obj[prop] == 'object') createCJSaliasFuncs(obj[prop]) // recurse thru objs to find deeper functions
    }
    let aliasFuncCreated
    do {
        aliasFuncCreated = false
        for (const prop in obj) {
            if (!Object.prototype.hasOwnProperty.call(obj, prop)) continue // skip inherited props
            if (typeof obj[prop] == 'function') {
                obj[prop.toLowerCase()] = obj[prop]  // create lowercase variant
                cjsFuncAliases.forEach(aliasArr => { // create alias function per alias to use
                    if (!aliasArr.includes(prop)) return
                    aliasArr.forEach(alias => { if (!obj[alias]) {
                        obj[alias] = obj[alias.toLowerCase()] = obj[prop] ; aliasFuncCreated = true }})
                })
                const funcWords = prop.split(/(?=[A-Z])/) // split function name into constituent words
                funcWords.forEach(funcWord => { // create alias function per function word per synonym
                    const synonymsToUse = cjsFuncSynonyms
                        .filter(arr => arr.includes(funcWord.toLowerCase())) // filter in relevant synonym sub-arrays
                        .flat().filter(synonym => synonym != funcWord.toLowerCase()) // filter out matching word
                    synonymsToUse.forEach(synonym => { // create alias function per synonym to use
                        const newFuncName = toCamelCase(funcWords.map(word => word == funcWord ? synonym : word))
                        if (!obj[newFuncName]) {
                            obj[newFuncName] = obj[newFuncName.toLowerCase()] = obj[prop] ; aliasFuncCreated = true }
                    })
                })
            }
        }
    } while (aliasFuncCreated) // loop over new functions to encompass all variations
})()

// Define HELPER functions

function toCamelCase(words) {
    return words.map((word, idx) => idx == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('') }

// Prefix console logs w/ '🤖 chatgpt.js >> '
const consolePrefix = '🤖 chatgpt.js >> ', ogError = console.error, ogInfo = console.info
console.error = (...args) => {
    if (!args[0].startsWith(consolePrefix)) ogError(consolePrefix + args[0], ...args.slice(1))
    else ogError(...args)
}
console.info = (msg) => {
    if (!msg.startsWith(consolePrefix)) ogInfo(consolePrefix + msg);
    else ogInfo(msg)
}

// Export chatgpt object
try { window.chatgpt = chatgpt } catch (err) {} // for Greasemonkey
try { module.exports = chatgpt } catch (err) {} // for CommonJS
