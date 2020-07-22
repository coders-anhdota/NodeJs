var db = require("../db");

module.exports.validateAuth = function (req, res, next) {
  if (!req.signedCookies.UserId) {
    res.redirect("auth/login");
    return;
  }

  var user = db.get("users").find({ id: req.signedCookies.UserId }).value();

  if (!user) {
    res.redirect("auth/login");
    return;
  }

  next();
};
