import { errorsCodes } from '../Constants/errors_codes';

/**
 * Create a new error according to the code.
 * @class
 * @param {number} code Error code
 * @param {boolean} s void (false) | string (true)
 * @returns {(void|string)} soid with the error | string with the error
 */

class Err {
    code: number;
    s: boolean;

    constructor(code: number, s: boolean) {
        this.code = code;
        this.s = s;
    }

    getError(): void | string {
        if (!this.s) this.s = false;

        if (this.code === errorsCodes[423].code && this.s === false) {
            console.error(errorsCodes[423].content);
        } else if (this.code === errorsCodes[423].code && this.s === true) {
            return errorsCodes[423].content;
        }
    }
}
