import { LongMonth } from "../../utils/Time/DateFormats";
import { ExtendedDate } from "./Calendar";
export declare const doubleDigit: (value: number) => string;
export declare const monthNames: LongMonth[];
export declare const dayNames: ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")[];
export declare const weekFrom: (date: Date) => number;
declare type UseFormatDateReturn<HasDate extends boolean> = HasDate extends true ? (format: string) => string : (date: ExtendedDate, format: string) => string;
export default function useFormatDate<HasDate extends boolean = true>(date?: ExtendedDate): UseFormatDateReturn<HasDate>;
export {};
