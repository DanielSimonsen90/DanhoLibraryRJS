import { useEffect } from "react";

type Callback = () => void;

type Props = {
    onEnter: Callback;
    onEsc: Callback;
}

export function useEnterEsc({ onEsc, onEnter }: Props) {
    const createListener = (handler: Callback, ...keys: Array<string>) => (e: KeyboardEvent) => {
        if (keys.includes(e.code)) {
            handler();
            e.preventDefault();
        }
    }

    useEffect(() => {
        const listener = createListener(onEnter, "Enter", "NumpadEnter");
        document.addEventListener("keydown", listener);
        return () => { document.removeEventListener("keydown", listener); };
    }, [onEnter]);

    useEffect(() => {
        const listener = createListener(onEsc, 'Escape');
        document.addEventListener("keydown", listener);
        return () => { document.removeEventListener("keydown", listener); };
    }, [onEsc]);
};
export default useEnterEsc;