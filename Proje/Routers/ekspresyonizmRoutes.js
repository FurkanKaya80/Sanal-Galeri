var express = require('express');

var router = express.Router();

var ctrlekspresyonizm = require('../controller/ekspresyonizmController');

router.get('/', ctrlekspresyonizm.index);

module.exports = router;