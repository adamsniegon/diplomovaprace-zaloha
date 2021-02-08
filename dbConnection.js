const mongoose = require('mongoose');
const PlaceSchema = require('./models/Place');
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
const Place = connection.model("places", PlaceSchema);

module.exports = {
    connection,
    Place
}