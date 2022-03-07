/// <reference types="react" />
import { Date } from "danholibraryjs";
declare type Props = {
    type?: '12h' | '24h';
    /**
     * @$hh12 Replaced with double digit hour in 12-hour format
     * @$hh24 Replaced with double digit hour in 24-hour format
     * @$h12 Replaced with single digit hour in 12-hour format
     * @$h24 Replaced with single digit hour in 24-hour format
     *
     * @$mm Replaced with double digit minute
     * @$m Replaced with single digit minute
     *
     * @$ss Replaced with double digit second
     * @$s Replaced with single digit second
     *
     * @msms Replaced with double digit millisecond
     * @ms Replaced with single digit millisecond
     *
     * @$relative Replaced with relative timeformat as TimeSpan
     */
    format?: string;
    onChange(date: Date, formatted: string): void;
};
export default function TimestampPicker({ type, format, onChange }: Props): JSX.Element;
export {};
