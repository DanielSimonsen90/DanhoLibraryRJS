"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimation = void 0;
const danholibraryjs_1 = require("danholibraryjs");
const useStorage_1 = require("../state/useStorage");
const useMediaQuery_1 = __importDefault(require("./useMediaQuery"));
/**
 * Adds className to element matching query, and if baseTime provided, removes className after baseTime
 * @param query Query to get element
 * @param className Class to add
 * @param baseTime Base time to wait until className is removed. If left undefined, class will not be removed
 */
function useAnimation(query, className, baseTime) {
    const prefersAnimations = (0, useMediaQuery_1.default)('prefers-reduced-motion: no-preference');
    const [{ animations: allowAnimations }, setAnimations] = (0, useStorage_1.useLocalStorage)('settings', {
        animations: document.readyState !== 'complete'
            ? null
            : prefersAnimations
    });
    return ({ time, className: additionalClassName = '' } = {}) => new Promise((resolve, reject) => {
        if (document.readyState !== 'complete')
            return;
        if (allowAnimations === null)
            setAnimations({ animations: prefersAnimations });
        try {
            const el = document.querySelector(query);
            if (!el)
                throw new Error(`Invalid query: ${query}`);
            el.classList.add(className.replace('.', ''));
            if (!time && !baseTime)
                return resolve(el);
            setTimeout(() => {
                el.classList.remove(...[
                    className.replace('.', ''),
                    additionalClassName
                ].filter(v => v));
                resolve(el);
            }, allowAnimations ? (0, danholibraryjs_1.ms)(time || baseTime) : 0);
        }
        catch (err) {
            reject(err);
        }
    });
}
exports.useAnimation = useAnimation;
;
exports.default = useAnimation;
