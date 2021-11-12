import { useState } from "react"
import copy from "copy-to-clipboard";

interface CopyOptions {
    debug?: boolean;
    message?: string;
    format?: string; // MIME type
    onCopy?: (clipboardData: object) => void;
}

type useCopyToClipboardProps = {
    /** value that was copied */
    value: string;
    /** Copy was successful */
    success: boolean;
}
type useCopyToClipboardFunc = (text: string, options: CopyOptions) => useCopyToClipboardProps;
type useCopyToClipboardReturn = [copyToClipboard: useCopyToClipboardFunc, props: useCopyToClipboardProps]

/**
 * Use provided copy function to copy something to clipboard. value is copied value, success is obvious
 */
export function useCopyToClipboard(): useCopyToClipboardReturn {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState(false);

  const copyToClipboard: useCopyToClipboardFunc = (text: string, options: CopyOptions) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);

    return { value, success }
  }

  return [copyToClipboard, { value, success }]
}
export default useCopyToClipboard;