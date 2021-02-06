const {Place} = require('../dbConnection');

/**
 * Get all places
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllPlaces = async (req, res, next) => {
    try {
        const places = await Place.find();
        //res.send(places);
        return res.status(200).json({
            success: true,
            count: places.length,
            data: places
        });
    } catch (error) {
        //next(new NotFound());
        console.error(error);
        return res.status(500).json({error: "Server error"});
    }
}