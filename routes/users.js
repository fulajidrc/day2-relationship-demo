var express = require('express');
var router = express.Router();

const controller = require('../controllers')
const {userRequest} = require('../requests');
/* GET users listing. */
router.get('/', controller.user.getAll);
router.post('/', userRequest, controller.user.create);
router.put('/:id', userRequest, controller.user.update);
router.delete('/:id', controller.user.delete);
router.get('/:id', controller.user.getOne);

module.exports = router;
