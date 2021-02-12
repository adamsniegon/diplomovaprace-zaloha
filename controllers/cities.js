const {City} = require('../dbConnection');
const {GeneralError, NotFound, BadRequest} = require('../helpers/error');
const {cityGeocode} = require('../helpers/geocoder');

/**
 * Get all places
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllCities = async (req, res, next) => {
    try {
        const cities = await City.find().populate({path: 'cityPlaces'})
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
 * Add place
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.addCity = async (req, res, next) => {
    try {
        const geocodeResult = await cityGeocode(req.body);
        await City.create(geocodeResult);
        res.send(geocodeResult);
    } catch (error) {
        next(new GeneralError());
    }
}