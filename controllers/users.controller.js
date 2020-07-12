var db = require("./../db");
var shortid = require("shortid");

module.exports.index = (req, res) => {

  res.render("users/index", {
    users: db.get("users").value(),
  });
};

module.exports.search = (req, res) => {
  var q = req.query.q;
  var matchedUser = db
    .get("users")
    .filter((user) => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
  res.render("users/index", {
    users: matchedUser.value(),
  });
};

module.exports.create = (req, res) => res.render("users/create");

module.exports.postMethod = (req, res) => {
  req.body.id = shortid.generate();
  
  db.get("users").push(req.body).write();
  res.redirect("/users");
};

module.exports.getMethod = function (req, res) {
  var id = req.params.id;

  var user = db.get("users").find({ id: id });
  res.render("users/view", {
    user: user.value(),
  });
};
