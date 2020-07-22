var User = require("../models/user.model");

module.exports.validateAuth = async function (req, res, next) {
  if (!req.signedCookies.UserId) {
    res.redirect("auth/login");
    return;
  }
  var users = await User.find()
  var user = users.find({ id: req.signedCookies.UserId }).value();

  if (!user) {
    res.redirect("auth/login");
    return;
  }

  next();
};
