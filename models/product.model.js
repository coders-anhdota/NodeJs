var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  title: String,
  image: String,
  document: String,
});

var Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
