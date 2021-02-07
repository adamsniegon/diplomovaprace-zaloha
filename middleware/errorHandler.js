const errorType = require('../helpers/error');

/**
 * Middleware function for handling custom errors
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const errorHandler = (err, req, res, next) => {
    console.log(err.getError());
    console.log(err.getStatusCode());
    if (err instanceof errorType.GeneralError) {
        return res.status(err.getStatusCode()).send(err.getError());
    }

    const generalError = new errorType.GeneralError();
    return res.status(generalError.getStatusCode()).send(generalError.getError());
}

module.exports = errorHandler;