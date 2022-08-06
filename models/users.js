const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  phone: String,
  age: Number,
  email: String,
});

module.exports.users = mongoose.model("users", schema);
