var Product = require("./../models/product.model");

module.exports.listProduct = async function (req, res, next) {
  var page = parseInt(req.query.page) || 1;
  var perPage = 6;
  var start = (page - 1) * perPage;
  var end = page * perPage;
  // res.render("products/listProduct", {
  //   products: db.get("products").drop(start).take(perPage).value(),
  // });
  try {
    var products = await Product.find();
    // products.foo();
    res.render("products/listProduct", {
      products: products.slice(start, end),
    });
  } catch (error) {
    next(error);
  }
};
