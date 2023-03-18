import { HTMLInputTypeAttribute, DetailedHTMLProps, InputHTMLAttributes } from "react";
export type InputProps<T extends HTMLInputTypeAttribute> = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type" | "onChange" | "value"> & {
    value: T;
    onChange: (value: T) => void;
    type: T;
    label?: string;
};
export declare function Input<T extends HTMLInputTypeAttribute>({ value: initialValue, onChange, label, ...props }: InputProps<T>): JSX.Element;
export default Input;
