import { DependencyList, useCallback, useEffect, useState } from "react"

type Callback<T> = () => Promise<T>
export type useAsyncReturn<T, Err = Error> = {
    /** Value is being process asyncronously */
    loading: boolean
    /** Error happend while handling callback */
    error: Err | undefined
    /** The final result */
    value: T | undefined
}
/**
 * Run something asyncronously - returns object that informs whether callback is still being processed (loading), callback errored (error) or callback finished (value)
 * @param callback Callback to run
 * @param dependencies Dependencies
 */
export function useAsync<T>(callback: Callback<T>, dependencies: DependencyList): useAsyncReturn<T> {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error>()
  const [value, setValue] = useState<T>()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => { callbackMemoized() }, [callbackMemoized])

  return { loading, error, value }
}
export default useAsync;