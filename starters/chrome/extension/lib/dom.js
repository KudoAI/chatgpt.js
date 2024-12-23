window.dom = {

    dependencies: {
        import(dependencies) { // { env) }
            for (const name in dependencies) this[name] = dependencies[name] }
    },

    create: {
        elem(elemType, attrs = {}) {
            const elem = document.createElement(elemType)
            for (const attr in attrs) elem.setAttribute(attr, attrs[attr])
            return elem
        },

        svgElem(type, attrs) {
            const elem = document.createElementNS('http://www.w3.org/2000/svg', type)
            for (const attr in attrs) elem.setAttributeNS(null, attr, attrs[attr])
            return elem
        }
    },

    fillStarryBG(targetNode) { // requires https://assets.aiwebextensions.com/styles/rising-stars/css/<black|white>.min.css
        if (targetNode.querySelector('[id*=stars]')) return
        const starsDivsContainer = document.createElement('div')
        starsDivsContainer.style.cssText = 'position: absolute ; top: 0 ; left: 0 ;' // hug targetNode's top-left corner
          + 'height: 100% ; width: 100% ; border-radius: 15px ; overflow: clip ;' // bound innards exactly by targetNode
          + 'z-index: -1'; // allow interactive elems to be clicked
        ['sm', 'med', 'lg'].forEach(starSize => {
            const starsDiv = document.createElement('div')
            starsDiv.id = `${ this.dependencies.env.ui.scheme == 'dark' ? 'white' : 'black' }-stars-${starSize}`
            starsDivsContainer.append(starsDiv)
        })
        targetNode.prepend(starsDivsContainer)
    }
};
