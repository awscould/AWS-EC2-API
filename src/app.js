const express = require('express');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const connectDB = require('./database/db');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config();
// app.use(cors({
//   origin: process.env.Cors 
// }));

app.use(cors());

connectDB();
app.use('/api', subscriptionRoutes);


module.exports = app;
