"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const _1 = require(".");
const Icon_1 = __importDefault(require("./Icon"));
function Switch(props) {
    const { checked, disabled, vertical, icons, onCheckChanged, className, id, ...rest } = props;
    const inputRef = (0, react_1.useRef)(null);
    const switchRef = (0, react_1.useRef)(null);
    const iconName = (0, react_1.useMemo)(() => icons ? checked ? icons.checked : icons.unchecked : undefined, [icons, checked]);
    const [iconAnimation, setIconAnimation] = (0, react_1.useState)('fade-in');
    const onInputChange = (e) => onCheckChanged === null || onCheckChanged === void 0 ? void 0 : onCheckChanged(e.target.checked, e);
    const onIconDidMount = () => setIconAnimation('fade-in');
    const onIconWillUnmount = () => setIconAnimation('fade-out');
    return ((0, jsx_runtime_1.jsxs)("div", { ref: switchRef, id: id, className: (0, _1.classNames)('switch', className), "data-checked": checked, "data-vertical": vertical, onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, children: [(0, jsx_runtime_1.jsx)("div", { className: "switch-circle", children: iconName && (0, jsx_runtime_1.jsx)(Icon_1.default, { name: iconName, className: "icon", style: {
                        animation: `${iconAnimation} var(--transition-time) ease-in-out forwards`,
                        // left: !vertical && checked ? 'calc(var(--size-bottom-left) / 2)' : vertical ? '50%' : 'auto',
                        // right: !vertical && !checked ? 'calc(var(--size-top-right) * -1)' : 'auto',
                        // top: !vertical ? '50%' : checked ? 'var(--size-top-right)' : 'auto',
                        // bottom: vertical && !checked ? 'calc(var(--size-bottom-left) / 2)' : 'auto',
                    }, componentDidMount: onIconDidMount, componentWillUnmount: onIconWillUnmount }) }), (0, jsx_runtime_1.jsx)("input", { type: "checkbox", ref: inputRef, checked: checked, disabled: disabled, style: { display: "none" }, onChange: onInputChange, ...rest })] }));
}
exports.Switch = Switch;
exports.default = Switch;
