"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Container({ type, children, style, ...props }) {
    var _a;
    const className = ['container',
        `container-${type}`, (_a = props.className) !== null && _a !== void 0 ? _a : ''
    ].join(' ');
    return ((0, jsx_runtime_1.jsx)("div", { ...props, className: className, style: style, children: children }, void 0));
}
exports.Container = Container;
exports.default = Container;
