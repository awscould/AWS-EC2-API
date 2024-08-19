const mongoose = require('mongoose');
let MONGO_URI= 'mongodb+srv://expressjsdemo:Mpa54EQRqCMiaIs3@subscriptiondemo.zmrzkxg.mongodb.net/Subscription?retryWrites=true&w=majority&appName=SubscriptionDemo';
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true});
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
