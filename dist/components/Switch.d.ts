import { ChangeEvent } from "react";
import { BaseProps } from "../utils";
export declare type SwitchProps = BaseProps<HTMLInputElement> & {
    /**@default false */
    checked?: boolean;
    /**@default false */
    disabled?: boolean;
    onCheckChanged?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
};
export declare const Switch: React.FC<SwitchProps>;
