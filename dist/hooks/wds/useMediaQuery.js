"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = void 0;
const react_1 = require("react");
const useEventListener_1 = __importDefault(require("./useEventListener"));
/**
 * CSS media queries in React 👀
 * @param mediaQuery Media query
 * @returns If media query is a match
 */
function useMediaQuery(mediaQuery) {
    const [isMatch, setIsMatch] = (0, react_1.useState)(false);
    const [mediaQueryList, setMediaQueryList] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const list = window.matchMedia(mediaQuery);
        setMediaQueryList(list);
        setIsMatch(list.matches);
    }, [mediaQuery]);
    (0, useEventListener_1.default)("change", (e, t) => setIsMatch(t.matches), mediaQueryList);
    return isMatch;
}
exports.useMediaQuery = useMediaQuery;
exports.default = useMediaQuery;
