export type Double = `${number}${number}`;
export type Quadouble = `${Double}${Double}`;
export * from './DateFormats';
export * from './TimeFormats';
import DateFormats from './DateFormats';
import TimeFormats from './TimeFormats';
export type DateTimeFormats<SepDate extends string = '/', SepTime extends string = ':'> = `${DateFormats<SepDate>} ${TimeFormats<SepTime>}`;
