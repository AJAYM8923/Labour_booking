const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  address: { type: String, required: true },
  place: { type: String, required: true },
  date: { type: Date, required: true },
  requiredWork: { type: String, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
