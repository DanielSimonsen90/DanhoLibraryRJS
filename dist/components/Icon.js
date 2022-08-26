"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_fontawesome_1 = __importDefault(require("react-fontawesome"));
const hooks_1 = require("../hooks");
function Icon({ componentDidMount, componentWillUnmount, ...props }) {
    (0, hooks_1.useEffectOnce)(() => {
        componentDidMount === null || componentDidMount === void 0 ? void 0 : componentDidMount();
        return () => componentWillUnmount === null || componentWillUnmount === void 0 ? void 0 : componentWillUnmount();
    });
    return (0, jsx_runtime_1.jsx)(react_fontawesome_1.default, { ...props }, void 0);
}
exports.Icon = Icon;
exports.default = Icon;
