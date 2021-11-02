import { Dispatch, SetStateAction, useEffect } from "react"
import useMediaQuery from "./useMediaQuery"
import { useLocalStorage } from "./useStorage"

type useDarkModeReturn = [enabled: boolean, setDarkMode: Dispatch<SetStateAction<boolean>>];

/**
 * Client prefers darkmode or not - toggles between "dark-mode" css class
 */
export default function useDarkMode(): useDarkModeReturn {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode", false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const enabled = darkMode ?? prefersDarkMode

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled)
  }, [enabled])

  return [enabled, setDarkMode]
}