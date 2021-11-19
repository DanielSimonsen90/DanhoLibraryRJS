"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = exports.Route = exports.Redirect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
Object.defineProperty(exports, "Route", { enumerable: true, get: function () { return react_router_dom_1.Route; } });
Object.defineProperty(exports, "Redirect", { enumerable: true, get: function () { return react_router_dom_1.Redirect; } });
function Router({ children, routes }) {
    const switchData = (routes === null || routes === void 0 ? void 0 : routes.map(([path, component]) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: path, component: component }, path)))) || children;
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Switch, { children: switchData }, void 0) }, void 0));
}
exports.Router = Router;
exports.default = Router;
