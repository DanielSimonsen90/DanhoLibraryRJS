"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDisableAnimation = void 0;
const danholibraryjs_1 = require("danholibraryjs");
const useMediaQuery_1 = __importDefault(require("./wds/useMediaQuery"));
function useDisableAnimation(query, reverseClass, rootTime) {
    const allowAnimations = (0, useMediaQuery_1.default)('(prefers-reduced-motion: no-preference)');
    return (time) => {
        const el = document.querySelector(query);
        if (!el)
            throw new Error(`Invalid query: ${query}`);
        el.classList.add(reverseClass);
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(el.classList.remove(reverseClass));
                }, allowAnimations ? (0, danholibraryjs_1.ms)(time !== null && time !== void 0 ? time : rootTime) : 0);
            }
            catch (err) {
                reject(err);
            }
        });
    };
}
exports.useDisableAnimation = useDisableAnimation;
exports.default = useDisableAnimation;
