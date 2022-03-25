import { ChangeEvent, useRef, useState } from "react";
import { BaseProps } from "../utils";

export type SwitchProps = BaseProps<HTMLInputElement> & {
    /**@default false */
    checked?: boolean;
    /**@default false */
    disabled?: boolean;
    onCheckChanged?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
}

// Switch component is a simple checkbox with a custom style
// Wrapper - .switch with an data-chcked attribute
// Wrapper - onClick should toggle the Input's checked property
// Wrapper - Should be styled to look like a switch
// Input - Hidden and saved in a ref for the Wrapper
export const Switch: React.FC<SwitchProps> = (props) => {
    const { checked, disabled, onCheckChanged, ...rest } = props;
    const ref = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onCheckChanged) {
            onCheckChanged(e.target.checked, e);
        }
    }

    return (
        <div className="switch" data-checked={checked} onClick={() => ref.current?.click()}>
            <input type="checkbox" ref={ref} checked={checked} disabled={disabled} onChange={handleChange} style={{ display: "none" }} {...rest} />
        </div>
    );
}