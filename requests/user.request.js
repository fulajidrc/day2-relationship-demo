
const { body } = require('express-validator');
const {validate} = require('../middlewares')

const userRequest = validate([
    body('email')
    .notEmpty().withMessage('Email is required!')
    .isEmail().withMessage('Please enter valid email!'),
    body('firstName')
    .notEmpty().withMessage('First name is required!'),
    body('lastName')
    .notEmpty().withMessage('Last name is required!'),
    body('companyId')
    .notEmpty().withMessage('Company is required!')
])

module.exports = userRequest;