window.dom = {
    create: {
        elem(elemType, attrs = {}) {
            const elem = document.createElement(elemType)
            Object.entries(attrs).forEach(([attr, val]) => elem.setAttribute(attr, val))
            return elem
        },

        svgElem(type, attrs) {
            const elem = document.createElementNS('http://www.w3.org/2000/svg', type)
            for (const attr in attrs) elem.setAttributeNS(null, attr, attrs[attr])
            return elem
        }
    }
};
