const express = require("express");

const userRoute = require("./routes/users.route");

var cookieParser = require("cookie-parser");

const port = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("user-id", 0251254);
  res.render("index", {
    name: "My name is Tien Anh",
  });
});

app.use("/users", userRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
