import { ChangeEvent } from "react";
import { BaseProps } from "../utils";
export declare type SwitchProps = BaseProps<HTMLInputElement> & {
    /**@default false */
    checked?: boolean;
    /**@default false */
    disabled?: boolean;
    /**@default false */
    vertical?: boolean;
    onCheckChanged?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
    icons?: {
        checked?: string;
        unchecked?: string;
    };
};
export declare const Switch: React.FC<SwitchProps>;
