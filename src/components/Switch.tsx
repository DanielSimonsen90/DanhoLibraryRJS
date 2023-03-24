import { ChangeEvent, useMemo, useRef, useState } from "react";
import { classNames } from ".";
import { BaseProps } from "../utils";
import Icon, { IconProps } from './Icon';

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

export function Switch(props: SwitchProps) {
  const { checked, disabled, vertical, icons, onCheckChanged, className, id, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const switchRef = useRef<HTMLDivElement>(null);
  const iconName = useMemo(() => icons ? checked ? icons.checked : icons.unchecked : undefined, [icons, checked]);
  const [iconAnimation, setIconAnimation] = useState('fade-in');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => onCheckChanged?.(e.target.checked, e);
  const onIconMount = () => setIconAnimation('fade-in');
  const onIconUnmount = () => setIconAnimation('fade-out');

  return (
    <div ref={switchRef} id={id} className={classNames('switch', className)}
      data-checked={checked} data-vertical={vertical}
      onClick={() => inputRef.current?.click()}
    >
      <div className="switch-circle">
        {iconName && <Icon name={iconName} className="icon" style={{
          animation: `${iconAnimation} var(--transition-time) ease-in-out forwards`,
          // left: !vertical && checked ? 'calc(var(--size-bottom-left) / 2)' : vertical ? '50%' : 'auto',
          // right: !vertical && !checked ? 'calc(var(--size-top-right) * -1)' : 'auto',
          // top: !vertical ? '50%' : checked ? 'var(--size-top-right)' : 'auto',
          // bottom: vertical && !checked ? 'calc(var(--size-bottom-left) / 2)' : 'auto',
        }} onMount={onIconMount} onUnmount={onIconUnmount} />}
      </div>
      <input type="checkbox" ref={inputRef} checked={checked} disabled={disabled} style={{ display: "none" }}
        onChange={onInputChange}
        {...rest}
      />
    </div>
  );
}
export default Switch;