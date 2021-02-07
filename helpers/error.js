/**
 * Classes for handling custom errors
 */
class GeneralError extends Error{
    constructor() {
        super();
        this.message = "Error";
        this.statusCode = 500;
    }

    getError() {
        return {
            message: this.message
        }
    }

    getStatusCode() {
        return this.statusCode;
    }
}

class BadRequest extends GeneralError{
    constructor() {
        super();
        this.message = "Bad request",
        this.statusCode = 400;
    }
}

class NotFound extends GeneralError{
    constructor() {
        super();
        this.message = "Not found",
        this.statusCode = 404;
    }
}

module.exports = {
    GeneralError,
    BadRequest,
    NotFound
};