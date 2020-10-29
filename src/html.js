/**
 * shortcut to create an html element
 * @param {object} options
 * @param {type} [options.string=div]
 * @param {string} [options.className]
 * @param {object} [options.styles]
 * @param {HTMLElement} [options.parent]
 * @param {string} [options.html]
 * @param {[HTMLElement]} [options.childElements]
 * @returns {HTMLElement}
 */
export function html(options = {}) {
    const object = document.createElement(options.type || 'div')
    if (options.parent) {
        options.parent.appendChild(object)
    }
    if (options.styles) {
        Object.assign(object.style, options.styles)
    }
    if (options.className) {
        object.className = options.className
    }
    if (options.html) {
        object.innerHTML = options.html
    }
    if (options.childElements) {
        if (!Array.isArray(options.childElements))
            options.childElements = [options.childElements];

        for (const child of options.childElements) {
            if (child) object.appendChild(child);
        }
    }
    return object
}