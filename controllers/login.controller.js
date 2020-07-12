var db = require("../db");

module.exports.login = function (req, res, next) {
  res.render("auth/login");
};

module.exports.postLogin = function (req, res, next) {
  
  
  res.redirect("/users");
};
