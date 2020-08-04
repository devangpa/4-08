const mongoose = require('mongoose');

// Create Schema
const BeedingSchema = mongoose.Schema({
  Bidingpostid: {
    type: String,
    require: true,
  },
  BiderUserID: {
    type: String,
    require: true,
    unique: true,
  },
  BidingDescription: {
    type: String,
    require: true,
  },
  BidingPrice: {
    type: Number,
    require: true,
  },
  jobposteduserID: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('bid', BeedingSchema);
