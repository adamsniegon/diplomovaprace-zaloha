const {Place} = require('../dbConnection');
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
 * Add place
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.addPlace = async (req, res, next) => {
    try {
        const newPlace = new Place({
            address: req.body.address
        });
        await Place.create(newPlace);
        res.send(newPlace);
    } catch (error) {
        next(new BadRequest());
    }
}