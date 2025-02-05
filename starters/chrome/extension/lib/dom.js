// Copyright © 2023–2025 Adam Lui (https://github.com/adamlui) under the MIT license
// Source: https://github.com/adamlui/ai-web-extensions/blob/main/assets/lib/dom.js/src/dom.js

window.dom = {

    imports: {
        import(deps) { // { config, env }
            for (const depName in deps) this[depName] = deps[depName] }
    },

    addRisingParticles(targetNode, { lightScheme = 'gray', darkScheme = 'white' } = {}) {
    // Requires https://assets.aiwebextensions.com/styles/rising-particles/dist/<lightScheme|darkScheme>.min.css

        if (targetNode.querySelector('[id*=particles]')) return
        const particlesDivsWrapper = document.createElement('div')
        particlesDivsWrapper.style.cssText = (
            'position: absolute ; top: 0 ; left: 0 ;' // hug targetNode's top-left corner
          + 'height: 100% ; width: 100% ; border-radius: 15px ; overflow: clip ;' // bound innards exactly by targetNode
          + 'z-index: -1' ); // allow interactive elems to be clicked
        ['sm', 'med', 'lg'].forEach(particleSize => {
            const particlesDiv = document.createElement('div')
            particlesDiv.id = this.imports.config?.bgAnimationsDisabled ? `particles-${particleSize}-off`
                : `${( this.imports.env?.ui?.scheme || this.imports.env?.ui?.app?.scheme ) == 'dark' ? darkScheme
                    : lightScheme }-particles-${particleSize}`
            particlesDivsWrapper.append(particlesDiv)
        })
        targetNode.prepend(particlesDivsWrapper)
    },

    create: {
        anchor(linkHref, displayContent, attrs = {}) {
            const anchor = document.createElement('a'),
                  defaultAttrs = { href: linkHref, target: '_blank', rel: 'noopener' },
                  finalAttrs = { ...defaultAttrs, ...attrs }
            Object.entries(finalAttrs).forEach(([attr, value]) => anchor.setAttribute(attr, value))
            if (displayContent) anchor.append(displayContent)
            return anchor
        },

        elem(elemType, attrs = {}) {
            const elem = document.createElement(elemType)
            for (const attr in attrs) elem.setAttribute(attr, attrs[attr])
            return elem
        },

        style(content, attrs = {}) {
            const style = document.createElement('style')
            for (const attr in attrs) style.setAttribute(attr, attrs[attr])
            if (content) style.innerText = content
            return style
        },

        svgElem(type, attrs = {}) {
            const elem = document.createElementNS('http://www.w3.org/2000/svg', type)
            for (const attr in attrs) elem.setAttributeNS(null, attr, attrs[attr])
            return elem
        }
    },

    cssSelectorize(classList) {
        return classList.toString()
            .replace(/([:[\]\\])/g, '\\$1') // escape special chars :[]\
            .replace(/^| /g, '.') // prefix w/ dot, convert spaces to dots
    },

    get: {

        computed(elems, { prop } = {}) { // total width/height of elems (including margins)
        // * Returns { width: X, height: Y } if multi or no props passed
        // * Returns float if single prop passed

            // Validate args
            elems = elems instanceof NodeList ? [...elems] : [].concat(elems)
            elems.forEach(elem => { if (!(elem instanceof Node))
                throw new Error(`Invalid elem: Element "${JSON.stringify(elem)}" is not a valid DOM node`) })
            const validProps = ['width', 'height'], propsToCompute = [].concat(prop || validProps)
            propsToCompute.forEach(prop => { if (!validProps.includes(prop))
                throw new Error('Invalid prop: Use \'width\' or \'height\'') })

            // Compute props
            const computedProps = { width: 0, height: 0 }
            elems.forEach(elem => {
                const elemStyle = getComputedStyle(elem) ; if (elemStyle.display == 'none') return
                if (propsToCompute.includes('width'))
                    computedProps.width += elem.getBoundingClientRect().width
                        + parseFloat(elemStyle.marginLeft) + parseFloat(elemStyle.marginRight)
                if (propsToCompute.includes('height'))
                    computedProps.height += elem.getBoundingClientRect().height
                        + parseFloat(elemStyle.marginTop) + parseFloat(elemStyle.marginBottom)
            })

            // Return props
            return propsToCompute.length > 1 ? computedProps // obj w/ width/height
                 : computedProps[propsToCompute[0]] // single total val
        },

        computedHeight(elems) { return this.computed(elems, { prop: 'height' }) }, // including margins
        computedWidth(elems) { return this.computed(elems, { prop: 'width' }) }, // including margins

        loadedElem(selector, timeout = null) {
            const timeoutPromise = timeout ? new Promise(resolve => setTimeout(() => resolve(null), timeout)) : null
            const isLoadedPromise = new Promise(resolve => {
                const elem = document.querySelector(selector)
                if (elem) resolve(elem)
                else new MutationObserver((_, obs) => {
                    const elem = document.querySelector(selector)
                    if (elem) { obs.disconnect() ; resolve(elem) }
                }).observe(document.documentElement, { childList: true, subtree: true })
            })
            return ( timeoutPromise ? Promise.race([isLoadedPromise, timeoutPromise]) : isLoadedPromise )
        }
    }
};
