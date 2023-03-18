# [DanhoLibraryRJS](../../index.md) / [Components](../index.md) / [Form](./index.md) / Input
Normal input element, but with a better onChange event and optional label.

## [Module](../../../src/components/Form/Input/Input.tsx)
```tsx
type InputProps<T extends HTMLInputTypeAttribute> = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 
  "type" | "onChange" | "value"
> & {
  value: T;
  onChange: (value: T) => void;
  type: T;
  label?: string
}

function Input<T extends HTMLInputTypeAttribute>({ value: initialValue, onChange, label, ...props }: InputProps<T>): JSX.Element;
```

## Example
```tsx
function TestComponent(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  <form onSubmit={props.onSubmit}>
    <Input type="text" label="Username" value={username} onChange={setUsername} />
    <Input type="password" label="Password" value={password} onChange={setPassword} />
    <button type="submit">Login</button>
  </form>
}
```