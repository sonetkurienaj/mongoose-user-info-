const mongoose = require("mongoose");

const schema = mongoose.Schema({
  type: String,
  date: String,
  amount: { type: String },
  trip: { type: mongoose.Schema.Types.ObjectId, ref: "trips" },
});

module.exports.expenses = mongoose.model("expenses", schema);
