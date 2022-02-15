export * from './Container';
export * from './Button';
export * from './Router';
export * from './TabBar';

export function combineClassName(...classNames: Array<string | undefined>) {
    return classNames.filter(v => v).join(' ');
}
