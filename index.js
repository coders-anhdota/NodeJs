const express = require("express");
const app = express();
const port = 3000;
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const shortid = require("shortid");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ users: [] }).write();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) =>
  res.render("index", {
    name: "My name is Tien Anh",
  })
);

app.get("/users", (req, res) =>
  res.render("users/index", {
    users: db.get("users").value(),
  })
);

app.get("/users/search", (req, res) => {
  var q = req.query.q;
  var matchedUser = db
    .get("users")
    .filter((user) => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
  res.render("users/index", {
    users: matchedUser.value(),
  });
});

app.get("/users/create", (req, res) => res.render("users/create"));

app.post("/users/create", (req, res) => {
  req.body.id = shortid.generate();
  db.get("users").push(req.body).write();
  res.redirect("/users");
});

app.get("/users/:id", function (req, res) {
  var id = req.params.id;
  var user = db.get("users").find({ id: id });

  res.render("users/view", {
    user: user.value(),
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
