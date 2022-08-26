import { useAsyncReturn } from "./useAsync";
declare type GeolocationError = GeolocationPositionError | null | undefined;
declare type useGeolocationReturn = Omit<useAsyncReturn<GeolocationCoordinates, GeolocationError>, 'callback'>;
/**
 * Receive all the geographical information based on options
 * @param options Geographical options
 */
export declare function useGeolocation(options: PositionOptions): useGeolocationReturn;
export default useGeolocation;
