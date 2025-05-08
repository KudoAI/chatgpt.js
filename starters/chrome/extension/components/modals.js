// Requires lib/<chatgpt|dom>.js + app + env

window.modals = {

    stack: [], // of types of undismissed modals
    get class() { return `${app.cssPrefix}-modal` },

    about() {
        const { ui: { scheme }, browser: { isPortrait }} = env

        // Show modal
        const labelStyles = 'text-transform: uppercase ; font-size: 17px ; font-weight: bold ;'
                          + `color: ${ scheme == 'dark' ? 'white' : '#494141' }`
        const aboutModal = this.alert(
            `${app.symbol} ${chrome.runtime.getManifest().name}`, // title
            `<span style="${labelStyles}">🧠 Author:</span> `
            + `<a href="${app.author.url}">${app.author.name}</a> `
                    + `& <a href="${app.urls.contributors}">contributors</a>\n`
            + `<span style="${labelStyles}">🏷️ Version:</span> `
                    + `<span class="about-em">${app.version}</span>\n`
            + `<span style="${labelStyles}">📜 Open source code:</span> `
                + `<a href="${app.urls.gitHub}" target="_blank" rel="nopener">`
                    + app.urls.gitHub + '</a>\n'
            + `<span style="${labelStyles}">⚡ Powered by:</span> `
                + `<a href="${app.urls.chatgptJS}" target="_blank" rel="noopener">chatgpt.js</a>`,
            [ function getSupport(){}, function rateUs(){}, function moreAiExtensions(){} ], // button labels
            '', 656 // modal width
        )

        // Format text
        aboutModal.querySelector('h2').style.cssText = (
            'text-align: center ; font-size: 51px ; line-height: 46px ; padding: 15px 0' )
        aboutModal.querySelector('p').style.cssText = (
            'text-align: center ; overflow-wrap: anywhere ;'
          + `margin: ${ isPortrait ? '6px 0 -16px' : '3px 0 0' }` )

        // Hack buttons
        aboutModal.querySelector('.modal-buttons').style.justifyContent = 'center'
        aboutModal.querySelectorAll('button').forEach(btn => {
            btn.style.cssText = 'height: 55px ; min-width: 136px ; text-align: center'

            // Replace buttons w/ clones that don't dismiss modal
            btn.replaceWith(btn = btn.cloneNode(true))
            btn.onclick = () => this.safeWinOpen(
                btn.textContent == 'Get Support' ? `${app.urls.gitHub}/issues`
              : btn.textContent == 'Rate Us' ? `${app.urls.gitHub}/discussions`
              : app.urls.relatedExtensions
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

    alert(title = '', msg = '', btns = '', checkbox = '', width = '') { // generic one from chatgpt.alert()
        const alertID = chatgpt.alert(title, msg, btns, checkbox, width),
              alert = document.getElementById(alertID).firstChild
        this.init(alert) // add classes + rising particles bg
        return alert
    },

    init(modal) {
        if (!modal) return // to support non-div this.open()s
        if (!this.styles) this.stylize() // to init/append stylesheet
        modal.classList.add(this.class) ; modal.parentNode.classList.add(`${this.class}-bg`)
        dom.addRisingParticles(modal)
    },

    observeRemoval(modal, modalType) { // to maintain stack for proper nav
        const modalBG = modal.parentNode
        new MutationObserver(([mutation], obs) => {
            mutation.removedNodes.forEach(removedNode => { if (removedNode == modalBG) {
                if (this.stack[0] == modalType) { // new modal not launched, implement nav back logic
                    this.stack.shift() // remove this modal type from stack 1st
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

    open(modalType) {
        const modal = this[modalType]() // show modal
        this.stack.unshift(modalType) // add to stack
        this.init(modal) // add classes + rising particles bg
        this.observeRemoval(modal, modalType) // to maintain stack for proper nav
    },

    safeWinOpen(url) { open(url, '_blank', 'noopener') }, // to prevent backdoor vulnerabilities

    stylize() {
        const { ui: { scheme }, browser: { isMobile }} = env
        if (!this.styles) document.head.append(this.styles = dom.create.elem('style'))
        this.styles.innerText = (
            `.${this.class} {` // modals
              + 'user-select: none ; -webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ;'
              + 'font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,'
                  + 'Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif ;'
              + 'padding: 20px 25px 24px 25px !important ; font-size: 20px ;'
              + `color: ${ scheme == 'dark' ? 'white' : 'black' } !important ;`
              + `background-image: linear-gradient(180deg, ${
                     scheme == 'dark' ? '#99a8a6 -200px, black 200px' : '#b6ebff -296px, white 171px' }) }`
          + `.${this.class} [class*=modal-close-btn] {`
              + 'position: absolute !important ; float: right ; top: 14px !important ; right: 16px !important ;'
              + 'cursor: pointer ; width: 33px ; height: 33px ; border-radius: 20px }'
          + `.${this.class} [class*=modal-close-btn] svg { height: 10px }`
          + `.${this.class} [class*=modal-close-btn] path {`
              + `${ scheme == 'dark' ? 'stroke: white ; fill: white' : 'stroke: #9f9f9f ; fill: #9f9f9f' }}`
          + ( scheme == 'dark' ?  // invert dark mode hover paths
                `.${this.class} [class*=modal-close-btn]:hover path { stroke: black ; fill: black }` : '' )
          + `.${this.class} [class*=modal-close-btn]:hover { background-color: #f2f2f2 }` // hover underlay
          + `.${this.class} [class*=modal-close-btn] svg { margin: 11.5px }` // center SVG for hover underlay
          + `.${this.class} a { color: #${ scheme == 'dark' ? '00cfff' : '1e9ebb' } !important }`
          + `.${this.class} h2 { font-weight: bold }`
          + `.${this.class} button {`
              + '--btn-transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out ;'
              + 'font-size: 14px ; text-transform: uppercase ;' // shrink/uppercase labels
              + 'border-radius: 0 !important ;' // square borders
              + 'transition: var(--btn-transition) ;' // smoothen hover fx
                  + '-webkit-transition: var(--btn-transition) ; -moz-transition: var(--btn-transition) ;'
                  + '-o-transition: var(--btn-transition) ; -ms-transition: var(--btn-transition) ;'
              + 'cursor: pointer !important ;' // add finger cursor
              + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' } !important ;`
              + 'padding: 8px !important ; min-width: 102px }' // resize
          + `.${this.class} button:hover {` // add zoom, re-scheme
              + 'transform: scale(1.055) ; color: black !important ;'
              + `background-color: #${ scheme == 'dark' ? '00cfff' : '9cdaff' } !important }`
          + ( !isMobile ? `.${this.class} .modal-buttons { margin-left: -13px !important }` : '' )
          + `.about-em { color: ${ scheme == 'dark' ? 'white' : 'green' } !important }`
        )
    }
};
