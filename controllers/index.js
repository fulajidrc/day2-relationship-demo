const userController = require("./user.controller");
const companyController = require('./company.controller')
var controllers = {};

controllers.user = userController;
controllers.company = companyController;

module.exports = controllers;