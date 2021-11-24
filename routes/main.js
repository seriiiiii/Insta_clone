const express = require('express');
const ejs = require('ejs');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('main');
});

module.exports = router;