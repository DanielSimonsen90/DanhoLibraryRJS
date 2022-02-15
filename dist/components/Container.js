"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
function Container({ type, children, ...props }) {
    const className = (0, _1.combineClassName)('container', type && `container-${type}`, props.className);
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, children: children }, void 0));
}
exports.Container = Container;
exports.default = Container;
