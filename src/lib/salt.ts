import crypto from 'crypto-js';
import vtcconfig from '../Constants/virtcconfig'
import Err from '../lib/errors'

/**
 * Makes a random salt.
 * @class
 * @param {(number|undefined)} l salt length
 * @param {boolean} s Base64 encoded or not encoded
 * @returns {string} base64 encoded salt
 * @returns {string} salt
 */

class saltMaker {
    s: boolean;

    constructor(s: boolean) {
        this.s = s;
    }

    New(): string {
        let salt: string = '';
        const c: string =
            '@ł€¶ŧ←↓→øþ~æßðđŋħłĸ^«»¢“”nµ─·̣ΩŁΩ¢®Ŧ¥↑ıØÞÆ§ÐªŊĦ&Ł<>©‘’º×÷˙';
        let cl: number = c.length;
        if (vtcconfig.saltLength > 16) {
            new Err(125, false).getError()
            vtcconfig.saltLength = 16
        }
        for (var _i = 0; _i < vtcconfig.saltLength; _i++) {
            salt += c.charAt(Math.floor(Math.random() * cl));
        }
        if (this.s === true) {
            return crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(salt));
        } else {
            return salt;
        }
    }
}

export { saltMaker };
