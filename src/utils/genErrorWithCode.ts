export class ErrorWithCode extends Error {
    constructor(public message: string, public code: number) {
        super(message);
        this.code = code;
    }
}

export const genErrorWithCode = (message: string, code: number) => {
    const error = new ErrorWithCode(message, code);
    return error;
};
