const mongoose = require("mongoose");

const tripsschema = mongoose.Schema({
  name: String,
  desc: String,
  date: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

module.exports.trips = mongoose.model("trips", tripsschema);
