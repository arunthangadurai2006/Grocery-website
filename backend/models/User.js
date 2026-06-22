const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
});

module.exports = mongoose.model("User", userSchema);