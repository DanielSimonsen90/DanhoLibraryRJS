"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekFrom = exports.dayNames = exports.monthNames = exports.doubleDigit = void 0;
const danholibraryjs_1 = require("danholibraryjs");
const react_1 = require("react");
const doubleDigit = (value) => value.toString().length < 2 ? `0${value}` : value.toString();
exports.doubleDigit = doubleDigit;
exports.monthNames = new Array('Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
exports.dayNames = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
const weekFrom = (date) => Math.round(new danholibraryjs_1.TimeSpan(new Date(date.getFullYear(), 1, 1), date.getTime()).getTotalDays() / 7);
exports.weekFrom = weekFrom;
function formatDate(date, format) {
    return format
        .replaceAll('$year', date.year.toString())
        .replaceAll('$month', exports.monthNames[date.month])
        .replaceAll('$MM', (0, exports.doubleDigit)(date.month))
        .replaceAll('$M', date.month.toString())
        .replaceAll('$week', date.week.toString())
        .replaceAll('$weekday', date.weekDay)
        .replaceAll('$dd', (0, exports.doubleDigit)(date.day))
        .replaceAll('$d', date.day.toString())
        .replaceAll('$hh12', `${(0, exports.doubleDigit)(date.hour)}${date.hour < 12 ? 'AM' : 'PM'}`)
        .replaceAll('$h12', `${date.hour > 12 ? 12 - date.hour : date.hour}${date.hour < 12 ? 'AM' : 'PM'}`)
        .replaceAll('$hh24', (0, exports.doubleDigit)(date.hour))
        .replaceAll('$h24', date.hour.toString())
        .replaceAll('$mm', (0, exports.doubleDigit)(date.minute))
        .replaceAll('$m', date.minute.toString())
        .replaceAll('$ss', (0, exports.doubleDigit)(date.second))
        .replaceAll('$s', date.second.toString())
        .replaceAll('$msms', (0, exports.doubleDigit)(date.millisecond))
        .replaceAll('$ms', date.millisecond.toString())
        .replaceAll('$relative', new danholibraryjs_1.TimeSpan(new Date(), date.date).toString());
}
function useFormatDate(date) {
    const noDate = (0, react_1.useCallback)((date, format) => formatDate(date, format), []);
    const hasDate = (0, react_1.useCallback)((format) => date && formatDate(date, format), [date]);
    return date ? hasDate : noDate;
}
exports.default = useFormatDate;
