var express = require('express');
var router = express.Router();

const controller = require('../controllers')
const {postRequest} = require('../requests');
const { auth } = require('../middlewares');

router.get('/', auth, controller.post.getAll);
router.post('/', [auth, postRequest], controller.post.create);
// router.put('/:id', [auth, categoryRequest], controller.category.update);
// router.delete('/:id',auth, controller.category.delete);
// router.get('/:id', auth, controller.category.getOne);

module.exports = router;