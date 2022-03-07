"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = exports.useRouterChanged = exports.createRoute = exports.ensureSlash = exports.Route = exports.Redirect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
Object.defineProperty(exports, "Route", { enumerable: true, get: function () { return react_router_dom_1.Route; } });
Object.defineProperty(exports, "Redirect", { enumerable: true, get: function () { return react_router_dom_1.Redirect; } });
function ensureSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
}
exports.ensureSlash = ensureSlash;
function createRoute(path, component) {
    return [ensureSlash(path), component];
}
exports.createRoute = createRoute;
function useRouterChanged(onChange) {
    const [location, setLocation] = (0, react_1.useState)(window.location);
    (0, react_1.useEffect)(() => {
        var _a;
        const propValue = (loc, key) => loc[key];
        const changedProps = Object.keys(window.location)
            .filter(k => propValue(window.location, k) !== propValue(location, k)) //Property changed
            .filter(k => typeof onChange === 'function' ? true : propValue(onChange, k) != null); //Subscribed to property
        for (const prop of changedProps) {
            const from = location[prop];
            const to = window.location[prop];
            if (typeof onChange === 'function')
                onChange(from, to, window.location);
            else
                (_a = onChange[prop]) === null || _a === void 0 ? void 0 : _a.call(onChange, from, to, window.location);
        }
        setLocation(window.location);
    }, [window.location]);
    return location;
}
exports.useRouterChanged = useRouterChanged;
function Router({ routes, fallback }) {
    const switchData = routes.map(([path, component]) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ensureSlash(path), component: component }, path)));
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Switch, { children: [switchData, (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { component: fallback }, void 0)] }, void 0) }, void 0));
}
exports.Router = Router;
exports.default = Router;
