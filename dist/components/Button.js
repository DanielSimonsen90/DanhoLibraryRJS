"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_fontawesome_1 = __importDefault(require("react-fontawesome"));
const _1 = require(".");
function GetIconFromCrud(crud) {
    switch (crud) {
        case 'create': return 'plus';
        case 'read': return 'book-open-cover';
        case 'update': return 'pencil';
        case 'delete': return 'trash';
    }
}
function Button({ crud, iconName, importance, hideIcon, className, value, children, onClick, ..._props }) {
    const props = { ..._props, "data-crud": crud };
    if (!iconName && crud) {
        iconName = GetIconFromCrud(crud);
    }
    return ((0, jsx_runtime_1.jsxs)("button", { className: (0, _1.classNames)(className, importance !== null && importance !== void 0 ? importance : 'primary'), onClick: onClick, onKeyDown: e => (e.key === 'Enter' || e.key === 'NumpadEnter') && (onClick === null || onClick === void 0 ? void 0 : onClick(e)), ...props, children: [iconName && !hideIcon && (0, jsx_runtime_1.jsx)(react_fontawesome_1.default, { name: iconName }), value || children] }));
}
exports.Button = Button;
exports.default = Button;
