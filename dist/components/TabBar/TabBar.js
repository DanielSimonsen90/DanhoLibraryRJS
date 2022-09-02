"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const __1 = require("..");
function TabBar({ onItemSelected, ...props }) {
    const items = (0, react_1.useMemo)(() => {
        const propsChildren = props.children !== undefined && (Array.isArray(props.children) ? props.children : [props.children]);
        if (propsChildren === false && props.data)
            return props.data;
        else if (propsChildren === false)
            return new Map([
                ['Item', {
                        title: 'Item',
                        component: (0, jsx_runtime_1.jsx)("h1", { children: "Please use the data property or give TabBar children!" })
                    }]
            ]);
        return propsChildren.reduce((map, child) => {
            return map.set(child.props.title, child.props);
        }, new Map());
    }, [props.children]);
    const titles = (0, react_1.useMemo)(() => items.keyArr(), [items]);
    const [componentSelected, setComponentSelected] = (0, react_1.useState)(items.valueArr()[0]);
    const _onItemSelected = (e) => {
        const item = items.get(e.currentTarget.textContent);
        onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected({ ...e,
            previous: componentSelected,
            current: item
        });
        setComponentSelected(item);
    };
    return ((0, jsx_runtime_1.jsxs)("section", { ...props, className: (0, __1.classNames)('tab-bar-container', props.className), children: [(0, jsx_runtime_1.jsx)("header", { className: "tab-bar", children: (0, jsx_runtime_1.jsx)("ul", { children: titles.map(title => (0, jsx_runtime_1.jsx)("li", { className: componentSelected.title === title ?
                            'selected' :
                            undefined, onClick: _onItemSelected, children: title }, title)) }) }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("section", { className: "tab-bar-content", children: typeof componentSelected.component === 'function' ?
                    componentSelected.component() :
                    componentSelected.component })] }));
}
exports.TabBar = TabBar;
exports.default = TabBar;
