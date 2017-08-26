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
	var texts = 'Thank you for subscribing! We\'ll keep you informed about future releases and features of Foresight Budgets.If you\'d like to unsubscribe from this mailing list, simply reply to this email with the word \"Unsubscribe\" in the subject line.'
	console.log(texts)
	var helper = require('sendgrid').mail;
	var fromEmail = new helper.Email('foresightbudgets@gmail.com');
	var toEmail = new helper.Email(user);
	var subject = 'Foresight Budgets';
	var content = new helper.Content('text/plain', texts);
	var mail = new helper.Mail(fromEmail, subject, toEmail, content);

	console.log(texts)

	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
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
