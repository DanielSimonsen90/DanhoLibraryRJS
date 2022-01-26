"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateStack = void 0;
const useStateWithHistory_1 = __importDefault(require("./wds/useStateWithHistory"));
function useStateStack(initialValue, options) {
    var _a;
    const capacity = (_a = options === null || options === void 0 ? void 0 : options.capacity) !== null && _a !== void 0 ? _a : 10;
    const [value, push, { pop: _pop, history, setPointer }] = (0, useStateWithHistory_1.default)(initialValue, { capacity: 3 });
    /**@returns Index of stack item */
    const pushState = (item) => {
        const next = typeof item === "function" ? item(value) : item;
        console.log('useStateStack push', { value, next });
        if (value !== next) {
            push(next);
            while (history.length > capacity)
                history.shift();
            setPointer(history.length);
        }
        return history.length;
    };
    const pop = () => {
        console.log('useStateStack pop', { value, history });
        _pop();
    };
    console.log('useStateStack, return', { size: history.length, value });
    return { value, push: pushState, pop, size: history.length };
}
exports.useStateStack = useStateStack;
exports.default = useStateStack;
