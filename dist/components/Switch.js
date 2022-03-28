"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_fontawesome_1 = __importDefault(require("react-fontawesome"));
// Switch component is a simple checkbox with a custom style
// Wrapper - .switch with an data-chcked attribute
// Wrapper - onClick should toggle the Input's checked property
// Wrapper - Should be styled to look like a switch
// Input - Hidden and saved in a ref for the Wrapper
const Switch = (props) => {
    const { checked, disabled, vertical, icons, onCheckChanged, ...rest } = props;
    const inputRef = (0, react_1.useRef)(null);
    const switchRef = (0, react_1.useRef)(null);
    const icon = (0, react_1.useMemo)(() => icons ? checked ? icons.checked : icons.unchecked : undefined, [icons, checked]);
    const onInputChange = (e) => onCheckChanged === null || onCheckChanged === void 0 ? void 0 : onCheckChanged(e.target.checked, e);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: switchRef, className: "switch", "data-checked": checked, "data-vertical": vertical, onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, children: [icon && (0, jsx_runtime_1.jsx)(react_fontawesome_1.default, { name: icon, style: {
                    position: 'absolute',
                    left: !vertical && checked ? 'calc(.9em / 2)' : vertical ? '50%' : 'auto',
                    right: !vertical && !checked ? '-.6em' : 'auto',
                    top: !vertical ? '50%' : checked ? '.6em' : 'auto',
                    bottom: vertical && !checked ? 'calc(-.9em / 2)' : 'auto',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    transition: 'all var(--transition-time) ease-in-out',
                } }, void 0), (0, jsx_runtime_1.jsx)("input", { type: "checkbox", ref: inputRef, checked: checked, disabled: disabled, style: { display: "none" }, onChange: onInputChange, ...rest }, void 0)] }, void 0));
};
exports.Switch = Switch;
