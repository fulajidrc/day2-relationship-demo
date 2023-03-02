const userRequest = require("./user.request");
const companyRequest = require("./company.request");
var requests = {};

requests.userRequest = userRequest;
requests.companyRequest = companyRequest;
module.exports = requests;