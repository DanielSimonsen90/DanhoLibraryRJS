import { ChangeEvent, DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";
import Button, { ButtonProps } from "../../components/Button";
import { InputProps, Input } from "../../components/Form/Input";
import { Component } from "../../utils";

type Props = {
  onLogin: (username: string, password: string) => void,
  onLogout: () => void,

  isLoggedIn?: boolean,
  usernameProps?: InputProps<string>,
  passwordProps?: InputProps<string>,
  loginButtonProps?: ButtonProps;
};
type UseLoginReturn = [component: Component | null, logout: () => void];

export function useLogin({
  onLogin, onLogout,
  isLoggedIn = false,
  usernameProps, passwordProps, loginButtonProps
}: Props): UseLoginReturn {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => onLogin(username, password);

  const component = !isLoggedIn ? (
    <div className="login-container">
      <form onSubmit={onSubmit}>
        <Input value={username} onChange={setUsername} type="text" id="username" label="Username" {...usernameProps} />
        <Input value={password} onChange={setPassword} type="password" id="password" label="Password" {...passwordProps} />
        <Button {...loginButtonProps} importance="primary" crud="create" type="submit">Login</Button>
      </form>
    </div>
  ) : null;

  const logout = onLogout;

  return [component, logout];
}
export default useLogin;