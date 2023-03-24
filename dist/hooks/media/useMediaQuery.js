"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = void 0;
const react_1 = require("react");
const useEventListener_1 = __importDefault(require("../events/useEventListener"));
/**
 * CSS media queries in React 👀
 * @param mediaQuery Media query: default: (max-width: mediaQuery)
 * @returns If media query is a match
 */
function useMediaQuery(mediaQuery) {
    const [isMatch, setIsMatch] = (0, react_1.useState)(false);
    const [mediaQueryList, setMediaQueryList] = (0, react_1.useState)(null);
    const mq = (0, react_1.useMemo)(() => {
        let prop = 'max-width';
        let val = mediaQuery; // 600(px)
        if (mediaQuery.includes(':')) {
            const noParents = mediaQuery.startsWith('(') ? mediaQuery.substring(1, mediaQuery.length - 1) : mediaQuery;
            [prop, val] = noParents.split(':');
        }
        const value = val.trim() + (/\d$/.test(val) ? 'px' : '');
        return `(${prop}: ${value})`;
    }, [mediaQuery]);
    (0, react_1.useEffect)(() => {
        const list = window.matchMedia(mq);
        setMediaQueryList(list);
        setIsMatch(list.matches);
    }, [mq]);
    (0, useEventListener_1.default)("change", (_, list) => setIsMatch(list.matches), mediaQueryList);
    return isMatch;
}
exports.useMediaQuery = useMediaQuery;
exports.default = useMediaQuery;
