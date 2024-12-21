// Requires lib/chatgpt.js + lib/dom.js

window.modals = {
    stack: [], // of types of undismissed modals
    get class() { return `${this.dependencies.app.cssPrefix}-modal` },

    dependencies: {
        import(dependencies) { // { app, env }
            for (const name in dependencies) this[name] = dependencies[name] }
    },

    alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        const alertID = chatgpt.alert(title, msg, btns, checkbox, width),
              alert = document.getElementById(alertID).firstChild
        this.init(alert) // add class
        return alert
    },

    open(modalType) {
        this.stack.unshift(modalType) // add to stack
        const modal = this[modalType]() // show modal
        modal.classList.add('chatgpt-infinity-modal')
        modal.onmousedown = this.dragHandlers.mousedown
        dom.fillStarryBG(modal) // fill BG w/ rising stars
        this.observeRemoval(modal, modalType) // to maintain stack for proper nav
    },

    init(modal) {
        if (!this.styles) this.stylize() // to init/append stylesheet
        modal.classList.add(this.class) ; modal.parentNode.classList.add(`${this.class}-bg`) // add classes
    },

    stylize() {
        if (!this.styles) {
            this.styles = document.createElement('style') ; this.styles.id = `${this.class}-styles`
            document.head.append(this.styles)
        }
        this.styles.innerText = (
            `.${this.class} {` // modals
              + 'font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,'
                  + 'Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif ;'
              + 'padding: 20px 25px 24px 25px !important ; font-size: 20px ;'
              + `color: ${ this.dependencies.env.scheme == 'dark' ? 'white' : 'black' } !important ;`
              + `background-image: linear-gradient(180deg, ${
                     this.dependencies.env.scheme == 'dark' ? '#99a8a6 -200px, black 200px'
                                                            : '#b6ebff -296px, white 171px' }) }`
          + `.${this.class} [class*=modal-close-btn] {`
              + 'position: absolute !important ; float: right ; top: 14px !important ; right: 16px !important ;'
              + 'cursor: pointer ; width: 33px ; height: 33px ; border-radius: 20px }'
          + `.${this.class} [class*=modal-close-btn] svg { height: 10px }`
          + `.${this.class} [class*=modal-close-btn] path {`
              + `${ this.dependencies.env.scheme == 'dark' ? 'stroke: white ; fill: white'
                                                           : 'stroke: #9f9f9f ; fill: #9f9f9f' }}`
          + ( this.dependencies.env.scheme == 'dark' ?  // invert dark mode hover paths
                `.${this.class} [class*=modal-close-btn]:hover path { stroke: black ; fill: black }` : '' )
          + `.${this.class} [class*=modal-close-btn]:hover { background-color: #f2f2f2 }` // hover underlay
          + `.${this.class} [class*=modal-close-btn] svg { margin: 11.5px }` // center SVG for hover underlay
          + `.${this.class} a { color: #${ this.dependencies.env.scheme == 'dark' ? '00cfff' : '1e9ebb' } !important }`
          + `.${this.class} h2 { font-weight: bold }`
          + `.${this.class} button {`
              + 'font-size: 14px ; text-transform: uppercase ;' // shrink/uppercase labels
              + 'border-radius: 0 !important ;' // square borders
              + 'transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out ;' // smoothen hover fx
              + 'cursor: pointer !important ;' // add finger cursor
              + `border: 1px solid ${ this.dependencies.env.scheme == 'dark' ? 'white' : 'black' } !important ;`
              + 'padding: 8px !important ; min-width: 102px }' // resize
          + `.${this.class} button:hover {` // add zoom, re-scheme
              + 'transform: scale(1.055) ; color: black !important ;'
              + `background-color: #${ this.dependencies.env.scheme == 'dark' ? '00cfff' : '9cdaff' } !important }`
          + ( !this.dependencies.env.browser.isMobile ?
                `.${this.class} .modal-buttons { margin-left: -13px !important }` : '' )
          + `.about-em { color: ${ this.dependencies.env.scheme == 'dark' ? 'white' : 'green' } !important }`
        )
    },

    observeRemoval(modal, modalType) { // to maintain stack for proper nav
        const modalBG = modal.parentNode
        new MutationObserver(([mutation], obs) => {
            mutation.removedNodes.forEach(removedNode => { if (removedNode == modalBG) {
                if (this.stack[0] == modalType) { // new modal not launched, implement nav back logic
                    this.stack.shift() // remove this modal type from stack
                    const prevModalType = this.stack[0]
                    if (prevModalType) { // open it
                        this.stack.shift() // remove type from stack since re-added on open
                        this.open(prevModalType)
                    }
                }
                obs.disconnect()
            }})
        }).observe(modalBG.parentNode, { childList: true, subtree: true })
    },

    dragHandlers: {
        mousedown(event) { // find modal, attach listeners, init XY offsets
            if (event.button != 0) return // prevent non-left-click drag
            if (getComputedStyle(event.target).cursor == 'pointer') return // prevent drag on interactive elems
            modals.dragHandlers.draggableElem = event.currentTarget
            modals.dragHandlers.draggableElem.style.cursor = 'grabbing'
            event.preventDefault(); // prevent sub-elems like icons being draggable
            ['mousemove', 'mouseup'].forEach(event => document.addEventListener(event, modals.dragHandlers[event]))
            const draggableElemRect = modals.dragHandlers.draggableElem.getBoundingClientRect()
            modals.dragHandlers.offsetX = event.clientX - draggableElemRect.left +21
            modals.dragHandlers.offsetY = event.clientY - draggableElemRect.top +12
        },

        mousemove(event) { // drag modal
            if (modals.dragHandlers.draggableElem) {
                const newX = event.clientX - modals.dragHandlers.offsetX,
                      newY = event.clientY - modals.dragHandlers.offsetY
                Object.assign(modals.dragHandlers.draggableElem.style, { left: `${newX}px`, top: `${newY}px` })
            }
        },

        mouseup() { // remove listeners, reset modals.dragHandlers.draggableElem
            modals.dragHandlers.draggableElem.style.cursor = 'inherit';
            ['mousemove', 'mouseup'].forEach(event =>
                document.removeEventListener(event, modals.dragHandlers[event]))
            modals.dragHandlers.draggableElem = null
        }
    },

    about() {

        // Show modal
        const aboutModal = this.alert(
            `${this.dependencies.app.symbol} ${chrome.runtime.getManifest().name}`, // title
            `🏷️ Version: <span class="about-em">${this.dependencies.app.version}</span>\n` // msg
                + '⚡ Powered by: '
                    + `<a href="${this.dependencies.app.urls.chatgptJS}" target="_blank" rel="noopener">chatgpt.js</a>\n`
                + '📜 Open source code: '
                    + `<a href="${this.dependencies.app.urls.gitHub}" target="_blank" rel="nopener">`
                        + this.dependencies.app.urls.gitHub + '</a>',
            [ function getSupport(){}, function rateUs(){}, function moreAiExtensions(){} ], // button labels
            '', 656 // modal width
        )

        // Format text
        aboutModal.querySelector('h2').style.cssText = (
            'text-align: center ; font-size: 51px ; line-height: 46px ; padding: 15px 0' )
        aboutModal.querySelector('p').style.cssText = (
            'text-align: center ; overflow-wrap: anywhere ;'
          + `margin: ${ this.dependencies.env.browser.isPortrait ? '6px 0 -16px' : '3px 0 0' }` )

        // Hack buttons
        aboutModal.querySelector('.modal-buttons').style.justifyContent = 'center'
        aboutModal.querySelectorAll('button').forEach(btn => {
            btn.style.cssText = 'height: 55px ; min-width: 136px ; text-align: center'

            // Replace buttons w/ clones that don't dismiss modal
            const btnClone = btn.cloneNode(true)
            btn.parentNode.replaceChild(btnClone, btn) ; btn = btnClone
            btn.onclick = () => this.safeWinOpen(
                btn.textContent == 'Get Support' ? `${modals.dependencies.app.urls.gitHub}/issues`
              : btn.textContent == 'Rate Us' ? `${modals.dependencies.app.urls.gitHub}/discussions`
              : modals.dependencies.app.urls.relatedExtensions
            )

            // Prepend emoji
            if (/support/i.test(btn.textContent))
                btn.textContent = '🧠 ' + btn.textContent
            else if (/rate/i.test(btn.textContent))
                btn.textContent = '⭐ ' + btn.textContent
            else if (/extensions/i.test(btn.textContent))
                btn.textContent = '🧠 ' + btn.textContent

            // Hide Dismiss button
            else btn.style.display = 'none'
        })

        return aboutModal
    },

    safeWinOpen(url) { open(url, '_blank', 'noopener') } // to prevent backdoor vulnerabilities
};
