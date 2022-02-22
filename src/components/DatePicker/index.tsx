import { useState } from "react";
import Icon from 'react-fontawesome';
import { useStateOnChange, useUpdateEffect } from "../../hooks";
import useFormatDate from "./useFormatDate";
import Calendar, { ExtendedDate } from "./Calendar";
import { getNow } from "./Calendar/hooks";

type Props = {
    allowPastDates?: boolean
    onChange(value: ExtendedDate, formatted: string): void,
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
    format?: string
}
export { Props as DatePickerProps }

export function DatePicker({ allowPastDates = false, format = "$dd/$MM/$year", onChange }: Props) {
    const now = getNow();
    const [date, setDate] = useState(now);
    const [calendarMode, setCalendarMode] = useState(false);
    const formatDate = useFormatDate(date);
    const [inputValueFormatted, inputValue, setInputValue] = useStateOnChange(formatDate(format), 500);

    useUpdateEffect(() => onChange(date, inputValueFormatted), [date])

    return (
        <div className="datepicker">
            {calendarMode ? <Calendar onDateSelected={setDate} close={() => setCalendarMode(false)} allowPastDates={allowPastDates} /> :
            <>
                <input type="text" value={calendarMode ? inputValue : inputValueFormatted} onChange={e => setInputValue(e.target.value)} />
                <Icon tabIndex={0} name="calendar" onKeyDown={e => (e.key === 'Enter' || e.key === 'NumpadEnter') && setCalendarMode(true)} onClick={() => setCalendarMode(true)} />
            </>
            }
        </div>
    );
}

export default DatePicker;
export * from './Calendar';