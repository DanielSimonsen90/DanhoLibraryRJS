import { ChangeEvent } from "react";
import { BaseProps } from "../utils";
import { IconProps } from './Icon';
export type SwitchProps = BaseProps<HTMLInputElement> & {
    /**@default false */
    checked?: boolean;
    /**@default false */
    disabled?: boolean;
    /**@default false */
    vertical?: boolean;
    onCheckChanged?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
    icons?: Omit<IconProps, 'name' | 'checked' | 'vertical'> & {
        checked?: string;
        unchecked?: string;
    };
};
export declare function Switch(props: SwitchProps): JSX.Element;
export default Switch;
