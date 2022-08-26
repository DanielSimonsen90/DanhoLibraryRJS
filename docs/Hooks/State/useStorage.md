# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [State](index.md) / useStorage
Save state in either LocalStorage or SessionStorage.

## [Module](../../../src/hooks/state/useStorage.ts)
```ts
type UseStorageReturn<T> = [value: T, setValue: Dispatch<SetStateAction<T>>, remove: () => void]
type Parse<T> = (value: T) => T;

/**
 * Store a value in LocalStorage using key
 * @param key Key to store value
 * @param defaultValue Fallback value
 * @returns Value matching key in LocalStorage. If no value found, defaultValue is returned
 */
export function useLocalStorage<Key extends string, T>(key: Key, defaultValue: T, parse?: Parse<T>): UseStorageReturn<T>;

/**
 * Store a value in SessionStorage using key
 * @param key Key to store value
 * @param defaultValue Fallback value
 * @returns Value matching key in SessionStorage. If no value found, defaultValue is returned
 */
export function useSessionStorage<Key extends string, T>(key: Key, defaultValue: T, parse?: Parse<T>): UseStorageReturn<T>;

/**
 * Goes through provided storageObject to find value that matches key. Returns defaultValue, if no value was found
 * @param key Storage key
 * @param defaultValue Fallback value
 * @param storageObject Storage type
 * @returns value matching key
 */
function useStorage<Key extends string, T>(key: Key, defaultValue: T, storageObject: Storage, parse?: Parse<T>): UseStorageReturn<T>;
```

## Example
```tsx
const APIKeyContext = createContext(null);
const useAPI = () => useContext(APIKeyContext);

function ApiKeyService({ children }) {
    // Saves login details to Local Storage
    const [login, setLogin, removeLogin] = useLocalStorage({ username: null, password: null });
    
    // Saves API key to Session Storage
    const [apiKey, setApiKey, removeApiKey] = useSessionStorage(null);
    const getApiKeyFrom = imaginaryFunctionToLoginToApiThatReturnsAPromiseOfKey

    return (
        <APIKeyContext.Provider>
            {apiKey ? children : (
                <form>
                    <input type="text" value={login.username} onChange={e => setLogin(login => ({
                        ...login,
                        username: e.target.value
                    }))}>
                    <input type="password" value={login.password} onChange={e => setLogin(login => ({
                        ...login,
                        password: e.target.value
                    }))}>
                    <button onClick={() => getApiKeyFrom(login)
                        .then(key => setApiKey(key))
                        .catch(err => alert(err))
                    }>Login</button>
                </form>
            )}
        </APIKeyContext.Provider>
    )
}
```