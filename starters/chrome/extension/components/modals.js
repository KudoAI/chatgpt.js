// Requires lib/chatgpt.js + lib/dom.js

window.modals = {
    stack: [], // of types of undismissed modals

    import(dependencies) { // { app, siteAlert }
        Object.entries(dependencies).forEach(([name, dependency]) => this[name] = dependency) },

    open(modalType) {
        this.stack.unshift(modalType) // add to stack
        const modal = this[modalType]() // show modal
        modal.classList.add('chatgpt-infinity-modal')
        modal.onmousedown = this.dragHandlers.mousedown
        dom.fillStarryBG(modal) // fill BG w/ rising stars
        this.observeRemoval(modal, modalType) // to maintain stack for proper nav
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

        // Init styles
        const headingStyle = 'font-size: 1.15rem',
              pStyle = 'position: relative ; left: 3px',
              pBrStyle = 'position: relative ; left: 4px ',
              aStyle = 'color: ' + ( chatgpt.isDarkMode() ? '#c67afb' : '#8325c4' ) // purple

        // Init buttons
        const modalBtns = [
            function getSupport(){ modals.safeWinOpen(`${modals.app.urls.gitHub}/issues`) },
            function rateUs() { modals.safeWinOpen(`${modals.app.urls.gitHub}/discussions`) },
            function moreAiExtensions(){ modals.safeWinOpen(modals.app.urls.relatedExtensions) }
        ]

        // Show modal
        const aboutModal = this.siteAlert(
            `${this.app.symbol} ${chrome.runtime.getManifest().name}`, // title
            `<span style="${headingStyle}"><b>🏷️ <i>Version</i></b>: </span>`
                + `<span style="${pStyle}">${this.app.version}</span>\n`
            + `<span style="${headingStyle}"><b>⚡ <i>Powered by</i></b>: </span>`
                + `<span style="${pStyle}">`
                    + `<a style="${aStyle}" href="${this.app.urls.chatgptJS}" target="_blank" rel="noopener">`
                        + 'chatgpt.js</a></span>\n'
            + `<span style="${headingStyle}"><b>📜 <i>Open source code</i></b>:</span>\n`
                + `<span style="${pBrStyle}"><a href="${this.app.urls.gitHub}" target="_blank" rel="nopener">`
                    + this.app.urls.gitHub + '</a></span>',
            modalBtns, '', 451
        )

        // Format text
        aboutModal.querySelector('h2').style.cssText = 'text-align: center ; font-size: 37px ; padding: 9px'
        aboutModal.querySelector('p').style.cssText = 'text-align: center'

        // Hack buttons
        aboutModal.querySelector('.modal-buttons').style.justifyContent = 'center'
        aboutModal.querySelectorAll('button').forEach(btn => {
            btn.style.cssText = 'cursor: pointer !important ; height: 43px'

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
