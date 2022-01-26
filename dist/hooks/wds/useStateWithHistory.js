"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateWithHistory = void 0;
const react_1 = require("react");
const useCallbackOnce_1 = __importDefault(require("../useCallbackOnce"));
const useArrayState_1 = __importDefault(require("./useArrayState"));
const DefaultCapacity = 10;
/**
 * useState but you can go back to the previous values
 * @param defaultValue Default state value
 * @param options History options
 */
function useStateWithHistory(defaultValue, { capacity = DefaultCapacity }) {
    const history = (0, useArrayState_1.default)(defaultValue ? [defaultValue] : []);
    const pointerRef = (0, react_1.useRef)(0);
    const current = (0, react_1.useMemo)(() => history.index(pointerRef.current), [history, pointerRef.current]);
    console.log('useStateWithHistory return', {
        current,
        history: history,
        pointer: pointerRef.current
    });
    const push = (0, react_1.useCallback)((value) => {
        const next = typeof value === "function" ? value(current) : value;
        console.log('useStateWithHistory push', { current, next, history });
        history.push(next);
        while (history.length > capacity) {
            history.shift();
        }
        pointerRef.current = history.length - 1;
    }, [capacity, current]);
    const back = (0, useCallbackOnce_1.default)(() => {
        if (pointerRef.current <= 0)
            return;
        pointerRef.current--;
    });
    const forward = (0, useCallbackOnce_1.default)(() => {
        if (pointerRef.current >= history.length - 1)
            return;
        pointerRef.current++;
    });
    const go = (0, useCallbackOnce_1.default)(index => {
        if (index < 0 || index > history.length - 1)
            return;
        pointerRef.current = index;
    });
    const remove = (0, useCallbackOnce_1.default)((item) => {
        let index = typeof item === 'number' ? item : history.indexOf(item);
        if (index == -1)
            index = history.length - 1;
        console.log('useStateWithHistory remove', { index, item, history: history });
        if (index < 0)
            return;
        history.filter((_, i) => i !== index);
        // Element removed was in history
        if (pointerRef.current > index)
            pointerRef.current--;
        // Element removed is self
        else if (pointerRef.current == index) {
            pointerRef.current = history.index(pointerRef.current + 1) ?
                pointerRef.current++ :
                pointerRef.current > 0 ?
                    pointerRef.current-- :
                    pointerRef.current;
        }
    });
    const pop = (0, useCallbackOnce_1.default)(() => {
        const isPointedTo = history.length - 1 === pointerRef.current;
        history.pop();
        if (isPointedTo)
            pointerRef.current--;
    });
    if (history.some(s => s === null || s === undefined)) {
        history.filter(s => s != null);
    }
    return [current, push, {
            history,
            get pointer() {
                return pointerRef.current;
            },
            setPointer(value) {
                return pointerRef.current = value;
            },
            back, forward, go, remove, pop
        }];
}
exports.useStateWithHistory = useStateWithHistory;
exports.default = useStateWithHistory;
