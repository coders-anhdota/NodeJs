require("dotenv").config();
const express = require("express");

console.log(process.env.SESSION_SECRET)

var userRoute = require("./routes/users.route");
var loginRoute = require("./routes/login.route");
var validate = require("./validates/auth.validate");

var cookieParser = require("cookie-parser");

const port = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));
app.use(cookieParser(process.env.SESSION_SECRET));

app.get("/", (req, res) => {
  res.render("index", {
    name: "My name is Tien Anh",
  });
});

app.use("/users", validate.validateAuth, userRoute);

app.use("/auth", loginRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
