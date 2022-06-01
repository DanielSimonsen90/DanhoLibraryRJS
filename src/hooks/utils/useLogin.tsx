import { ChangeEvent, DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";
import Button, { ButtonProps } from "../../components/Button";
import { Component } from "../../utils"

type InputProps<T extends HTMLInputTypeAttribute> = Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 
    "type" | "onChange" | "value"
> & {
    value: T;
    onChange: (value: T) => void;
    type: T;
    label?: string
}

function Input<T extends HTMLInputTypeAttribute>({ value: initialValue, onChange, label, ...props }: InputProps<T>) {
    const [value, setValue] = useState(initialValue);
    const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as T);
        onChange(e.target.value as T);
    }

    if (label && !props.id) throw new Error("Input must have an id if it has a label!");

    return (<>
        {label && <label htmlFor={props.id!}>{label}</label>}
        <input value={value} onChange={_onChange} {...props} />
    </>)
}

type Props = {
    isLoggedIn: boolean,
    onLoginAttempt: (username: string, password: string) => boolean,
    usernameProps?: InputProps<string>,
    passwordProps?: InputProps<string>,
    loginButtonProps?: ButtonProps
}
type UseLoginReturn = [component: Component, isLoggedIn: boolean, logout: () => void];

export function useLogin({ isLoggedIn: initialIsLogin, onLoginAttempt, usernameProps, passwordProps, loginButtonProps }: Props): UseLoginReturn {
    const [isLoggedIn, setIsLoggedIn] = useState(initialIsLogin);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = () => setIsLoggedIn(onLoginAttempt(username, password));

    const component = (
        <div className="login-container">
            <form action="">
                <Input value={username} onChange={setUsername} type="text" id="username" label="Username" {...usernameProps} />
                <Input value={password} onChange={setPassword} type="password" id="password" label="Password" {...passwordProps} />
                <Button importance="primary" crud="create" type="submit" onClick={onSubmit}>Login</Button>
            </form>
        </div>
    );

    const logout = () => setIsLoggedIn(false);

    return [component, isLoggedIn, logout];
}