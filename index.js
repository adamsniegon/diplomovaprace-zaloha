const express = require('express');
const {connection} = require('./dbConnection');

const app = express();

app.use(express.json());

app.listen(5000);