"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSleep = exports.ms = exports.Times = exports.ValidTime = void 0;
exports.ValidTime = /^(\d+(?:\.|,)?\d*)(ms|s|m|h|d|w|M|y)$/;
class Times {
    static get millisecond() { return 1; }
    static get second() { return Times.millisecond * 1000; }
    static get minute() { return Times.second * 60; }
    static get hour() { return Times.minute * 60; }
    static get day() { return Times.hour * 24; }
    static get week() { return Times.day * 7; }
    static get month() {
        const now = new Date();
        return ([1, 3, 5, 7, 8, 10, 12].includes(now.getMonth()) ? 31 :
            [4, 6, 9, 11].includes(now.getMonth()) ? 30 :
                now.getFullYear() % 4 == 0 ? 29 : 28) * Times.day;
    }
    static get year() {
        const now = new Date();
        return (365 + (now.getFullYear() % 4 == 0 ? 1 : 0)) * Times.day;
    }
}
exports.Times = Times;
/**
 * Converts input to milliseconds
 * @param input milliseconds or smart-ms-string (30s, 1h, 3d)
 * @returns input in milliseconds
 */
function ms(input) {
    if (typeof input === 'number')
        return input;
    const match = input.match(exports.ValidTime);
    if (!match)
        throw Error(`Invalid input string "${input}"`);
    const [value, unit] = match;
    const units = new Map([
        ['ms', Times.millisecond],
        ['s', Times.second],
        ['m', Times.minute],
        ['h', Times.hour],
        ['d', Times.day],
        ['w', Times.week],
        ['M', Times.month],
        ['y', Times.year]
    ]);
    return parseInt(value) * units.get(unit);
}
exports.ms = ms;
/**
 * Wait x milliseconds and run callback
 * @param callback Function to call when sleep is done
 * @returns Function - call function, pass sleep time, returns value from callback
 */
function useSleep(callback) {
    return (time) => new Promise((resolve, reject) => {
        return executeTimeout(resolve, reject, callback, ms(time));
    });
}
exports.useSleep = useSleep;
function executeTimeout(resolve, reject, callback, time) {
    try {
        setTimeout(() => resolve(callback()), time);
    }
    catch (err) {
        reject(err.message);
    }
}
exports.default = useSleep;
