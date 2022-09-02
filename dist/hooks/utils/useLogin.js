"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogin = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = __importDefault(require("../../components/Button"));
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
function useLogin({ onLogin, onLogout, isLoggedIn = false, usernameProps, passwordProps, loginButtonProps }) {
    const [username, setUsername] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const onSubmit = () => onLogin(username, password);
    const component = !isLoggedIn ? ((0, jsx_runtime_1.jsx)("div", { className: "login-container", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: onSubmit, children: [(0, jsx_runtime_1.jsx)(Input, { value: username, onChange: setUsername, type: "text", id: "username", label: "Username", ...usernameProps }), (0, jsx_runtime_1.jsx)(Input, { value: password, onChange: setPassword, type: "password", id: "password", label: "Password", ...passwordProps }), (0, jsx_runtime_1.jsx)(Button_1.default, { ...loginButtonProps, importance: "primary", crud: "create", type: "submit", children: "Login" })] }) })) : null;
    const logout = onLogout;
    return [component, logout];
}
exports.useLogin = useLogin;
exports.default = useLogin;
