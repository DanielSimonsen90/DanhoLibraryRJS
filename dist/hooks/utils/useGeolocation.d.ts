import { useAsyncReturn } from "./useAsync";
type GeolocationError = GeolocationPositionError | null | undefined;
type useGeolocationReturn = Omit<useAsyncReturn<GeolocationCoordinates, GeolocationError>, 'callback'>;
/**
 * Receive all the geographical information based on options
 * @param options Geographical options
 */
export declare function useGeolocation(options: PositionOptions): useGeolocationReturn;
export default useGeolocation;
