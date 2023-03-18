import { useState, useEffect } from "react";
import { useAsyncReturn } from "./useAsync";

type GeolocationError = GeolocationPositionError | null | undefined;
type useGeolocationReturn = Omit<useAsyncReturn<GeolocationCoordinates, GeolocationError>, 'callback'>;

/**
 * Receive all the geographical information based on options
 * @param options Geographical options
 */
export function useGeolocation(options: PositionOptions): useGeolocationReturn {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationError>();
  const [value, setValue] = useState<GeolocationCoordinates>({} as GeolocationCoordinates);

  useEffect(() => {
    const successHandler: PositionCallback = e => {
      setLoading(false);
      setError(null);
      setValue(e.coords);
    };
    const errorHandler: PositionErrorCallback = e => {
      setError(e);
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
    const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);
    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, value };
}
export default useGeolocation;