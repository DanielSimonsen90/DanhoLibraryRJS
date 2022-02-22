import { Double } from ".";
export declare type HM<Seperator extends string = ':'> = `${Double}${Seperator}${Double}`;
export declare type HMS<Seperator extends string = ':'> = `${HM<Seperator>}${Seperator}${Double}`;
export declare type TimeFormats<Seperator extends string = ':'> = HM<Seperator> | HMS<Seperator>;
export default TimeFormats;
