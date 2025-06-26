const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const PassSchema = new mongoose.Schema({
  day: String,
  month: Number,
  year: Number,
  saley: Number
});

const Pass = mongoose.model('Pass', PassSchema);

router.get('/count-passes-today', async (req, res) => {
  const data = await Pass.find({});
  res.json(data);
});

module.exports = router;
