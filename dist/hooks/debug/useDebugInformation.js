"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebugInformation = void 0;
const danholibraryjs_1 = require("danholibraryjs");
const react_1 = require("react");
const useRenderCount_1 = __importDefault(require("./useRenderCount"));
/**
 * Debug component in details
 * @param componentName Name of the component to debug
 * @param props Component props
 * @param prefix Preferred console.log prefix. Default = "[debug-info]"
 * @returns Debug information
 */
function useDebugInformation(componentName, props, prefix = "[debug-info]") {
    const timesRendered = (0, useRenderCount_1.default)();
    const changedProps = (0, react_1.useRef)({});
    const previousProps = (0, react_1.useRef)(props);
    const lastRenderTimestamp = (0, react_1.useRef)(Date.now());
    const propKeys = Object.keys({ ...props, ...previousProps });
    changedProps.current = propKeys.reduce((obj, key) => {
        if (props[key] === previousProps.current[key])
            return obj;
        return {
            ...obj,
            [key]: { previous: previousProps.current[key], current: props[key] },
        };
    }, {});
    const info = {
        timesRendered,
        changedProps: changedProps.current,
        timeSinceLastRender: new danholibraryjs_1.TimeSpan(lastRenderTimestamp.current),
        lastRenderTimestamp: lastRenderTimestamp.current,
    };
    (0, react_1.useEffect)(() => {
        previousProps.current = props;
        lastRenderTimestamp.current = Date.now();
        console.log(prefix, componentName, info);
    });
    return info;
}
exports.useDebugInformation = useDebugInformation;
exports.default = useDebugInformation;
