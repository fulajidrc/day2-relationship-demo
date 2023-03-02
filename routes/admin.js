var express = require('express');
var router = express.Router();

const controller = require('../controllers')
const {adminRequest} = require('../requests');
const { auth } = require('../middlewares');
/* GET users listing. */
//router.get('/', controller.company.getAll);
router.post('/register', adminRequest, controller.admin.register);
router.post('/login', controller.admin.login);
router.get('/verify', auth, controller.admin.verify)
router.get('/logout', auth, controller.admin.logout)
// router.put('/:id', companyRequest, controller.company.update);
// router.delete('/:id', controller.company.delete);
// router.get('/:id', controller.company.getOne);

module.exports = router;
//register