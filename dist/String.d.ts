declare global {
    interface String {
        capitalize(): string;
        replaceAll(search: string, replace: string): string;
    }
}
export {};
