const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const homeController = require('../controllers/homeController');

router.get('/subscriptions/all', subscriptionController.getAllSubscriptions);
router.get('/subscriptionType/:type', subscriptionController.getSubscriptionsByType);
router.get('/',homeController.getEnvironment);

module.exports = router;
