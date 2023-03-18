import { useState, useEffect, useMemo } from "react";
import useEventListener from "../events/useEventListener";

/**
 * CSS media queries in React 👀
 * @param mediaQuery Media query: default: (max-width: mediaQuery)
 * @returns If media query is a match
 */
export function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>(null as any);
  const mq = useMemo(() => {
    let prop = 'max-width';
    let val = mediaQuery; // 600(px)

    if (mediaQuery.includes(':')) {
      const noParents = mediaQuery.startsWith('(') ? mediaQuery.substring(1, mediaQuery.length - 1) : mediaQuery;
      [prop, val] = noParents.split(':');
    }

    const value = val.trim() + (/\d$/.test(val) ? 'px' : '');

    return `(${prop}: ${value})`;
  }, [mediaQuery]);

  useEffect(() => {
    const list = window.matchMedia(mq);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mq]);

  useEventListener("change", (e, t) => setIsMatch(t.matches), mediaQueryList);

  return isMatch;
}
export default useMediaQuery;