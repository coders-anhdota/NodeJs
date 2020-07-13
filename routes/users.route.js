var express = require("express");
var multer = require("multer");

var controller = require("./../controllers/users.controller");
var validate = require("./../validates/postCreate.validate");

var router = express.Router();

var upload = multer({ dest: "./public/uploads" });

router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.post(
  "/create",
  upload.single("avatar"),
  validate.postCreate,
  controller.postMethod
);

router.get("/:id", controller.getMethod);

module.exports = router;
