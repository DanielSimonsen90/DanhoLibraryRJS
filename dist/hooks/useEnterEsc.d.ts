declare type Callback = () => void;
declare type Props = {
    onEnter: Callback;
    onEsc: Callback;
};
export declare function useEnterEsc({ onEsc, onEnter }: Props): void;
export default useEnterEsc;
