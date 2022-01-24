"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateStack = void 0;
const react_1 = require("react");
const useArrayState_1 = __importDefault(require("./wds/useArrayState"));
function useStateStack(initialValue, options) {
    var _a;
    const capacity = (_a = options === null || options === void 0 ? void 0 : options.capacity) !== null && _a !== void 0 ? _a : 10;
    const { length: size, index, push, remove, shift, value: arr } = (0, useArrayState_1.default)(initialValue ? [initialValue] : []);
    const value = (0, react_1.useMemo)(() => index(size - 1), [size]);
    (0, react_1.useEffect)(() => {
        console.log('useStateStack, useEffect', {
            size, value: value != null && value == index(size - 1), arr
        });
    });
    /**@returns Index of stack item */
    const pushState = (0, react_1.useCallback)((item) => {
        const _item = typeof item === "function" ? item(value) : item;
        if (index(size) !== _item) {
            if (size < length - 1)
                remove(size + 1);
            push(_item);
            while (length > capacity)
                shift();
        }
        return size;
    }, [capacity, value, size]);
    const pop = (0, react_1.useCallback)(() => {
        console.log('useStateStack, pop', { arr, value, size });
        remove(value);
    }, [value, size]);
    return { value, push: pushState, pop, size };
}
exports.useStateStack = useStateStack;
exports.default = useStateStack;
