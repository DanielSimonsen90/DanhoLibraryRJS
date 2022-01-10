"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Container({ type, children, style, ...props }) {
    const className = ['container',
        type && `container-${type}`,
        props.className
    ].filter(v => v).join(' ');
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, style: style, children: children }, void 0));
}
exports.Container = Container;
exports.default = Container;
