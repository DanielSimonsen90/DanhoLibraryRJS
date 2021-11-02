import { Callback, PromiseReject, PromiseResolve } from "../utils/BaseReact";

export type TimeoutDelay = number | string;
export const ValidTime = /^(\d+(?:\.|,)?\d*)(ms|s|m|h|d|w|M|y)$/;

export class Times {
    public static get millisecond(): number { return 1; }
    public static get second(): number { return Times.millisecond * 1000; }
    public static get minute(): number { return Times.second * 60; }
    public static get hour(): number { return Times.minute * 60; }
    public static get day(): number { return Times.hour * 24 }
    public static get week(): number { return Times.day * 7; }
    public static get month(): number {
        const now = new Date();
        return (
            [1, 3, 5, 7, 8, 10, 12].includes(now.getMonth()) ? 31 : 
            [4, 6, 9, 11].includes(now.getMonth()) ? 30 : 
            now.getFullYear() % 4 == 0 ? 29 : 28
        ) * Times.day; 
    }
    public static get year(): number {
        const now = new Date()
        return (365 + (now.getFullYear() % 4 == 0 ? 1 : 0)) * Times.day
    }
}

/**
 * Converts input to milliseconds
 * @param input milliseconds or smart-ms-string (30s, 1h, 3d)
 * @returns input in milliseconds
 */
export function ms(input: string | number) {
    if (typeof input === 'number') return input;

    const match = input.match(ValidTime);
    if (!match) throw Error(`Invalid input string "${input}"`)

    const [value, unit] = match;
    
    const units = new Map<string, number>([
        ['ms', Times.millisecond],
        ['s', Times.second],
        ['m', Times.minute],
        ['h', Times.hour],
        ['d', Times.day],
        ['w', Times.week],
        ['M', Times.month],
        ['y', Times.year]
    ]);

    return parseInt(value) * (units.get(unit) as number);
}

/**
 * Wait x milliseconds and run callback
 * @param callback Function to call when sleep is done
 * @returns Function - call function, pass sleep time, returns value from callback
 */
export default function useSleep<T>(callback: Callback<T>) {
    return (time: TimeoutDelay) => new Promise<T>((resolve, reject) => {
        return executeTimeout(resolve, reject, callback, ms(time));
    })
}

function executeTimeout<T>(
    resolve: PromiseResolve<T>, 
    reject: PromiseReject, 
    callback: Callback<T>,
    time: number) {
    try { setTimeout(() => resolve(callback()), time); } 
    catch (err) { reject((err as any).message); }
}