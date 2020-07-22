var User = require("../models/user.model");
var shortid = require("shortid");

module.exports.index = async (req, res) => {
  var users = await User.find();
  res.render("users/index", {
    users: users,
  });
};

module.exports.search = async (req, res) => {
  var q = req.query.q;
  var users = await User.find();
  var matchedUser = users.filter(
    (user) => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  );
  res.render("users/index", {
    users: matchedUser,
  });
};

module.exports.create = async (req, res) => res.render("users/create");

module.exports.postMethod = async (req, res) => {
  req.body.id = shortid.generate();

  var dataArr = req.file.path.split("");
  var avatar = dataArr.slice(7).join("");
  req.body.avatar = avatar;
  var users = await User.find();
  users.push(req.body).write();
  res.redirect("/users");
};

module.exports.getMethod = async function (req, res) {
  var id = req.params.id;
  var users = await User.find();
  var user = users.find({ id: id });
  res.render("users/view", {
    user: user,
  });
};
