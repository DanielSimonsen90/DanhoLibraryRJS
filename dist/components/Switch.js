"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// Switch component is a simple checkbox with a custom style
// Wrapper - .switch with an data-chcked attribute
// Wrapper - onClick should toggle the Input's checked property
// Wrapper - Should be styled to look like a switch
// Input - Hidden and saved in a ref for the Wrapper
const Switch = (props) => {
    const { checked, disabled, onCheckChanged, ...rest } = props;
    const ref = (0, react_1.useRef)(null);
    const handleChange = (e) => {
        if (onCheckChanged) {
            onCheckChanged(e.target.checked, e);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "switch", "data-checked": checked, onClick: () => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.click(); }, children: (0, jsx_runtime_1.jsx)("input", { type: "checkbox", ref: ref, checked: checked, disabled: disabled, onChange: handleChange, style: { display: "none" }, ...rest }, void 0) }, void 0));
};
exports.Switch = Switch;
