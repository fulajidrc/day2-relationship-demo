
const { body } = require('express-validator');
const {validate} = require('../middlewares')

const companyRequest = validate([
    body('name')
    .notEmpty().withMessage('Name is required!')
])

module.exports = companyRequest;