// Requires lib/dom.js

window.icons = {

    create({ key, size = 18, width, height, ...otherAttrs }) {
        if (!key) return console.error('Option \'key\' required by icons.create()')
        const icon = {
            data: this[key], attrs: { width: width || size, height: height || size, class: key, ...otherAttrs }}
        if (icon.data?.svg) { // return <svg>
            icon.svg = dom.create.svgElem('svg', { ...icon.data.svg, ...icon.attrs })
            ;(function create(elems) {
                return elems.map(elem => {
                    const [tag, attrs] = Object.entries(elem)[0], svgElem = dom.create.svgElem(tag, attrs)
                    if (attrs.elems) svgElem.append(...create(attrs.elems)) // recursively create() sub-elems
                    return svgElem
                })
            })(icon.data.elems).forEach(elem => icon.svg.append(elem))
            return icon.svg
        } else if (icon.data?.src) // return <img> w/ src
            return dom.create.elem('img', { src: icon.data.src, ...icon.attrs })
        else
            return console.error(`No <svg|src> data found for key ${key}`)
    },

    caretDown: { svg: { viewBox: '0 0 24 24' }, elems: [{ path: { d: 'm0 6.4 12 12 12-12z' }}]},

    open: {
        svg: { viewBox: '0 0 512 512' },
        elems: [{ path: { transform: 'translate(85.333333, 64)',
            d: 'M128,63.999444 L128,106.666444 L42.6666667,106.666667 L42.6666667,320 L256,320 L256,234.666444 L298.666,234.666444 L298.666667,362.666667 L4.26325641e-14,362.666667 L4.26325641e-14,64 L128,63.999444 Z M362.666667,1.42108547e-14 L362.666667,170.666667 L320,170.666667 L320,72.835 L143.084945,249.751611 L112.915055,219.581722 L289.83,42.666 L192,42.6666667 L192,1.42108547e-14 L362.666667,1.42108547e-14 Z' }}]
    },

    plus: {
        svg: { viewBox: '0 0 1024 1024' },
        elems: [{ path: { d: 'M899.901 600.38H600.728v299.173c0 74.383-179.503 74.383-179.503 0V600.38H122.051c-74.384 0-74.384-179.503 0-179.503h299.173V121.703c0-74.384 179.503-74.384 179.503 0v299.174H899.9c74.385 0 74.385 179.503.001 179.503z' }}]
    },

    questionMark: {
        src: 'https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js-chrome-starter@8a59f80/images/icons/question-mark/icon16.png' }
};
