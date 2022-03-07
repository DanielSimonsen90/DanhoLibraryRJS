import { useState, useMemo, useEffect } from "react";
import { Date } from "danholibraryjs";
import { StateObj } from "../../../utils";
import { getNow } from "../Calendar";
import useFormatDate, { doubleDigit } from "../useFormatDate";

type Props = {
    type?: '12h' | '24h',
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
    format?: string
    onChange(date: Date, formatted: string): void
}

type TimestampImperialProps = StateObj<string, 'Apm'>
function TimestampImperial({ apm, setApm: setAPM }: TimestampImperialProps) {
    return (<>
        <input className="timestamp-picker-apm" type="text" list="apm" onChange={e => setAPM(e.target.value)} value={apm} />
        <datalist id="apm">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
        </datalist>
    </>)
}

export default function TimestampPicker({ type = '24h', format = '$hh24:$mm', onChange }: Props) {
    const now = getNow();
    const [hour, setHour] = useState(now.hours.toString());
    const [minute, setMinute] = useState(doubleDigit(now.minutes));
    const [apm, setAPM] = useState(now.isPM ? 'PM' : 'AM');
    const selectedDate = useMemo<Date>(() => ({...now} as Date).set({
        hours: parseInt(hour),
        minutes: parseInt(minute)
    }), [hour, minute]);
    const formatDate = useFormatDate(selectedDate);

    useEffect(() => { onChange(selectedDate, formatDate(format)) }, [hour, minute, apm])

    return (
        <div className="timestamp-picker">
            <input className="timestamp-picker-hour" type="number" onChange={e => setHour(e.target.value)} value={hour} />
            <input className="timestamp-picker-minute" type="number" onChange={e => setMinute(doubleDigit(parseInt(e.target.value)))} value={minute} />
            {type === '12h' && <TimestampImperial apm={apm} setApm={setAPM} />}
        </div>
    );
}