const express = require('express');
const morgan = require('morgan');
const config = require('config');
const app = express();

app.use(morgan(config.get('logger')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
