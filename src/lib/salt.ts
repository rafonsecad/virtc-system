import { Base64 } from 'js-base64';

/**
 * Makes a random salt.
 * @class
 * @param {(number|undefined)} l salt length
 * @param {boolean} s Base64 encoded or not encoded
 * @returns {string} base64 encoded salt
 * @returns {string} salt
 */

class saltMaker {
    l: number | undefined;
    s: boolean;

    constructor(l: number | undefined, s: boolean) {
        this.l = l;
        this.s = s;
    }

    New(): string {
        if (this.l === undefined) this.l = 16;
        let salt: string = '';
        const c: string =
            '@ł€¶ŧ←↓→øþ~æßðđŋħłĸ^«»¢“”nµ─·̣ΩŁΩ¢®Ŧ¥↑ıØÞÆ§ÐªŊĦ&Ł<>©‘’º×÷˙';
        let cl: number = c.length;
        for (var _i = 0; _i < this.l; _i++) {
            salt += c.charAt(Math.floor(Math.random() * cl));
        }
        if (this.s === true) {
            return Base64.encode(salt, true);
        } else {
            return salt;
        }
    }
}

export default saltMaker;
