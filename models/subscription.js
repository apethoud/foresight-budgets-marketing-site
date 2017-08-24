var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subscriptionSchema = new Schema({
	email: {type: String, required: true}
});

module.exports = mongoose.model('Subscription', subscriptionSchema);