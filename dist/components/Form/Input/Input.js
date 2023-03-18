"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Input({ value: initialValue, onChange, label, ...props }) {
    const [value, setValue] = (0, react_1.useState)(initialValue);
    const _onChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };
    if (label && !props.id)
        throw new Error("Input must have an id if it has a label!");
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [label && (0, jsx_runtime_1.jsx)("label", { htmlFor: props.id, children: label }), (0, jsx_runtime_1.jsx)("input", { value: value, onChange: _onChange, ...props })] }));
}
exports.Input = Input;
exports.default = Input;
