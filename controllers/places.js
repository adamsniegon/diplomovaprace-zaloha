const {Place, City} = require('../dbConnection');
const {NotFound, BadRequest} = require('../helpers/error');
const {placeGeocode} = require('../helpers/geocoder');

/**
 * Get all places
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllPlaces = async (req, res, next) => {
    try {
        const places = await Place.find();
        res.send({
            success: true,
            count: places.length,
            data: places
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
exports.addPlace = async (req, res, next) => {
    try {
        const geocodeResult = await placeGeocode(req.body);
        const cityId = await City.findOne({name: geocodeResult.location.properties.city});
        geocodeResult.cityReference = cityId._id;
        await Place.create(geocodeResult);
        res.send(geocodeResult);
    } catch (error) {
        console.log(error);
        next(new BadRequest());
    }
}