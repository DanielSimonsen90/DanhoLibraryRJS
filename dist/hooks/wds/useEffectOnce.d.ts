import { EffectCallback } from "react";
/**
 * useEffect but it only runs once
 * @param effect Effect-callback to run once
 */
export declare const useEffectOnce: (effect: EffectCallback) => void;
export default useEffectOnce;
