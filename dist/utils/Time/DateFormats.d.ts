import { Double, Quadouble } from ".";
export declare type LongMonth = 'Janurary' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
export declare type ShortMonth = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';
export declare type Month = LongMonth | ShortMonth;
declare type Ends<Date extends number> = Date extends 1 ? 'st' : Date extends 2 ? 'nd' : Date extends 3 ? 'rd' : 'th';
export declare type ShortDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
export declare type LongDay = `${'Mon' | 'Tues' | 'Wednes' | 'Thurs' | 'Fri' | 'Satur' | 'Sun'}day`;
export declare type Day = ShortDay | LongDay;
export declare const weekdays: Day[];
export declare const weekend: Day[];
declare type ShortFormat<MM extends Month = Month, dd extends number = number> = `${dd}${Ends<dd>} ${MM}, ${Quadouble}`;
declare type LongFormat<WeekDay extends Day = Day, dd extends number = number, MM extends Month = Month> = `${WeekDay}, ${Ends<dd>} ${MM} ${Quadouble}`;
export declare type DateFormats<Seperator extends string = '/'> = `${Double}${Seperator}${Double}${Seperator}${Double | Quadouble}` | ShortFormat | LongFormat;
export default DateFormats;
