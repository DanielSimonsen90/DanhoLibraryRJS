"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
const react_1 = require("react");
const react_dom_1 = require("react-dom");
function Portal({ type, children, ...rest }) {
    const portal = document.createProperElement('div', {
        attributes: [['type', type]]
    });
    const portals = document.querySelector("#portals");
    if (!portals)
        throw Error("#portals not found in dom!");
    else if (!children)
        return null;
    portals.replaceChildren(portal);
    (0, react_1.useEffect)(() => {
        portals.style.zIndex = '100';
        return () => portals.removeAttribute('style');
    }, [portals, portals.children]);
    (0, react_1.useEffect)(() => () => portals.replaceChildren(), [portals]);
    const _children = (isntArray(children) ?
        (0, react_1.cloneElement)(children, { ...children.props, ...rest }) :
        children.map(child => (0, react_1.cloneElement)(child, { ...child.props, ...rest })));
    return (0, react_dom_1.createPortal)(_children, portal);
    function isntArray(children) {
        return Array.isArray(children);
    }
}
exports.Portal = Portal;
exports.default = Portal;
