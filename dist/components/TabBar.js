"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
const useStateWithHistory_1 = require("../hooks/wds/useStateWithHistory");
function TabBar({ className, onItemSelected, ...props }) {
    const [componentSelected, setComponentSelected] = (0, useStateWithHistory_1.useStateWithHistory)(Array.isArray(props.children) ? props.children[0] : props.children, {
        capacity: 1
    });
    const children = [props.children].flat().map(child => {
        child.props.onClick = event => {
            var _a, _b;
            onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected({
                ...event,
                previous: componentSelected,
                current: child
            });
            setComponentSelected(child);
            (_b = (_a = child.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        return child;
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, _1.combineClassName)('tab-bar', className), ...props, children: children }, void 0));
}
exports.default = TabBar;
