import { Callback } from "../utils/BaseReact";
export declare type TimeoutDelay = number | string;
export declare const ValidTime: RegExp;
export declare class Times {
    static get millisecond(): number;
    static get second(): number;
    static get minute(): number;
    static get hour(): number;
    static get day(): number;
    static get week(): number;
    static get month(): number;
    static get year(): number;
}
/**
 * Converts input to milliseconds
 * @param input milliseconds or smart-ms-string (30s, 1h, 3d)
 * @returns input in milliseconds
 */
export declare function ms(input: string | number): number;
/**
 * Wait x milliseconds and run callback
 * @param callback Function to call when sleep is done
 * @returns Function - call function, pass sleep time, returns value from callback
 */
export declare function useSleep<T>(callback: Callback<T>): (time: TimeoutDelay) => Promise<T>;
export default useSleep;
