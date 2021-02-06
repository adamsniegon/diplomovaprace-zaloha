const errorType = require('../helpers/error');

/**
 * Middleware function for handling custom errors
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const errorHandler = (err, req, res, next) => {
    if (err instanceof errorType.GeneralError) {
        return res.status(err.statusCode).send(err.getError());
    }

    const generalError = new errorType.GeneralError();
    return res.status(generalError.statusCode).send(generalError.getError());
}

module.exports = errorHandler;