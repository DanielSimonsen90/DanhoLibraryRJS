# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Once](./index.md) / useEffectOnce
useEffect but with a dependency of [].

## [Module](../../../src/hooks/once/useEffectOnce.ts)
```ts
/**
 * useEffect but it only runs once
 * @param effect Effect-callback to run once
 */
export const useEffectOnce = (effect: EffectCallback) => useEffect(effect, []);
export default useEffectOnce;
```

## Example
```tsx
function LoginWrapper({ children }) {
    // Imaginary hook that could provide login state to access application
    const [isLoggedIn, { login, logout }] = useLogin();
    // useLocalStorage hook from Hooks/State/useStorage
    const [{ username, password }, setLogin] = useLocalStorage("login", { username: null, password: null });

    useEffectOnce(() => {
        if (!isLoggedIn) login(username, password);

        return logout;
    });

    return isLoggedIn ? children : (
        <div className="login-wrapper">
            <h1>You are not logged in!</h1>
                <form onSubmit={() => login(username, password)}>
                <input type="text" value={username} onChange={e => setLogin(login => ({ ...login, username: e.target.value }))}>
                <input type="password" value={password} onChange={e => setLogin(login => ({ ...login, password: e.target.value }))}>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
```