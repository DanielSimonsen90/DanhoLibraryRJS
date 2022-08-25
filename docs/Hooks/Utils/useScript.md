# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Utils](index.md) / useScript
Load script dynamically to the DOM.

## [Module](../../../src/hooks/utils/useScript.ts)
```ts
/**
 * Loads script dynamically to the DOM
 * @param url Script url
 */
export function useScript(url: string): useAsyncReturn<Event, Error>;
export default useScript;
```

## Example
```tsx
const MomentContext = createContext();
export const useMoment = () => useContext(MomentContext);

function MomentProvider({ children }) {
    const { value, loading, error } = useScript("https://cdnjs.com/libraries/moment.js");
    const moment = useMemo(() => {
        if (loading || error) {
            loading && console.warn("Moment is still loading!");
            error && console.error("Unable to dynamically load moment", error);
            return null;
        }

        return window.moment;
    }, [value, loading, error])

    return (
        <MomentContext.Provider value={value && moment}>
            {children}
        </MomentContext.Provider>
    );
}
```