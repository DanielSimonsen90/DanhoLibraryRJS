import { ButtonProps } from "../../components/Button";
import { InputProps } from "../../components/Form/Input";
import { Component } from "../../utils";
type Props = {
    onLogin: (username: string, password: string) => void;
    onLogout: () => void;
    isLoggedIn?: boolean;
    usernameProps?: InputProps<string>;
    passwordProps?: InputProps<string>;
    loginButtonProps?: ButtonProps;
};
type UseLoginReturn = [component: Component | null, logout: () => void];
export declare function useLogin({ onLogin, onLogout, isLoggedIn, usernameProps, passwordProps, loginButtonProps }: Props): UseLoginReturn;
export default useLogin;
