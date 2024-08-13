const subscriptionService = require('../services/subscriptionService');

const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await subscriptionService.getAllSubscriptions();
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSubscriptionsByType = async (req, res) => {
  try {
    const subscriptionType = req.params.type;
    const subscriptions = await subscriptionService.getSubscriptionsByType(subscriptionType);
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionsByType
};
