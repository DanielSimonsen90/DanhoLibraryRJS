import { Date } from "danholibraryjs";
import { LongMonth } from "../../utils/Time/DateFormats";
export declare const doubleDigit: (value: number) => string;
export declare const monthNames: LongMonth[];
export declare const dayNames: ("Monday" | "Friday" | "Sunday" | "Tuesday" | "Wednesday" | "Thursday" | "Saturday")[];
export declare const weekFrom: (date: Date) => number;
declare type UseFormatDateReturn<HasDate extends boolean> = HasDate extends true ? (format: string) => string : (date: Date, format: string) => string;
export default function useFormatDate<HasDate extends boolean = true>(date?: Date): UseFormatDateReturn<HasDate>;
export {};
