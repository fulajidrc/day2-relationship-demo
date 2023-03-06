var express = require('express');
var router = express.Router();

const controller = require('../controllers')
const {postRequest} = require('../requests');
const { auth } = require('../middlewares');

router.get('/', auth, controller.post.getAll);
router.post('/', [auth, postRequest], controller.post.create);
router.put('/:id', [auth, postRequest], controller.post.update);
router.delete('/:id',auth, controller.post.delete);
router.get('/:id', auth, controller.post.getOne);

module.exports = router;