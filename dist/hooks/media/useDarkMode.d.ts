import { Dispatch, SetStateAction } from "react";
type useDarkModeReturn = [enabled: boolean, setDarkMode: Dispatch<SetStateAction<boolean>>];
/**
 * Client prefers darkmode or not - toggles between "dark-mode" css class
 */
export declare function useDarkMode(): useDarkModeReturn;
export default useDarkMode;
