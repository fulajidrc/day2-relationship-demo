const { body } = require('express-validator');
const {validate} = require('../middlewares')

const adminRequest = validate([
    body('email')
    .notEmpty().withMessage('Email is required!')
    .isEmail().withMessage('Please enter valid email!'),
    body('password')
    .notEmpty().withMessage('Password is required!')
    .isLength({ min: 6 }).withMessage('Minimum 6 characters required!'),
    body('name')
    .notEmpty().withMessage('Name is required!')
])

module.exports = adminRequest;