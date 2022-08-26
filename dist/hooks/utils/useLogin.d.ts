import { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { ButtonProps } from "../../components/Button";
import { Component } from "../../utils";
declare type InputProps<T extends HTMLInputTypeAttribute> = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type" | "onChange" | "value"> & {
    value: T;
    onChange: (value: T) => void;
    type: T;
    label?: string;
};
declare type Props = {
    onLogin: (username: string, password: string) => void;
    onLogout: () => void;
    isLoggedIn?: boolean;
    usernameProps?: InputProps<string>;
    passwordProps?: InputProps<string>;
    loginButtonProps?: ButtonProps;
};
declare type UseLoginReturn = [component: Component | null, logout: () => void];
export declare function useLogin({ onLogin, onLogout, isLoggedIn, usernameProps, passwordProps, loginButtonProps }: Props): UseLoginReturn;
export default useLogin;
