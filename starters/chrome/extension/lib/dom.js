window.dom = {

    imports: {
        import(deps) { // { env) }
            for (const depName in deps) this[depName] = deps[depName] }
    },

    addRisingParticles(targetNode) { // requires https://assets.aiwebextensions.com/styles/rising-particles/dist/<gray|white>.min.css
        if (targetNode.querySelector('[id*=particles]')) return
        const particlesDivsContainer = document.createElement('div')
        particlesDivsContainer.style.cssText = 'position: absolute ; top: 0 ; left: 0 ;' // hug targetNode's top-left corner
          + 'height: 100% ; width: 100% ; border-radius: 15px ; overflow: clip ;' // bound innards exactly by targetNode
          + 'z-index: -1'; // allow interactive elems to be clicked
        ['sm', 'med', 'lg'].forEach(particleSize => {
            const particlesDiv = document.createElement('div')
            particlesDiv.id = `${ this.imports.env.ui.scheme == 'dark' ? 'white' : 'gray' }-particles-${particleSize}`
            particlesDivsContainer.append(particlesDiv)
        })
        targetNode.prepend(particlesDivsContainer)
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
    }
};
