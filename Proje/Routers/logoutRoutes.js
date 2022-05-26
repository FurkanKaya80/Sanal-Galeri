var express = require('express');

var router = express.Router();

var ctrllogout = require('../controller/logoutController.js');

router.get('/', ctrllogout.index);

module.exports = router;