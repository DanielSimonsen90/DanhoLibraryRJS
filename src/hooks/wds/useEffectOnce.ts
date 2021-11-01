import { useEffect, EffectCallback } from "react"

/**
 * useEffect but it only runs once
 * @param effect Effect-callback to run once
 */
const useEffectOnce = (effect: EffectCallback) => useEffect(effect, []);
export default useEffectOnce;