import { CliParams } from '../options/options';

type ValidationErrors = {
    [key in keyof CliParams]?: string;
};

class Validation {
    private readonly _errors: ValidationErrors | null = null;
    get invalid() { return this._errors != null; }

    constructor(errors: ValidationErrors) {
        const isValid = Object.keys(errors).length === 0;
        if (!isValid) { this._errors = errors }
    }

    toString = () => this.invalid
        ? Object.entries(this._errors!).reduce((acc, [key, err]) => acc += `"${key}": "${err}"\r\n`, '')
        : ``;
}

export default (args: Partial<CliParams>): Validation => {
    const errors: ValidationErrors = {};
    const { url, runs } = args;

    if (url == null || url === '') {
        errors.url = `Url is required`;
    }

    if (runs == null || runs < 1) {
        errors.runs = `Number of runs should be greater than zero`
    }

    return new Validation(errors);
}