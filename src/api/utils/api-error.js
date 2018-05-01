// https://github.com/danielfsousa/express-rest-es2017-boilerplate/blob/master/src/api/utils/APIError.js

const httpStatus = require('http-status');

class APIError {
  constructor({ message, status = httpStatus.INTERNAL_SERVER_ERROR }) {
    this.message = message;
    this.status = status;
  }
}

module.exports = APIError;


// const httpStatus = require('http-status');

// /**
//  * @extends Error
//  */
// class ExtendableError extends Error {
//   constructor({
//     message, errors, status, isPublic, stack,
//   }) {
//     super(message);
//     this.name = this.constructor.name;
//     this.message = message;
//     this.errors = errors;
//     this.status = status;
//     this.isPublic = isPublic;
//     this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
//     this.stack = stack;
//     // Error.captureStackTrace(this, this.constructor.name);
//   }
// }
//
// /**
//  * Class representing an API error.
//  * @extends ExtendableError
//  */
// class APIError extends ExtendableError {
//   /**
//    * Creates an API error.
//    * @param {string} message - Error message.
//    * @param {number} status - HTTP status code of error.
//    * @param {boolean} isPublic - Whether the message should be visible to user or not.
//    */
//   constructor({
//     message,
//     errors,
//     stack,
//     status = httpStatus.INTERNAL_SERVER_ERROR,
//     isPublic = false,
//   }) {
//     super({
//       message, errors, status, isPublic, stack,
//     });
//   }
// }

module.exports = APIError;
