const {City} = require('../dbConnection');
const {NotFound, BadRequest} = require('../helpers/error');

/**
 * Get all cities
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllCities = async (req, res, next) => {
    try {
        const cities = await City.find().populate({path: 'places'});
        res.send({
            success: true,
            count: cities.length,
            data: cities
        });
    } catch (error) {
        next(new NotFound());
    }
}

/**
 * Get city by ID
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getCity = async (req, res, next) => {
    try {
        const city = await City.findById(req.params.id);
        res.send({
            success: true,
            data: city
        });
    } catch (error) {
        next(new NotFound());
    }
}