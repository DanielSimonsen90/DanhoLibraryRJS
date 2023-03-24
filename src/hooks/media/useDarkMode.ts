import { Dispatch, SetStateAction, useCallback } from "react";
import useMediaQuery from "./useMediaQuery";
import { useLocalStorage } from "../state/useStorage";

type useDarkModeReturn = [enabled: boolean, setDarkMode: Dispatch<SetStateAction<boolean>>];

/**
 * Client prefers darkmode or not - toggles between "dark-mode" css class
 */
export function useDarkMode(): useDarkModeReturn {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [settings, setSettings] = useLocalStorage("settings", { darkmode: prefersDarkMode });
  const setDarkMode = useCallback((value: boolean | ((value: boolean) => boolean)) => setSettings(s => ({
    ...s,
    darkmode: typeof value === 'function' ? value(s.darkmode) : value
  })), [setSettings]);

  return [settings.darkmode, setDarkMode];
}
export default useDarkMode;