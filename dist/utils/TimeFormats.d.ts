import { Double } from "utils";
export declare type HM<Seperator extends string = ':'> = `${Double}${Seperator}${Double}`;
export declare type HMS<Seperator extends string = ':'> = `${HM<Seperator>}${Seperator}${Double}`;
