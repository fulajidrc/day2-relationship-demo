const { body } = require('express-validator');
const {validate} = require('../middlewares')

const postRequest = validate([
    body('title')
    .notEmpty().withMessage('Title is required!'),
    body('description')
    .notEmpty().withMessage('Description is required!'),
    body('categotyId')
    .notEmpty().withMessage('Category is required!')
])

module.exports = postRequest;