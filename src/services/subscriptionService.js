const Subscription = require('../models/subscriptionModel');

const getAllSubscriptions = async () => {
  return await Subscription.find({});
};

const getSubscriptionsByType = async (subscriptionType) => {
  return await Subscription.find({ subscriptionType });
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionsByType
};
