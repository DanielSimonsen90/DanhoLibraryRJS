"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabBarItem = exports.createTabBarItem = void 0;
function createTabBarItem(title, component) {
    return { title, component };
}
exports.createTabBarItem = createTabBarItem;
function TabBarItem({ component }) {
    return typeof component === 'function' ? component() : component;
}
exports.TabBarItem = TabBarItem;
exports.default = TabBarItem;
