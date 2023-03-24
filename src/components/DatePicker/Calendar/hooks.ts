import { Time, Date } from "danholibraryjs";
import { useCallback, useMemo } from "react";

export function useFirstDayOfMonth(date: Date) {
  return useMemo(() => new Date({ years: date.year, months: date.month, days: 1 }), [date]);
}
export function useLastDayOfMonth(date: Date) {
  return useMemo(() => new Date({ years: date.year, months: date.month, days: Time.daysInMonth[date.month - 1] }), [date]);
}

export function useCalendarDays(date: Date) {
  const firstDotM = useFirstDayOfMonth(date);
  const lastDotM = useLastDayOfMonth(date);
  const key = useMemo(() => firstDotM.toString(), [firstDotM]);
  const calculate = useCallback((rendered: number): Array<Date> => {
    const result = {
      [key]: new Array<Date>()
    };
    console.log('Starting from', {
      result, props: [firstDotM, date, lastDotM]
    });

    // First day of the Month isn't a Monday, push all days from month prior to date and convert to Date
    if (firstDotM.weekDayShort !== 'Mon') {
      const daysFromMonday = Time.DayNames.findIndex(v => v === firstDotM.weekDay);
      const previousMonthDays = Time.daysInMonth[firstDotM.month - 2] || Time.daysInMonth[12 - firstDotM.month - 2];

      for (let i = 0; i < daysFromMonday; i++) {
        const item = new Date(firstDotM.time).set({
          months: firstDotM.month - 2,
          days: previousMonthDays - i
        });
        result[key].push(item);

        console.log('Iterate previous month', { daysFromMonday, previousMonthDays, date, result: result[key][i], item });

      }
    }

    // Add first day of the month
    result[key].push(firstDotM);

    // Add days between first day- and last day of the month
    for (let i = firstDotM.day + 1; i < lastDotM.day; i++) {
      const previous = result[key][i - 1];
      result[key].push(new Date(previous.time).set({ days: previous.day + 1 }));
      // console.log({result[key], i, previous, firstDotM, lastDotM});
    }

    //Push last day of the month
    result[key].push(lastDotM);

    // Last day of the Month isn't a Sunday, push remaining days and convert to Date
    if (lastDotM.weekDayShort !== 'Sun') {
      const daysInAWeek = Math.round(Time.week / Time.day);
      const daysTillSunday = daysInAWeek - Time.DayNames.findIndex(v => v === lastDotM.weekDay);

      for (let i = 1; i < daysTillSunday; i++) {
        const date = new Date(lastDotM.time).set({ months: lastDotM.month, days: i });
        result[key].push(date);
      }
    }

    console.log('Return result[key]', { props: [firstDotM, date, lastDotM], result: result[key] });

    return result[key].reduce((actualResult, date) => {
      if (!actualResult.some(d => d.time === date.time)) actualResult.push(date);
      return actualResult;
    }, new Array<Date>());
  }, [firstDotM]);

  return useMemo(() => calculate(0), [firstDotM]);
}

export function getNow() {
  return new Date().set({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });
}