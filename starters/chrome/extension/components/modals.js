// Requires lib/chatgpt.js + lib/dom.js

window.modals = {
    stack: [], // of types of undismissed modals
    get class() { return `${this.imports.app.cssPrefix}-modal` },

    imports: {
        import(deps) { // { app, env }
            for (const depName in deps) this[depName] = deps[depName] }
    },

    alert(title = '', msg = '', btns = '', checkbox = '', width = '') { // generic one from chatgpt.alert()
        const alertID = chatgpt.alert(title, msg, btns, checkbox, width),
              alert = document.getElementById(alertID).firstChild
        this.init(alert) // add classes + starry bg
        return alert
    },

    open(modalType) {
        const modal = this[modalType]() // show modal
        this.stack.unshift(modalType) // add to stack
        this.init(alert) // add classes + starry bg
        this.observeRemoval(modal, modalType) // to maintain stack for proper nav
    },

    init(modal) {
        if (!modal) return // to support non-div this.open()s
        if (!this.styles) this.stylize() // to init/append stylesheet
        modal.classList.add('no-user-select', this.class) ; modal.parentNode.classList.add(`${this.class}-bg`)
        dom.fillStarryBG(modal) // add starry bg
    },

    stylize() {
        if (!this.styles) {
            this.styles = dom.create.elem('style') ; this.styles.id = `${this.class}-styles`
            document.head.append(this.styles)
        }
        this.styles.innerText = (
            `.no-user-select {
                user-select: none ; -webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none }`
          + `.${this.class} {` // modals
              + 'font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,'
                  + 'Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif ;'
              + 'padding: 20px 25px 24px 25px !important ; font-size: 20px ;'
              + `color: ${ this.imports.env.ui.scheme == 'dark' ? 'white' : 'black' } !important ;`
              + `background-image: linear-gradient(180deg, ${
                     this.imports.env.ui.scheme == 'dark' ? '#99a8a6 -200px, black 200px'
                                                            : '#b6ebff -296px, white 171px' }) }`
          + `.${this.class} [class*=modal-close-btn] {`
              + 'position: absolute !important ; float: right ; top: 14px !important ; right: 16px !important ;'
              + 'cursor: pointer ; width: 33px ; height: 33px ; border-radius: 20px }'
          + `.${this.class} [class*=modal-close-btn] svg { height: 10px }`
          + `.${this.class} [class*=modal-close-btn] path {`
              + `${ this.imports.env.ui.scheme == 'dark' ? 'stroke: white ; fill: white'
                                                           : 'stroke: #9f9f9f ; fill: #9f9f9f' }}`
          + ( this.imports.env.ui.scheme == 'dark' ?  // invert dark mode hover paths
                `.${this.class} [class*=modal-close-btn]:hover path { stroke: black ; fill: black }` : '' )
          + `.${this.class} [class*=modal-close-btn]:hover { background-color: #f2f2f2 }` // hover underlay
          + `.${this.class} [class*=modal-close-btn] svg { margin: 11.5px }` // center SVG for hover underlay
          + `.${this.class} a {`
              + `color: #${ this.imports.env.ui.scheme == 'dark' ? '00cfff' : '1e9ebb' } !important }`
          + `.${this.class} h2 { font-weight: bold }`
          + `.${this.class} button {`
              + '--btn-transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out ;'
              + 'font-size: 14px ; text-transform: uppercase ;' // shrink/uppercase labels
              + 'border-radius: 0 !important ;' // square borders
              + 'transition: var(--btn-transition) ;' // smoothen hover fx
                  + '-webkit-transition: var(--btn-transition) ; -moz-transition: var(--btn-transition) ;'
                  + '-o-transition: var(--btn-transition) ; -ms-transition: var(--btn-transition) ;'
              + 'cursor: pointer !important ;' // add finger cursor
              + `border: 1px solid ${ this.imports.env.ui.scheme == 'dark' ? 'white' : 'black' } !important ;`
              + 'padding: 8px !important ; min-width: 102px }' // resize
          + `.${this.class} button:hover {` // add zoom, re-scheme
              + 'transform: scale(1.055) ; color: black !important ;'
              + `background-color: #${ this.imports.env.ui.scheme == 'dark' ? '00cfff' : '9cdaff' } !important }`
          + ( !this.imports.env.browser.isMobile ?
                `.${this.class} .modal-buttons { margin-left: -13px !important }` : '' )
          + `.about-em { color: ${ this.imports.env.ui.scheme == 'dark' ? 'white' : 'green' } !important }`
        )
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

    about() {

        // Show modal
        const aboutModal = this.alert(
            `${this.imports.app.symbol} ${chrome.runtime.getManifest().name}`, // title
            '🧠 Author: ' // msg
                + `<a href="${this.imports.app.author.url}">${this.imports.app.author.name}</a> `
                    + `& <a href="${this.imports.app.urls.contributors}">contributors</a>\n`
            + `🏷️ Version: <span class="about-em">${this.imports.app.version}</span>\n`
            + '📜 Open source code: '
                + `<a href="${this.imports.app.urls.gitHub}" target="_blank" rel="nopener">`
                    + this.imports.app.urls.gitHub + '</a>\n'
            + '⚡ Powered by: '
                + `<a href="${this.imports.app.urls.chatgptJS}" target="_blank" rel="noopener">chatgpt.js</a>`,
            [ function getSupport(){}, function rateUs(){}, function moreAiExtensions(){} ], // button labels
            '', 656 // modal width
        )

        // Format text
        aboutModal.querySelector('h2').style.cssText = (
            'text-align: center ; font-size: 51px ; line-height: 46px ; padding: 15px 0' )
        aboutModal.querySelector('p').style.cssText = (
            'text-align: center ; overflow-wrap: anywhere ;'
          + `margin: ${ this.imports.env.browser.isPortrait ? '6px 0 -16px' : '3px 0 0' }` )

        // Hack buttons
        aboutModal.querySelector('.modal-buttons').style.justifyContent = 'center'
        aboutModal.querySelectorAll('button').forEach(btn => {
            btn.style.cssText = 'height: 55px ; min-width: 136px ; text-align: center'

            // Replace buttons w/ clones that don't dismiss modal
            const btnClone = btn.cloneNode(true)
            btn.parentNode.replaceChild(btnClone, btn) ; btn = btnClone
            btn.onclick = () => this.safeWinOpen(
                btn.textContent == 'Get Support' ? `${modals.imports.app.urls.gitHub}/issues`
              : btn.textContent == 'Rate Us' ? `${modals.imports.app.urls.gitHub}/discussions`
              : modals.imports.app.urls.relatedExtensions
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
