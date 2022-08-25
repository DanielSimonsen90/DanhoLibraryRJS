# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Utils](index.md) / useRedirect
Wrapper to move to a different url. May become depricated due to react-router-dom's own hook.

## [Module](../../../src/hooks/utils/useRedirect.ts)
```ts
/**
 * Redirect client to url
 * @returns Function to redirect client to new provided url
 */
export function useRedirect(): (to: string | ((from: string) => string)) => string;
export default useRedirect;
```

## Example
```tsx
function Hub(props) {
    // Imaginary hook to simulate client's login state.
    const isLoggedIn = useIsLoggedIn();
    const redirect = useRedirect();

    // Route "/" is optional
    return isLoggedIn ? redirect("/home") : redirect("login");
}
```