// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Questionnaire = require('./models/Questionnaire');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost:27017/youngceoent', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Signup Route
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ userExists: true });
  } else {
    const newUser = new User({ email, password });
    await newUser.save();
    return res.status(201).json({ userExists: false });
  }
});

// Questionnaire Route
app.post('/api/questionnaire', async (req, res) => {
  const questionnaire = new Questionnaire(req.body);
  await questionnaire.save();
  res.status(201).json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
