import { useEffect, useRef } from "react"
type AllEvents<EventType extends keyof WindowEventMap> = WindowEventMap[EventType];
type Listener<T, U> = (event: T, element: U) => void;

/**
 * Add event listener to element
 * @param eventType Type of event to add a listener to
 * @param callback Listener callback
 * @param element Element to append listener to. Default is window
 */
export function useEventListener<
    EventType extends keyof WindowEventMap,
    ElementTarget extends EventTarget = EventTarget,
    EventTypeEvent = AllEvents<EventType>,
>(
    eventType: EventType, 
    callback: Listener<EventTypeEvent, ElementTarget>,
    element: ElementTarget = window as any
) {
  const callbackRef = useRef(callback);
  const handler: Listener<EventTypeEvent, ElementTarget> = (e: EventTypeEvent, element: ElementTarget) => callbackRef.current(e, element);

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const addEventListener = () => {
    const target = element as ElementTarget;
    target.addEventListener(eventType, e => handler(e as any, target))
  }
  const removeEventListener = () => {
    const target = element as ElementTarget;
    target.removeEventListener(eventType, e => handler(e as any, target));
  }

  useEffect(() => {
    if (element == null) return
    addEventListener();
    return () => removeEventListener();
  }, [eventType, element])

  return { addEventListener, removeEventListener }
}
export default useEventListener;