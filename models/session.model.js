var mongoose = require("mongoose");

var sessionSchema = mongoose.Schema({
  cart: Object,
});

var Session = mongoose.model("Session", sessionSchema, "sessions");

module.exports = Session;