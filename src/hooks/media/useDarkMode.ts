import { Dispatch, SetStateAction } from "react"
import useMediaQuery from "./useMediaQuery"
import { useLocalStorage } from "../state/useStorage"

type useDarkModeReturn = [enabled: boolean, setDarkMode: Dispatch<SetStateAction<boolean>>];

/**
 * Client prefers darkmode or not - toggles between "dark-mode" css class
 */
export function useDarkMode(): useDarkModeReturn {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode", true);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const enabled = darkMode ?? prefersDarkMode
  return [enabled, setDarkMode]
}
export default useDarkMode;