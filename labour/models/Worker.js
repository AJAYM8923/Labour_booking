
const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: String,
  number: String,
  rent: String
});

module.exports = mongoose.model('Worker', workerSchema);
