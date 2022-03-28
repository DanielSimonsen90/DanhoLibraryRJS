import { ChangeEvent, createRef, useEffect, useMemo, useRef, useState } from "react";
import { BaseProps } from "../utils";
import Icon from 'react-fontawesome';

export type SwitchProps = BaseProps<HTMLInputElement> & {
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
    }
}

// Switch component is a simple checkbox with a custom style
// Wrapper - .switch with an data-chcked attribute
// Wrapper - onClick should toggle the Input's checked property
// Wrapper - Should be styled to look like a switch
// Input - Hidden and saved in a ref for the Wrapper
export const Switch: React.FC<SwitchProps> = (props) => {
    const { checked, disabled, vertical, icons, onCheckChanged, ...rest } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const switchRef = useRef<HTMLDivElement>(null);
    const icon = useMemo(() => icons ? checked ? icons.checked : icons.unchecked : undefined, [icons, checked]);
    
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => onCheckChanged?.(e.target.checked, e);

    return (
        <div ref={switchRef} className="switch" data-checked={checked} data-vertical={vertical} 
            onClick={() => inputRef.current?.click()}
        >
            {icon && <Icon  name={icon} style={{
                position: 'absolute',
                left: !vertical && checked ? 'calc(.9em / 2)' : vertical ? '50%' : 'auto',
                right: !vertical && !checked ? '-.6em' : 'auto',
                top: !vertical ? '50%' : checked ? '.6em' : 'auto',
                bottom: vertical && !checked ? 'calc(-.9em / 2)' : 'auto',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                transition: 'all var(--transition-time) ease-in-out',
            }} />}
            <input type="checkbox" ref={inputRef} checked={checked} disabled={disabled} style={{ display: "none" }}
                onChange={onInputChange} 
                {...rest} 
            />
        </div>
    );
}