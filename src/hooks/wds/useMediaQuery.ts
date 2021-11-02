import { useState, useEffect } from "react"
import useEventListener from "./useEventListener"

/**
 * CSS media queries in React 👀
 * @param mediaQuery Media query
 * @returns If media query is a match
 */
export default function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false)
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>(null as any)

  useEffect(() => {
    const list = window.matchMedia(mediaQuery)
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [mediaQuery])
  
  useEventListener("change", (e, t) => setIsMatch(t.matches), mediaQueryList)

  return isMatch
}