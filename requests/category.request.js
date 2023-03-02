const { body } = require('express-validator');
const {validate} = require('../middlewares')

const categoryRequest = validate([
    body('title')
    .notEmpty().withMessage('Title is required!'),
    body('description')
    .notEmpty().withMessage('Description is required!')
])

module.exports = categoryRequest;