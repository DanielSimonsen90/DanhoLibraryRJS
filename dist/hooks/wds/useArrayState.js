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
    const push = (item) => setArray(a => [...a, item]);
    const filter = (callback) => setArray(a => a.filter(callback));
    const update = (i, item) => setArray(a => [...a.slice(0, i), item, ...a.slice(i + 1, a.length)]);
    const remove = (i) => setArray(a => [...a.slice(0, i), ...a.slice(i + 1, a.length)]);
    const clear = () => setArray([]);
    return { array, set: setArray, push, filter, update, remove, clear };
}
exports.useArray = useArray;
exports.default = useArray;
