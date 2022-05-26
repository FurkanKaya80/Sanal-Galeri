var express = require('express');

var router = express.Router();

var ctrlminimalizm = require('../controller/minimalizmController');

router.get('/', ctrlminimalizm.index);

module.exports = router;