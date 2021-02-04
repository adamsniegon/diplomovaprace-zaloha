const mongoose = require('mongoose');
require('dotenv/config');

/**
 * Connection to mongoDB
 */
const connection = mongoose.createConnection(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}, () => {
    console.log('Connected to DB');
});

module.exports = {
    connection
}