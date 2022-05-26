var express = require('express');

var router = express.Router();

var ctrlpopart = require('../controller/popartController');

router.get('/', ctrlpopart.index);

module.exports = router;