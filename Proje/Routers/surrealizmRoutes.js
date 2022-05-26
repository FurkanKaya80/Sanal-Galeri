var express = require('express');

var router = express.Router();

var ctrlsurrealizm = require('../controller/surrealizmController');

router.get('/', ctrlsurrealizm.index);

module.exports = router;