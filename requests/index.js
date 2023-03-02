const userRequest = require("./user.request");
const companyRequest = require("./company.request");
const adminRequest = require('./admin.request')
const categoryRequest = require('./category.request')

var requests = {};

requests.userRequest = userRequest;
requests.companyRequest = companyRequest;
requests.adminRequest = adminRequest;
requests.categoryRequest = categoryRequest;

module.exports = requests;