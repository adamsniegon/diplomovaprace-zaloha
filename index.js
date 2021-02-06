const express = require('express');
const {connection} = require('./dbConnection');
const placesRoutes = require('./routes/places'); 
require('dotenv/config');

const app = express();

app.use(express.json());

app.use('/api/places', placesRoutes);

app.listen(process.env.PORT || 5000);