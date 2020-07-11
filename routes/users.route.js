var express = require("express");
var db = require("./../db");
var shortid = require("shortid");

var router = express.Router();

router.get("/", (req, res) =>
  res.render("users/index", {
    users: db.get("users").value(),
  })
);

router.get("/search", (req, res) => {
  var q = req.query.q;
  var matchedUser = db
    .get("users")
    .filter((user) => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
  res.render("users/index", {
    users: matchedUser.value(),
  });
});

router.get("/create", (req, res) => res.render("users/create"));

router.post("/create", (req, res) => {
  req.body.id = shortid.generate();
  db.get("users").push(req.body).write();
  res.redirect("/users");
});

router.get("/:id", function (req, res) {
  var id = req.params.id;
  var user = db.get("users").find({ id: id });

  res.render("users/view", {
    user: user.value(),
  });
});

module.exports = router;
