"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
function Container({ type, children, ...props }) {
    const className = (0, _1.classNames)('container', type && `container-${type}`, props.className);
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, "data-type": type !== null && type !== void 0 ? type : 'block', children: children }));
}
exports.Container = Container;
exports.default = Container;
