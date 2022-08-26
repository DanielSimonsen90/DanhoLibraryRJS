# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](index.md) / useStateWithValidation
useState but it validates if value is valid using provided validator callback.

## [Module](../../../src/hooks/state/useStateWithValidation.ts)
```ts
type ValidationCallback<T> = (value: T) => boolean;
type useStateWithValidationReturn<T> = [state: T, onChange: Dispatch<T>, isValid: boolean];

/**
 * useState but it validates if value is valid using validator
 * @param validator Validation predicate
 * @param initialValue Value to validate
 */
export function useStateWithValidation<State>(validator: ValidationCallback<State>, initialValue: T): useStateWithValidationReturn<State>;
export default useStateWithValidation;
```

## Example
```tsx
function ValidateEmail({ onSubmit }) {
    const [email, setEmail, isValid] = useStateWithValidation(email => {
        return /email-regex-goes-here/.test(email);
    }, "");

    return (
        <form onSubmit={() => {
            if (!isValid) alert("Email invalid");
            onSubmit(email);
        }}>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}>
            <button type="submit">Send</button>
        </form>
    )
}
```
