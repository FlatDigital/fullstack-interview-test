const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('config');
const app = express();

const API_V1_ROUTES = require('./router');

app.use(cors());
app.use(morgan(config.get('logger')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

API_V1_ROUTES(app);

module.exports = app;
