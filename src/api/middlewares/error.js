const httpStatus = require('http-status');
const APIError = require('../utils/api-error');
const { env } = require('../../config/vars');
const JSONAPIError = require('jsonapi-serializer').Error;

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const handler = (err, req, res, next) => {

  console.log('err ==> ', err);

  const response = {
    code: err.status,
    detail: err.message || httpStatus[err.status],
    errors: err.errors,
    stack: err.stack,
  };

  if (env !== 'development') {
    delete response.stack;
  }

  let serializedResponse = JSONAPIError(response);

  res.status(err.status || 500);
  res.json(serializedResponse);
  res.end();
};
exports.handler = handler;

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
exports.converter = (err, req, res, next) => {
  let convertedError = err;

  if (!(err instanceof APIError)) {
    convertedError = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
    });
  }

  return handler(convertedError, req, res);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
exports.notFound = (req, res, next) => {
  const err = new APIError({
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
  });

  return handler(err, req, res);
};
