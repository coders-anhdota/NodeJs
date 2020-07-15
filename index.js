require("dotenv").config();
const express = require("express");
var csrf = require("csurf");

var userRoute = require("./routes/users.route");
var loginRoute = require("./routes/login.route");
var productRoute = require("./routes/products.route");
var cartRoute = require("./routes/cart.route");
var transferRoute = require("./routes/transfer.route");

var middlewareAuth = require("./middlewares/auth.middleware");
var middlewareSession = require("./middlewares/session.middleware");

var cookieParser = require("cookie-parser");

const port = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(middlewareSession);
app.use(csrf({ cookie: true }));

app.get("/", (req, res) => {
  res.render("index", {
    name: "My name is Tien Anh",
  });
});

app.use("/cart", cartRoute);
app.use("/users", middlewareAuth.validateAuth, userRoute);
app.use("/auth", loginRoute);
app.use("/products", productRoute);
app.use("/transfer", transferRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
