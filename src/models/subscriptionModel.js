const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  userId: String,
  plan: String,
  status: String,
  subscriptionType: String,
  price: Number,
  autoRenew: Boolean,
  paymentMethod: String
}, { collection: 'SubscriptionDetails' });

const Subscription = mongoose.model('Subscription', SubscriptionSchema);

module.exports = Subscription;
