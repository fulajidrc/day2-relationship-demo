const validate = require("./validate");
const auth = require('./auth.middleeware');
var middlewares = {};

middlewares.validate = validate;
middlewares.auth = auth;

module.exports = middlewares;