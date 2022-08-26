# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Utils](index.md) / useLogin

Hook to return a basic login form, along with login state and logout function.

## References
* [Components](../../Components/index.md)
    * [Button](../../Components/User%20Interface/Button.md)

## [Module](../../../src/hooks/utils/useLogin.tsx)
```tsx
type InputProps<T extends HTMLInputTypeAttribute> = Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 
    "type" | "onChange" | "value"
> & {
    value: T;
    onChange: (value: T) => void;
    type: T;
    label?: string
}

function Input<T extends HTMLInputTypeAttribute>({ value: initialValue, onChange, label, ...props }: InputProps<T>): JSX.Element;

type Props = {
    onLogin: (username: string, password: string) => void,
    onLogout: () => void,

    isLoggedIn?: boolean,
    usernameProps?: InputProps<string>,
    passwordProps?: InputProps<string>,
    loginButtonProps?: ButtonProps
}
type UseLoginReturn = [component: Component | null, logout: () => void];

export function useLogin({ 
    onLogin, onLogout, 
    isLoggedIn = false, 
    usernameProps, passwordProps, loginButtonProps 
}: Props): UseLoginReturn;
export default useLogin;
```

## Example
```tsx
function TestComponent(props) {
    // imaginary hook to get the login state of the user.
    const [isLoggedIn, setIsLoggedIn] = useLoginState();
    const [LoginForm, logout] = useLogin({
        isLoggedIn,
        onLogin(username, password) {
            // Ping database and check if database contains user with provided information. Return contains value
            setIsLoggedIn(true);
        },
        onLogout: () => setIsLoggedIn(false)
    });

    return LoginForm || <Home />;
}
```