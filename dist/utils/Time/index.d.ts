export declare type Double = `${number}${number}`;
export declare type Quadouble = `${Double}${Double}`;
export * from './DateFormats';
export * from './TimeFormats';
import DateFormats from './DateFormats';
import TimeFormats from './TimeFormats';
export declare type DateTimeFormats<SepDate extends string = '/', SepTime extends string = ':'> = `${DateFormats<SepDate>} ${TimeFormats<SepTime>}`;
