var Product = require("../../models/product.model");

module.exports.listProduct = async function (req, res) {

  var products = await Product.find();

  res.json(products);
};
