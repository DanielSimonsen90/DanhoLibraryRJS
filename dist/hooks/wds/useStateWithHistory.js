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
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    const historyRef = (0, react_1.useRef)([value]);
    const pointerRef = (0, react_1.useRef)(0);
    const set = (0, react_1.useCallback)((value) => {
        const _value = typeof value === "function" ? value(value) : value;
        if (historyRef.current[pointerRef.current] !== _value) {
            if (pointerRef.current < historyRef.current.length - 1) {
                historyRef.current.splice(pointerRef.current + 1);
            }
            historyRef.current.push(_value);
            while (historyRef.current.length > capacity) {
                historyRef.current.shift();
            }
            pointerRef.current = historyRef.current.length - 1;
        }
        setValue(_value);
    }, [capacity, value]);
    const back = (0, useCallbackOnce_1.default)(() => {
        if (pointerRef.current <= 0)
            return;
        pointerRef.current--;
        setValue(historyRef.current[pointerRef.current]);
    });
    const forward = (0, useCallbackOnce_1.default)(() => {
        if (pointerRef.current >= historyRef.current.length - 1)
            return;
        pointerRef.current++;
        setValue(historyRef.current[pointerRef.current]);
    });
    const go = (0, useCallbackOnce_1.default)(index => {
        if (index < 0 || index > historyRef.current.length - 1)
            return;
        pointerRef.current = index;
        setValue(historyRef.current[pointerRef.current]);
    });
    return [value, set, {
            history: historyRef.current,
            pointer: pointerRef.current,
            back, forward, go
        }];
}
exports.useStateWithHistory = useStateWithHistory;
exports.default = useStateWithHistory;
