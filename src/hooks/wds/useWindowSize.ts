import { useState } from "react"
import useEventListener from "./useEventListener"

/**
 * Information about the current window size
 * @returns Dimensions of the current window
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  });

  return windowSize;
}