"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineClassName = void 0;
__exportStar(require("./Button"), exports);
__exportStar(require("./Container"), exports);
__exportStar(require("./DatePicker"), exports);
__exportStar(require("./Dropdown"), exports);
__exportStar(require("./Router"), exports);
__exportStar(require("./Switch"), exports);
__exportStar(require("./TabBar"), exports);
__exportStar(require("./TabBarItem"), exports);
function combineClassName(...classNames) {
    return classNames.filter(v => v).join(' ');
}
exports.combineClassName = combineClassName;
