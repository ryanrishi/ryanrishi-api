require('newrelic');

const app = require('./config/express');
require('./config/db');

module.exports = app;
