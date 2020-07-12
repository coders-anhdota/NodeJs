var express = require("express");

var controller = require("./../controllers/users.controller");
var validate = require("./../validates/postCreate.validate");

var router = express.Router();

router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.post("/create", validate.postCreate, controller.postMethod);

router.get("/:id", controller.getMethod);

module.exports = router;
