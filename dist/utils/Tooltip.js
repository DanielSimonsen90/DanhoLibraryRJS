"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Container_1 = __importDefault(require("./Container"));
function Tooltip({ dock, query, tooltip, children, ...rest }) {
    const [style, setStyle] = (0, react_1.useState)({});
    const [tooltipSize, settooltipSize] = (0, react_1.useState)({ height: 0, width: 0 });
    const [showing, setShowing] = (0, react_1.useState)(false);
    const selfRef = (0, react_1.createRef)();
    (0, react_1.useEffect)(() => {
        var _a, _b;
        const tooltipFor = document.querySelector(query);
        const rect = tooltipFor.getClientRects()[0];
        const { top, bottom, left, right, width, height } = {
            top: Math.round(rect.top),
            bottom: Math.round(rect.bottom),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
        };
        const newtooltipSize = {
            height: ((_a = selfRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || height,
            width: ((_b = selfRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth) || width
        };
        if (newtooltipSize.height == tooltipSize.height &&
            newtooltipSize.width == tooltipSize.width)
            return;
        settooltipSize(newtooltipSize);
        setStyle(preStyle => ({ ...preStyle, ...(() => ({
                top: `${bottom - height / 2 - tooltipSize.height / 2}px`,
                left: `${right - width / 2 - tooltipSize.width / 2}px`,
                ...(() => {
                    switch (dock) {
                        default:
                        case 'top': return {
                            top: `calc(${top - tooltipSize.height}px - 2vh)`,
                            boxShadow: `0vw -.5vh .5vh #111`
                        };
                        case 'bottom': return {
                            top: `calc(${bottom}px + 2vh)`,
                            boxShadow: `0vw .5vh .5vh #111`
                        };
                        case 'right': return {
                            left: `calc(${left + tooltipSize.width}px + 2vw)`,
                            boxShadow: `.25vw 0px .5vh #111`
                        };
                        case 'left': return {
                            left: `calc(${right - left}px - 2vw)`,
                            boxShadow: `-.25vw 0px .5vh #111`
                        };
                    }
                })()
            })) }));
        tooltipFor.onmouseenter = () => setShowing(true);
        tooltipFor.onmouseleave = () => setShowing(false);
    }, [dock, query, selfRef, tooltip, tooltipSize.height, tooltipSize.width]);
    if (!showing)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { className: "tooltip", style: style, ...rest, ref: selfRef, children: (0, jsx_runtime_1.jsx)(Container_1.default, { style: { backgroundColor: 'unset', border: 'unset' }, children: children || tooltip }, void 0) }, void 0));
}
exports.Tooltip = Tooltip;
exports.default = Tooltip;
