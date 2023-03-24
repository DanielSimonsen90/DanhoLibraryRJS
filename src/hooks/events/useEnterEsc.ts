import { useEffect } from "react";
import { Callback } from "../../utils";

type Props = {
  onEnter?: Callback;
  onEsc?: Callback;
  target?: EventTarget;
};

export function useEnterEsc({ onEsc, onEnter, target = document }: Props) {
  const createListener = (handler?: Callback, ...keys: Array<string>) => (e: KeyboardEvent) => {
    if (keys.includes(e.code)) {
      e.preventDefault();
      handler?.();
    }
  };

  useEffect(() => {
    const listener = createListener(onEnter, "Enter", "NumpadEnter");
    target.addEventListener("keydown", { handleEvent: listener });
    return () => { target.removeEventListener("keydown", { handleEvent: listener }); };
  }, [onEnter]);

  useEffect(() => {
    const listener = createListener(onEsc, 'Escape');
    target.addEventListener("keydown", { handleEvent: listener });
    return () => { target.removeEventListener("keydown", { handleEvent: listener }); };
  }, [onEsc]);
};
export default useEnterEsc;