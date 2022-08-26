interface CopyOptions {
    debug?: boolean;
    message?: string;
    /** MIME type */
    format?: string;
    onCopy?: (clipboardData: object) => void;
}
declare type useCopyToClipboardProps = {
    /** value that was copied */
    value: string;
    /** Copy was successful */
    success: boolean;
};
declare type useCopyToClipboardFunc = (text: string, options: CopyOptions) => useCopyToClipboardProps;
declare type useCopyToClipboardReturn = [copyToClipboard: useCopyToClipboardFunc, props: useCopyToClipboardProps];
/**
 * Use provided copy function to copy something to clipboard. value is copied value, success is obvious
 */
export declare function useCopyToClipboard(): useCopyToClipboardReturn;
export default useCopyToClipboard;
