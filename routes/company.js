var express = require('express');
var router = express.Router();

const controller = require('../controllers')
const {companyRequest} = require('../requests');
/* GET users listing. */
router.get('/', controller.company.getAll);
router.post('/', companyRequest, controller.company.create);
router.put('/:id', companyRequest, controller.company.update);
router.delete('/:id', controller.company.delete);
router.get('/:id', controller.company.getOne);

module.exports = router;