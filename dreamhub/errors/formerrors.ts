
export interface ErrorMessageLibrary {
    [keyof: string]: {
        type: string;
        message: string;
    }
}
