# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Utils](index.md) / useCopyToClipboard
Use provided copy function to copy something to clipboard.

## References
* External
    * copy-to-clipboard

## [Module](../../../src/hooks/utils/useCopyToClipboard.ts)
```ts
interface CopyOptions {
    debug?: boolean;
    message?: string;
    /** MIME type */
    format?: string;
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
export function useCopyToClipboard(): useCopyToClipboardReturn;
export default useCopyToClipboard;
```

## Example
```tsx
function GenerateId(props) {
    const [copy, { value: copiedValue, success }] = useCopyToClipboard();

    return (
        <>
            {success && (
                <div className="notice success">
                    <p>Id generated: {copiedValue}</p>
                    <p>Id copied to clipboard.</p>
                </div>
            )}
            <button onClick={() => {
                const id = uuid();
                copy(id);
            }}>Generate Id</button>
        </p>
    );
}
```