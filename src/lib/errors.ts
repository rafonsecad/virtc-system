import { errorsCodes } from '../Constants/errors_codes';

/**
 * Create a new error according to the code.
 * @class
 * @param {number} code Error code
 * @param {(boolean|undefined)} s void (false) | string (true) | void (undefined)
 * @returns {(void|string)} void with the error | string with the error
 */

class Err {
    code: number;
    s: boolean | undefined;

    constructor(code: number, s: boolean | undefined) {
        this.code = code;
        this.s = s;
    }

    getError(): void | string {
        if (this.s === undefined || this.s === false) {
            console.error(errorsCodes[this.code].content);
        } else {
            return errorsCodes[this.code].content;
        }
    }
}

export default Err;
