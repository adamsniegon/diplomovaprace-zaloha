const mongoose = require('mongoose');
const CitySchema = require('./models/City');
const PlaceSchema = require('./models/Place');
const ReviewSchema = require('./models/Review');
require('dotenv').config();

/**
 * Connection to mongoDB
 */
const connection = mongoose.createConnection(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}, () => {
    console.log('Connected to DB');
});

/**
 * Models connection
 */
const City = connection.model("cities", CitySchema);
const Place = connection.model("places", PlaceSchema);
const Review = connection.model("reviews", ReviewSchema);

module.exports = {
    connection,
    City,
    Place,
    Review
}