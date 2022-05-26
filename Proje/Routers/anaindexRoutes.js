var express = require('express');

var router = express.Router();

var ctrlanaindex = require('../controller/anaindexController');

router.get('/', ctrlanaindex.index);

module.exports = router;