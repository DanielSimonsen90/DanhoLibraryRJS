import { Callback } from "../../utils";
declare type Props = {
    onEnter?: Callback;
    onEsc?: Callback;
    target?: EventTarget;
};
export declare function useEnterEsc({ onEsc, onEnter, target }: Props): void;
export default useEnterEsc;
