var express = require('express');

var router = express.Router();

var ctrlgiris = require('../controller/girisController');

router.get('/', ctrlgiris.index);
router.post('/', ctrlgiris.indexPost);   

module.exports = router;