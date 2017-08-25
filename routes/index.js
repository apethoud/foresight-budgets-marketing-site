var express = require('express');
var router = express.Router();
var Substription = require('../models/subscription');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Foresight Budgets' });
});


/* POST notify page. */
router.post('/notify-me', function(req, res, next) {
	// var helper = require('sendgrid').mail;
	// var fromEmail = new helper.Email('test@example.com');
	// var toEmail = new helper.Email('davidsramirez11@gmail.com');
	// var subject = 'Sending with SendGrid is Fun';
	// var content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
	// var mail = new helper.Mail(fromEmail, subject, toEmail, content);

	// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	// var request = sg.emptyRequest({
	//   method: 'POST',
	//   path: '/v3/mail/send',
	//   body: mail.toJSON()
	// });

	// sg.API(request, function (error, response) {
	//   if (error) {
	//     console.log('Error response received');
	//   }
	//   console.log(response.statusCode);
	//   console.log(response.body);
	//   console.log(response.headers);
	// });
	var substription = new Substription ({
		email: req.body.email
	})
	substription.save()
	res.redirect('/');
});

module.exports = router;
