# [DanhoLibraryRJS](../../index.md) / [Components](../index.md) / [User Interface](./index.md) / Switch
Switch knob to toggle between ON and OFF state.

SwitchProps extends [BaseProps](../../Utils/Base/Props.md) on the HTMLInputElement, meaning it will accept every input property.

## References
* Components
    * [Icon](Icon.md)

* Utils
    * [BaseProps](../../Utils/Base/Props.md)

## [Module](../../../src/components/Switch.tsx)
```tsx
export type SwitchProps = BaseProps<HTMLInputElement> & {
    /**@default false */
    checked?: boolean;
    
    /**@default false */
    disabled?: boolean;
    
    /**@default false */
    vertical?: boolean;

    /**
     * Render icons for the switch knob
     * @property checked - Icon name for when Switch is checked
     * @property unchecked - Icon name for when Switch is unchecked
     */
    icons?: Omit<IconProps, 'name' | 'checked' | 'vertical'> & {
        checked?: string;
        unchecked?: string;
    }
    onCheckChanged?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
}

export function Switch(props: SwitchProps): React.FunctionComponent<SwitchProps>;
export default Switch;
```