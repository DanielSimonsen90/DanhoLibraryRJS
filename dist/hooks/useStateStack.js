"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateStack = void 0;
const react_1 = require("react");
function useStateStack(initialValue, options) {
    var _a;
    const capacity = (_a = options === null || options === void 0 ? void 0 : options.capacity) !== null && _a !== void 0 ? _a : 10;
    const [array, setArray] = (0, react_1.useState)(initialValue ? [initialValue] : []);
    const size = (0, react_1.useMemo)(() => array.length, [array]);
    const value = (0, react_1.useMemo)(() => array[size - 1], [size]);
    const push = (item) => {
        if (!item)
            return -1;
        else if (array.includes(item))
            console.warn('Pushed item to stack, that was already in stack', {
                stack: array, item, foundAt: array.indexOf(item)
            });
        let currentSize = size;
        while (currentSize + 1 > capacity) {
            array.shift();
            currentSize--;
        }
        setArray(a => [...a, item]);
        return size;
    };
    const pop = () => setArray(a => a.slice(0, -1));
    return { value, push, pop, size };
}
exports.useStateStack = useStateStack;
exports.default = useStateStack;
