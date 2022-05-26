var express = require('express');

var router = express.Router();

var ctrldadaizm = require('../controller/dadaizmController');

router.get('/', ctrldadaizm.index);

module.exports = router;