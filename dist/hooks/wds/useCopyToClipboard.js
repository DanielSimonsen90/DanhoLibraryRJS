"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCopyToClipboard = void 0;
const react_1 = require("react");
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
/**
 * Use provided copy function to copy something to clipboard. value is copied value, success is obvious
 */
function useCopyToClipboard() {
    const [value, setValue] = (0, react_1.useState)("");
    const [success, setSuccess] = (0, react_1.useState)(false);
    const copyToClipboard = (text, options) => {
        const result = (0, copy_to_clipboard_1.default)(text, options);
        if (result)
            setValue(text);
        setSuccess(result);
        return { value, success };
    };
    return [copyToClipboard, { value, success }];
}
exports.useCopyToClipboard = useCopyToClipboard;
exports.default = useCopyToClipboard;
