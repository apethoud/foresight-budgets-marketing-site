var express = require('express');
var router = express.Router();
var Substription = require('../models/subscription');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Foresight Budgets' });
});


/* POST notify page. */
router.post('/notify-me', function(req, res, next) {
	var user = req.body.email
	var helper = require('sendgrid').mail;
	var fromEmail = new helper.Email('foresightbudgets@gmail.com');
	var toEmail = new helper.Email(user);
	var subject = 'Foresight Budgets';
	var content = new helper.Content('text/plain', 'Thank you for your interests in Foresight Budgets.');
	var mail = new helper.Mail(fromEmail, subject, toEmail, content);

	var sg = require('sendgrid')('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');
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function (error, response) {
	  if (error) {
	    console.log('Error response received');
	  }
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	});
	var substription = new Substription ({
		email: req.body.email
	})
	substription.save()
	res.redirect('/');
});

module.exports = router;
