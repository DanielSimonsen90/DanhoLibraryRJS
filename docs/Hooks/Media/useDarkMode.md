# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Media](index.md) / useDarkMode
Get information about the client, if they prefer dark color scheme and be able to set it. State is stored in localStorage.

## References
* [Hooks](../index.md)
    * [useMediaQuery](./useMediaQuery.md)
    * [useStorage](../State/useStorage)

## [Module](../../../src/hooks/media/useDarkMode.ts)
```ts
type useDarkModeReturn = [enabled: boolean, setDarkMode: Dispatch<SetStateAction<boolean>>];

export function useDarkMode(): useDarkModeReturn;
export default useDarkMode;
```

## Example
```tsx
function App({ children }) {
    const [darkmode, setDarkmode] = useDarkMode();

    return (
        <div className={darkmode ? 'dark' : 'light'}>
            {children}
        </div>
    )
}
```