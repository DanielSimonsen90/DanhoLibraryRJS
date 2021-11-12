import { RefObject, useState } from "react"
import useEventListener from "./useEventListener"

/**
 * Returns true if ref is being hovered over
 * @param ref Reference HTML element
 */
export function useHover<T extends HTMLElement>(ref: RefObject<T>) {
    const [hovered, setHovered] = useState(false);
    if (!ref.current) throw Error("No reference element!");

    useEventListener("mouseover", () => setHovered(true), ref.current)
    useEventListener("mouseout", () => setHovered(false), ref.current)

    return hovered;
}
export default useHover;