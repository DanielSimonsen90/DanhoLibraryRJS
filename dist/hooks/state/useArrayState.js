"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useArrayState = void 0;
const react_1 = require("react");
/**
 * Manages array states
 * @param defaultValue Default array
 * @returns Array, along with methods to modify array
 */
function useArrayState(defaultValue) {
    const [array, setArray] = (0, react_1.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : []);
    const arrayProps = (0, react_1.useMemo)(() => {
        // console.log('useArray arrayProps memo update', array);
        const { find, some, includes, every, random, reduce, map, forEach, findIndex, indexOf, lastIndexOf, keys, values, join, length } = array;
        const index = (index) => array[index];
        return {
            find, some, includes, every, random,
            reduce, map, forEach,
            findIndex, indexOf, index, lastIndexOf,
            keys, values, join,
            length
        };
    }, [array]);
    const push = (item) => setArray(a => [...a, item]);
    const update = (i, item) => setArray(a => [...a.slice(0, i), item, ...a.slice(i + 1, a.length)]);
    const filter = (callback) => setArray(a => a.filter(callback));
    const remove = (i) => {
        if (i === undefined || i === null)
            return undefined;
        let index = typeof i === 'number' ? i : array.indexOf(i);
        const item = array[index];
        setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
        return item;
    };
    const clear = () => setArray([]);
    const shift = () => remove(0);
    const pop = () => remove(array.length - 1);
    return {
        ...arrayProps,
        value: array,
        push,
        filter, update,
        remove, clear, shift, pop
    };
}
exports.useArrayState = useArrayState;
exports.default = useArrayState;
