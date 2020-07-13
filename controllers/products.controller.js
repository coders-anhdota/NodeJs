var db = require("../db");

module.exports.listProduct = function (req, res) {
  var page = parseInt(req.query.page) || 1;
  var perPage = 6;
  var start = (page - 1) * perPage;
  var end = page * perPage;

  res.render("products/listProduct", {
    products: db.get("products").drop(start).take(perPage).value(),
  });
};
