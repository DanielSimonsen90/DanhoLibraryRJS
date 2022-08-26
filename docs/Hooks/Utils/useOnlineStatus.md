# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Utils](index.md) / useOnlineStatus
Returns boolean value of client's online status - does client have access to internet?

## References
* [Hooks](../index.md)
    * [useEventListener](../Events/useEventListener.md)

## [Module](../../../src/hooks/utils/useOnlineStatus.ts)
```ts
/**
 * Client is online/offline on internet
 */
export function useOnlineStatus(): boolean;
export default useOnlineStatus;
```

## Example
```tsx
function TestComponent(props) {
    const { value: data, loading, error } = useFetch(`https://some-cool-api/api/movies`, null, []);
    const hasConnection = useOnlineStatus();

    return (error && hasConnection ? 
        <p>An error happened from the API or bad request.</p> : 
        <p>You don't have connection to the internet. Please fix your connection and try again.</p>)
        || (loading && <p>Loading...</p>)
        || data && data.map(movie => (
            // Render movie
        ));
}
```