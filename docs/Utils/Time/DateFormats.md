# [DanhoLibraryRJS](../../../index.md) / [Utils](../index.md) / [Time](./index.md) / DateFormats
Utility types to formatting dates.

## [Module](../../../src/utils/Time/DateFormats.ts)
```ts
export type LongMonth = 'Janurary' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
export type ShortMonth = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';
export type Month = LongMonth | ShortMonth;

type Ends<Date extends number> = 
    Date extends 1 ? 'st' :
    Date extends 2 ? 'nd' : 
    Date extends 3 ? 'rd' : 
'th';

export type ShortDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
export type LongDay = `${'Mon' | 'Tues' | 'Wednes' | 'Thurs' | 'Fri' | 'Satur' | 'Sun'}day`;
export type Day = ShortDay | LongDay;

export const weekdays = new Array<Day>(
    'Mon', 'Monday',
    'Tue', 'Tuesday',
    'Wed', 'Wednesday',
    'Thu', 'Thursday',
    'Fri', 'Friday'
);
export const weekend = new Array<Day>(
    'Fri', 'Friday',
    'Sat', 'Saturday',
    'Sun', 'Sunday'
);

type ShortFormat<
    MM extends Month = Month, 
    dd extends number = number
> = `${dd}${Ends<dd>} ${MM}, ${Quadouble}`;
type LongFormat<
    WeekDay extends Day = Day,
    dd extends number = number,
    MM extends Month = Month,
> = `${WeekDay}, ${Ends<dd>} ${MM} ${Quadouble}`;

export type DateFormats<Seperator extends string = '/'> = 
| `${Double}${Seperator}${Double}${Seperator}${Double | Quadouble}`
| ShortFormat
| LongFormat
;
export default DateFormats;
```