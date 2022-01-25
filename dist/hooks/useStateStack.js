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
    const [value, push, { pop, history, pointer }] = (0, useStateWithHistory_1.default)(initialValue, { capacity: 3 });
    console.log('useStateStack, return', { size: history.length, value });
    /**@returns Index of stack item */
    const pushState = (item) => {
        const next = typeof item === "function" ? item(value) : item;
        console.log({ value, next });
        if (value !== next) {
            push(next);
            while (history.length > capacity)
                history.shift();
        }
        return history.length;
    };
    // const pop = () => {
    //     console.log('useStateStack, pop', { value, size: history.length });
    //     // remove(history[pointer + 1]);
    //     // back();
    //     history.pop();
    // };
    return { value, push: pushState, pop, size: history.length };
}
exports.useStateStack = useStateStack;
exports.default = useStateStack;
