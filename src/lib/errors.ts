class Err {
    code: number;

    constructor(code: number) {
        this.code = code;
    }

    getError(): void {
        if (this.code === 423) {
            console.log(
                `Error (${this.code}):\n
                    An error occurred while trying to connect to the database.`
            );
        }
    }
}
