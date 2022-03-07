"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnlineStatus = void 0;
const react_1 = require("react");
const useEventListener_1 = __importDefault(require("../events/useEventListener"));
/**
 * Client is online/offline on internet
 */
function useOnlineStatus() {
    const [online, setOnline] = (0, react_1.useState)(navigator.onLine);
    (0, useEventListener_1.default)("online", () => setOnline(navigator.onLine));
    (0, useEventListener_1.default)("offline", () => setOnline(navigator.onLine));
    return online;
}
exports.useOnlineStatus = useOnlineStatus;
exports.default = useOnlineStatus;
