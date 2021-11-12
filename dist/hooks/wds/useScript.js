"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScript = void 0;
const useAsync_1 = __importDefault(require("./useAsync"));
/**
 * Loads script dynamically to the DOM
 * @param url Script url
 */
function useScript(url) {
    return (0, useAsync_1.default)(() => {
        const script = document.createProperElement('script', {
            attributes: [
                ['src', url],
                ['async', 'true']
            ]
        });
        return new Promise((resolve, reject) => {
            script.addEventListener("load", resolve);
            script.addEventListener("error", reject);
            document.body.appendChild(script);
        });
    }, [url]);
}
exports.useScript = useScript;
exports.default = useScript;
