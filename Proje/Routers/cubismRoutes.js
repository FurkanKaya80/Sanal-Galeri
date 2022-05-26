var express = require('express');

var router = express.Router();

var ctrlcubism = require('../controller/cubismController');

router.get('/', ctrlcubism.index);

module.exports = router;