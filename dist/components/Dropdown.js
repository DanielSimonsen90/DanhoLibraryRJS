"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Dropdown({ items, onItemSelected }) {
    return ((0, jsx_runtime_1.jsx)("ul", { className: 'dropdown', children: items.map(i => (0, jsx_runtime_1.jsx)("li", { className: 'dropdown-item', onClick: () => onItemSelected(i), children: i.toString() }, i.toString())) }, void 0));
}
exports.Dropdown = Dropdown;
exports.default = Dropdown;
