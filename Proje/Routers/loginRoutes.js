var express = require('express');

var router = express.Router();

var ctrlLogin = require('../controller/loginController');

router.get('/', ctrlLogin.index);
router.post('/', ctrlLogin.indexPost);
//router.get('/',ctrlLogin.signupGet);
module.exports = router;