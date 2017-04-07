var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
	return res.redirect('/');
});

module.exports = router;
