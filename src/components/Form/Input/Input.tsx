import { HTMLInputTypeAttribute, DetailedHTMLProps, InputHTMLAttributes, useState, ChangeEvent } from "react";

export type InputProps<T extends HTMLInputTypeAttribute> = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type" | "onChange" | "value"
> & {
  value: T;
  onChange: (value: T) => void;
  type: T;
  label?: string;
};

export function Input<T extends HTMLInputTypeAttribute>({ value: initialValue, onChange, label, ...props }: InputProps<T>) {
  const [value, setValue] = useState(initialValue);
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
    onChange(e.target.value as T);
  };

  if (label && !props.id) throw new Error("Input must have an id if it has a label!");

  return (<>
    {label && <label htmlFor={props.id!}>{label}</label>}
    <input value={value} onChange={_onChange} {...props} />
  </>);
}

export default Input;