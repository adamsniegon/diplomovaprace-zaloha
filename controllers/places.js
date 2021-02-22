const {Place, City} = require('../dbConnection');
const {NotFound, BadRequest} = require('../helpers/error');

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
 * Get place by ID
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getPlaceReviews = async (req, res, next) => {
    try {
        const place = await Place.findById(req.params.id).populate({path: 'reviews'});
        res.send({
            success: true,
            data: place
        });
    } catch (error) {
        next(new NotFound());
    }
}