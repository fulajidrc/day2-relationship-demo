const userRequest = require("./user.request");
const companyRequest = require("./company.request");
const adminRequest = require('./admin.request')
const categoryRequest = require('./category.request')
const postRequest = require('./post.request')

var requests = {};

requests.userRequest = userRequest;
requests.companyRequest = companyRequest;
requests.adminRequest = adminRequest;
requests.categoryRequest = categoryRequest;
requests.postRequest = postRequest;

module.exports = requests;