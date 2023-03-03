const userController = require("./user.controller");
const companyController = require('./company.controller')
const adminController = require('./admin.controller')
const categoryController = require('./category.controller')
const postController = require('./post.controller');

var controllers = {};

controllers.user = userController;
controllers.company = companyController;
controllers.admin = adminController;
controllers.category = categoryController;
controllers.post = postController;

module.exports = controllers;