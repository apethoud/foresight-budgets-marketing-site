var express = require('express');
var router = express.Router();
var Substription = require('../models/subscription');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Foresight Budgets' });
});

/* GET home page. */
router.post('/notify-me', function(req, res, next) {
	var substription = new Substription ({
		email: req.body.email
	})
	substription.save()
	res.redirect('/');
});

module.exports = router;
