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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_fontawesome_1 = __importDefault(require("react-fontawesome"));
const hooks_1 = require("./hooks");
const useFormatDate_1 = require("../useFormatDate");
const Time_1 = require("../../../utils/Time");
function Calendar({ allowPastDates = false, onDateSelected, close }) {
    const now = (0, hooks_1.getNow)();
    const [selectedDate, setSelectedDate] = (0, react_1.useState)(now);
    const dates = (0, hooks_1.useCalendarDays)(selectedDate);
    const onDirectionClicked = (direction) => setSelectedDate(v => ({ ...v, month: direction === 'previous' ? v.month - 1 : v.month + 1 }));
    const _onDateSelected = (date, e) => {
        if (!allowPastDates && date.time < now.time)
            return;
        onDateSelected(date, e);
        close();
    };
    const setDataTime = (date) => (date.month < now.month || date.day < now.day ? 'past' :
        date.day === now.day ? 'today' :
            date.month > now.month ? 'next-month' : 'future');
    return ((0, jsx_runtime_1.jsxs)("div", { className: "calendar", children: [(0, jsx_runtime_1.jsxs)("header", { children: [selectedDate.month > now.month && (0, jsx_runtime_1.jsx)(react_fontawesome_1.default, { name: "angle-left", onClick: () => onDirectionClicked('previous') }, void 0), (0, jsx_runtime_1.jsxs)("h1", { children: [(0, jsx_runtime_1.jsx)("span", { children: selectedDate.monthNameLong }, void 0), " ", (0, jsx_runtime_1.jsx)("span", { children: selectedDate.year }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(react_fontawesome_1.default, { name: "angle-right", onClick: () => onDirectionClicked('next') }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("hr", {}, void 0), (0, jsx_runtime_1.jsx)("section", { className: "weekdays", children: useFormatDate_1.dayNames.map(day => (0, jsx_runtime_1.jsx)("h2", { className: 'weekday', "data-workday": Time_1.weekdays.includes(day), "data-weekend": Time_1.weekend.includes(day), children: day }, day)) }, void 0), (0, jsx_runtime_1.jsx)("section", { className: "calendar-dates", children: dates.map(date => ((0, jsx_runtime_1.jsx)("div", { className: 'calendar-date', onClick: e => _onDateSelected(date, e), "data-time": setDataTime(date), "data-selected": date === selectedDate ? 'selected' : null, children: date.day }, `${date.day}-${date.month}-${date.year}`))) }, void 0)] }, void 0));
}
exports.Calendar = Calendar;
exports.default = Calendar;
__exportStar(require("./hooks"), exports);
