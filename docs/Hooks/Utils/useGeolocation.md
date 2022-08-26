# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Utils](index.md) / useGeolocation
Receive all the geographical information based on provided options.

## [Module](../../../src/hooks/utils/useGeolocation.ts)
```ts
type GeolocationError = GeolocationPositionError | null | undefined;
type useGeolocationReturn = Omit<useAsyncReturn<GeolocationCoordinates, GeolocationError>, 'callback'>


/**
 * Receive all the geographical information based on options
 * @param options Geographical options
 */
export function useGeolocation(options: PositionOptions): useGeolocationReturn;
export default useGeolocation;
```

## Example
```tsx
function TestComponent(props) {
    const { value, loading, error } = useGeolocation();

    return error ? (
        <p>Damn, I can't find out where you are!</p>
    ) : loading ? (
        <p>Finding your location...</p>
    ) : value ? (
        <div className="location">
            <h1>Ha! I found you! You are</h1>
            <div className="lat-long">
                <span>Lat: {value.latitude}</span>
                <span>Long: {value.longtitude}</span>
            </div>
            <span>Heading {value.heading}° at about {value.speed}m/s.</span>
        </div>
    )
}
```