import { LongMonth } from "../../utils/Time/DateFormats";
import { ExtendedDate } from "./Calendar";
export declare const doubleDigit: (value: number) => string;
export declare const monthNames: LongMonth[];
export declare const dayNames: ("Monday" | "Friday" | "Sunday" | "Tuesday" | "Wednesday" | "Thursday" | "Saturday")[];
export declare const weekFrom: (date: Date) => number;
export default function useFormatDate(date: ExtendedDate): (format: string) => string;
