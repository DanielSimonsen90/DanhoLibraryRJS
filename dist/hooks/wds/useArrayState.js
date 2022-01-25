"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useArray = void 0;
const react_1 = require("react");
/**
 * Manages array states
 * @param defaultValue Default array
 * @returns Array, along with methods to modify array
 */
function useArray(defaultValue) {
    const [array, setArray] = (0, react_1.useState)(defaultValue);
    const length = (0, react_1.useMemo)(() => array.length, [array, array.length]);
    (0, react_1.useEffect)(() => { console.log('useArrayState, useEffect', array); });
    const push = (item) => setArray(a => [...a, item]);
    const update = (i, item) => setArray(a => [...a.slice(0, i), item, ...a.slice(i + 1, a.length)]);
    const filter = (callback) => setArray(a => {
        const pre = a;
        const cur = a.filter(callback);
        console.log('useArrayState filter', { pre, cur, a });
        return cur;
    });
    const remove = (i) => {
        if (i === undefined || i === null)
            return;
        let index = typeof i === 'number' ? i : array.indexOf(i);
        console.log('useArrayState, remove', { i });
        setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
    };
    const clear = () => setArray([]);
    const shift = () => remove(0);
    const index = (i) => array[i];
    console.log('useArrayState return', { array, length });
    return {
        value: array, length,
        push,
        filter, update,
        remove, clear, shift,
        index
    };
}
exports.useArray = useArray;
exports.default = useArray;
