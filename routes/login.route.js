var express = require("express");
var controller = require("./../controllers/login.controller");
var validate = require("./../validates/postLogin.validate");

var router = express.Router();

router.get("/login", controller.login);

router.post("/login", validate.postLogin, controller.postLogin);

module.exports = router;
