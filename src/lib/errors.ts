import { errorsCodes } from '../Constants/errors_codes'

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

        if (this.s === false) {
            console.error(errorsCodes[this.code].content);
        } else {
            return errorsCodes[this.code].content;
        }
    }
}

export default Err;
