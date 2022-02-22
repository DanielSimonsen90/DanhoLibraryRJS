"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNow = exports.useCalendarDays = exports.useLastDayOfMonth = exports.useFirstDayOfMonth = exports.fromEwToExtended = void 0;
const danholibraryjs_1 = require("danholibraryjs");
const react_1 = require("react");
const useFormatDate_1 = require("../useFormatDate");
function fromEwToExtended(ew) {
    const long = (array, value) => (array[value] || array[array.length - 1]);
    const short = (array, value) => (array[value] || array[array.length - 1]).substring(0, 3);
    const isPM = ew.getHours() >= 12;
    return {
        time: ew.getTime(),
        date: ew,
        year: ew.getFullYear(),
        month: ew.getMonth() + 1,
        week: (0, useFormatDate_1.weekFrom)(ew),
        weekDay: short(useFormatDate_1.dayNames, ew.getDay() - 1),
        weekDayLong: long(useFormatDate_1.dayNames, ew.getDay() - 1),
        day: ew.getDate(),
        hour: ew.getHours(),
        hourShort: isPM ? 12 - ew.getHours() : ew.getHours(),
        isPM,
        minute: ew.getMinutes(),
        second: ew.getSeconds(),
        millisecond: ew.getMilliseconds(),
        monthName: short(useFormatDate_1.monthNames, ew.getMonth()),
        monthNameLong: long(useFormatDate_1.monthNames, ew.getMonth()),
        get toString() {
            return `${this.weekDay}, ${this.day}/${this.month}/${this.year}`;
        }
    };
}
exports.fromEwToExtended = fromEwToExtended;
function useFirstDayOfMonth(date) {
    return (0, react_1.useMemo)(() => fromEwToExtended(new Date(date.year, date.month - 1, 1)), [date]);
}
exports.useFirstDayOfMonth = useFirstDayOfMonth;
function useLastDayOfMonth(date) {
    return (0, react_1.useMemo)(() => fromEwToExtended(new Date(date.year, date.month - 1, danholibraryjs_1.Time.daysInMonth[date.month - 1])), [date]);
}
exports.useLastDayOfMonth = useLastDayOfMonth;
function useCalendarDays(date) {
    const firstDotM = useFirstDayOfMonth(date);
    const lastDotM = useLastDayOfMonth(date);
    return (0, react_1.useMemo)(() => {
        const result = new Array();
        // First day of the Month isn't a monday, push all days from month prior to date and convert to ExtendedDate
        if (firstDotM.weekDay !== 'Mon') {
            const daysFromMonday = useFormatDate_1.dayNames.findIndex(v => v === firstDotM.weekDayLong); //1
            const previousMonthDays = danholibraryjs_1.Time.daysInMonth[firstDotM.month - 2]; //31
            for (let i = 0; i < daysFromMonday; i++) {
                const setMonth = new Date(firstDotM.time).setMonth(firstDotM.month - 2, previousMonthDays - i); // 31/1/2022
                const date = new Date(setMonth);
                result.push(fromEwToExtended(date));
            }
        }
        // Add first day of the month
        result.push(firstDotM);
        // Add days between first day- and last day of the month
        for (let i = firstDotM.day + 1; i < lastDotM.day; i++) {
            const previous = result[i - 1];
            result.push(fromEwToExtended(new Date(new Date(previous.time).setDate(previous.day + 1))));
            // console.log({result, i, previous, firstDotM, lastDotM});
        }
        //Push last day of the month
        result.push(lastDotM);
        return result;
    }, [date]);
}
exports.useCalendarDays = useCalendarDays;
function getNow() {
    return fromEwToExtended(new Date(new Date().setHours(0, 0, 0, 0)));
}
exports.getNow = getNow;
