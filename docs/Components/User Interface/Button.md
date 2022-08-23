# [DanhoLibraryRJS](../../README.md) / [Components](../index.md) / [User Interface](./index.md) / Button

The button component is a basic button but with custom attributes provided by the component's props.

ButtonProps extends [BaseProps](../../Utils/Base/Props.md) on the HTMLButtonElement, meaning it will accept every button property.

## References
* Utils
    * [BaseProps](../../Utils/Base/Props.md)

* External
    * FontAwesome as Icon from [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)


## [Module](../../../src/components/Button.tsx)
```tsx
export type CRUD = 'create' | 'read' | 'update' | 'delete';
export type Importance = 'primary' | 'secondary' | 'tertiary';
export type ButtonProps = BaseProps<HTMLButtonElement> & {
    /**
     * Modifies color of importance
     */
    crud?: CRUD;
    /**
     * Custom icon from react-fontawesome
     */
    iconName?: string;
    /**
     * Modifies background-color or border-color style
     */
    importance?: Importance;
    /**
     * Hide icon provided by iconName or CRUD type
     * @default false
    */
    hideIcon?: boolean;

    /**
     * Button text instead of children
     */
    value?: string

    /**
     * Click or Enter/NumpadEnter button pressed
     * @param event The event associated
    */
    onClick(event: ClickEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>): void
}

function Button(props: ButtonProps): React.FunctionComponent<ButtonProps>