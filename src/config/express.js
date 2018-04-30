/**
 * @todo error handling - must be after routes (`app.use('/api/v1', routes)`)
 */

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('../api/routes/v1');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(morgan('dev'));

app.use('/api/v1', routes);

module.exports = app;
