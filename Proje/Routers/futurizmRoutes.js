var express = require('express');

var router = express.Router();

var ctrlfuturizm = require('../controller/futurizmController');

router.get('/', ctrlfuturizm.index);

module.exports = router;