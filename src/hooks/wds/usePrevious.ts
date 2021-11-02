import { useRef } from "react"

/**
 * useState but it stores the previous value of the state
 * @param value Current state value
 * @returns Previous state value
 */
export default function usePrevious<T>(value: T) {
  const currentRef = useRef(value)
  const previousRef = useRef<T>()

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current
    currentRef.current = value
  }

  return previousRef.current
}
