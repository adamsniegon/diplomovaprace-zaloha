const express = require('express');
const {connection} = require('./dbConnection');
const placesRoutes = require('./routes/places'); 
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/places', placesRoutes);
app.use(errorHandler);

app.listen(process.env.PORT || 5000);