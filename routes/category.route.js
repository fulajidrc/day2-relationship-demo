var express = require('express');
var router = express.Router();

const controller = require('../controllers')
const {categoryRequest} = require('../requests');
const { auth } = require('../middlewares');

router.get('/', auth, controller.category.getAll);
router.post('/', [auth, categoryRequest], controller.category.create);
router.put('/:id', [auth, categoryRequest], controller.category.update);
router.delete('/:id',auth, controller.category.delete);
router.get('/:id', auth, controller.category.getOne);

module.exports = router;