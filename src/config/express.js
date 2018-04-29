var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('../api/routes/v1');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(morgan('dev'));

app.use('/api/v1', routes);

// TODO error  handling - must be after routes

module.exports = app;
