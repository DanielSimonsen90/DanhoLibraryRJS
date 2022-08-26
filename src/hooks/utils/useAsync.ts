import { DependencyList, useCallback, useEffect, useState } from "react"

type Callback<T> = () => Promise<T>
export type useAsyncReturn<T, Err = Error> = {
    /** Value is being process asyncronously */
    loading: boolean
    /** Error happend while handling callback */
    error: Err | undefined
    /** The final result */
    value: T | undefined,
    /** The callback passed, memoized to modify internal state */
    callback: Callback<void>
}
/**
 * Run something asyncronously - returns object that informs whether callback is still being processed (loading), callback errored (error) or callback finished (value)
 * @param callback Callback to run
 * @param dependencies Dependencies
 */
export function useAsync<Value, Err = Error>(callback: Callback<Value>, dependencies: DependencyList = []): useAsyncReturn<Value, Err> {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Err>()
  const [value, setValue] = useState<Value>()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    return callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => { callbackMemoized() }, [callbackMemoized])

  return { loading, error, value, callback: callbackMemoized }
}
export default useAsync;