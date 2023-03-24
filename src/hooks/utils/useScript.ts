import useAsync from "./useAsync";

/**
 * Loads script dynamically to the DOM
 * @param url Script url
 */
export function useScript(url: string) {
  return useAsync(() => {
    const script = document.createProperElement('script', {
      attributes: [
        ['src', url],
        ['async', 'true']
      ]
    });

    return new Promise<Event>((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);

      document.body.appendChild(script);
    });
  }, [url]);
}
export default useScript;