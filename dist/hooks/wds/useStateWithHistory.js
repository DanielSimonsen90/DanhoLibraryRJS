"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateWithHistory = void 0;
const react_1 = require("react");
const useCallbackOnce_1 = __importDefault(require("../useCallbackOnce"));
const DefaultCapacity = 10;
/**
 * useState but you can go back to the previous values
 * @param defaultValue Default state value
 * @param options History options
 */
function useStateWithHistory(defaultValue, { capacity = DefaultCapacity }) {
    const [current, setCurrent] = (0, react_1.useState)(defaultValue);
    // const historyRef = useRef(defaultValue ? [defaultValue] : [])
    const historyRef = (0, react_1.useRef)([defaultValue, defaultValue]);
    const pointerRef = (0, react_1.useRef)(0);
    console.log('useStateWithHistory return', {
        current,
        history: historyRef.current,
        pointer: pointerRef.current
    });
    const push = (0, react_1.useCallback)((value) => {
        const next = typeof value === "function" ? value(current) : value;
        console.log({ current, next, history: historyRef.current });
        if (current === next)
            return;
        if (pointerRef.current < historyRef.current.length - 1) {
            historyRef.current.splice(pointerRef.current + 1);
        }
        historyRef.current.push(next);
        while (historyRef.current.length > capacity) {
            historyRef.current.shift();
        }
        pointerRef.current = historyRef.current.length - 1;
        setCurrent(next);
    }, [capacity, current]);
    const back = (0, useCallbackOnce_1.default)(() => {
        if (pointerRef.current <= 0)
            return;
        pointerRef.current--;
        setCurrent(historyRef.current[pointerRef.current]);
    });
    const forward = (0, useCallbackOnce_1.default)(() => {
        if (pointerRef.current >= historyRef.current.length - 1)
            return;
        pointerRef.current++;
        setCurrent(historyRef.current[pointerRef.current]);
    });
    const go = (0, useCallbackOnce_1.default)(index => {
        if (index < 0 || index > historyRef.current.length - 1)
            return;
        pointerRef.current = index;
        setCurrent(historyRef.current[pointerRef.current]);
    });
    const remove = (0, useCallbackOnce_1.default)((item) => {
        let index = typeof item === 'number' ? item : historyRef.current.indexOf(item);
        if (index == -1)
            index = historyRef.current.length - 1;
        console.log('useStateWithHistory remove', { index, item, history: historyRef.current });
        if (index < 0)
            return;
        historyRef.current = historyRef.current.filter((_, i) => i !== index);
        // Element removed was in history
        if (pointerRef.current > index)
            pointerRef.current--;
        // Element removed is self
        else if (pointerRef.current == index) {
            pointerRef.current = historyRef.current[pointerRef.current + 1] ?
                pointerRef.current++ :
                pointerRef.current > 0 ?
                    pointerRef.current-- :
                    pointerRef.current;
        }
        setCurrent(historyRef.current[pointerRef.current]);
    });
    const pop = (0, useCallbackOnce_1.default)(() => {
        const isPointedTo = historyRef.current.length - 1 === pointerRef.current;
        historyRef.current.pop();
        if (isPointedTo)
            pointerRef.current--;
        setCurrent(historyRef.current[pointerRef.current]);
    });
    if (historyRef.current.some(s => s === null || s === undefined)) {
        historyRef.current = historyRef.current.filter(s => s);
        setCurrent(historyRef.current[pointerRef.current = historyRef.current.length - 1]);
    }
    return [current, push, {
            history: historyRef.current,
            pointer: pointerRef.current,
            back, forward, go, remove, pop
        }];
}
exports.useStateWithHistory = useStateWithHistory;
exports.default = useStateWithHistory;
