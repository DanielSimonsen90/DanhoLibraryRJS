# [DanhoLibraryRJS](../../README.md) / [Components](../index.md) / [User Interface](./index.md) / DatePicker
Better looking datepicker than <input type="datetime-local">
> **Note**: Module will be rewritten in the future.

## Items
* [Calendar](./Calendar.md)
* [Hooks](./Hooks.md)

## References

* Components
    * [Button](../User%20Interface/Button.md)

* Hooks
    * [useStateOnChange](../../Hooks/State/useStateOnChange.md)
    * [useUpdateEffect](../../Hooks/Effect/useUpdateEffect.md)

## [Module](../../../src/components/DatePicker/index.tsx)

```tsx
export type DatePickerProps = {
    /** 
     * Allow cilent to pick dates before now
     * @default false 
     */
    allowPastDates?: boolean;

    /**
     * Custom submit title
     * @default Select Date
     */
    buttonSubmitTitle?: string;

    /**
     * Label for the input
     * @default Date
     */
    dateLabelTitle?: string;

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
     * 
     * @default $dd/$MM/$year
     */
    format?: string;

    /**
     * Custom month names
     */
    monthNames?: Array<string>

    /**
     * Run when internal date changes
     */
    onChange(value: Date, formatted: string): void
}

export function DatePicker(props: DatePickerProps): React.FunctionComponent<DatePickerProps>;
export default DatePicker;



export type CalendarProps = {
    format: string;
    onDateSelected(date: Date, event: ClickEvent): void;
    close(): void;

    allowPastDates?: boolean;
    dateNames?: string;
    monthNames?: string;
}

export function Calendar(props: CalendarProps): React.FunctionComponent<CalendarProps>;


export function useFirstDayOfMonth(date: DanhoDate): DanhoDate;
export function useLastDayOfMonth(date: DanhoDate): DanhoDate;
export function useCalendarDays(date: DanhoDate): Array<DanhoDate>;

export function getNow(): DanhoDate;