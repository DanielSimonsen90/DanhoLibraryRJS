"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_fontawesome_1 = __importDefault(require("react-fontawesome"));
const hooks_1 = require("../../hooks");
const useFormatDate_1 = __importDefault(require("./useFormatDate"));
const Calendar_1 = __importDefault(require("./Calendar"));
const hooks_2 = require("./Calendar/hooks");
const Button_1 = __importDefault(require("../Button"));
function DatePicker({ onChange, dateNames, monthNames, allowPastDates = false, buttonSubmitTitle = "Select Date", dateLabelTitle = "Date", format = "$dd/$MM/$year", }) {
    const now = (0, hooks_2.getNow)();
    const [date, setDate] = (0, react_1.useState)(now);
    const [calendarMode, setCalendarMode] = (0, react_1.useState)(false);
    const formatDate = (0, useFormatDate_1.default)(date);
    const [inputValue, inputValueFormatted, setInputValue] = (0, hooks_1.useStateOnChange)(formatDate(format), 0);
    (0, hooks_1.useUpdateEffect)(() => onChange(date, inputValueFormatted), [date]);
    return ((0, jsx_runtime_1.jsx)("section", { className: "datepicker", children: calendarMode
            ? (0, jsx_runtime_1.jsx)(Calendar_1.default, { format: format, allowPastDates: allowPastDates, dateNames: dateNames, monthNames: monthNames, onDateSelected: setDate, close: () => setCalendarMode(false) })
            : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "date-input", children: dateLabelTitle }), (0, jsx_runtime_1.jsx)("input", { id: "date-input", type: "text", value: calendarMode ? inputValue : inputValueFormatted, onChange: e => setInputValue(e.target.value) }), (0, jsx_runtime_1.jsx)(react_fontawesome_1.default, { tabIndex: 0, name: "calendar", onKeyDown: e => (e.key === 'Enter' || e.key === 'NumpadEnter') && setCalendarMode(true), onClick: () => setCalendarMode(true) }), (0, jsx_runtime_1.jsx)(Button_1.default, { crud: "create", importance: "primary", onClick: () => onChange(date, inputValueFormatted), value: buttonSubmitTitle })] }) }));
}
exports.DatePicker = DatePicker;
exports.default = DatePicker;
__exportStar(require("./Calendar"), exports);
