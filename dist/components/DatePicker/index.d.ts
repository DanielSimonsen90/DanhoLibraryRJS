/// <reference types="react" />
import { Date } from "danholibraryjs";
declare type Props = {
    onChange(value: Date, formatted: string): void;
    allowPastDates?: boolean;
    buttonSubmitTitle?: string;
    dateLabelTitle?: string;
    dateNames?: Array<string>;
    /**
     * Formatting the date in the input.
     * @$year Replaced with year of the date
     *
     * @$month Replaced with month name
     * @$MM replaced with double digit month
     * @$M replaced with single digit month
     *
     * @$week replaced with week of the year
     *
     * @$weekday Replaced with day of the week
     * @$dd Replaced with double digit day
     * @$d Replaced with single digit day
     *
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
    monthNames?: Array<string>;
};
export { Props as DatePickerProps };
export declare function DatePicker({ onChange, dateNames, monthNames, allowPastDates, buttonSubmitTitle, dateLabelTitle, format, }: Props): JSX.Element;
export default DatePicker;
export * from './Calendar';
