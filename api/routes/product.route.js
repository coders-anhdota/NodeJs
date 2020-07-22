var express = require("express");

var controller = require("./../controllers/product.controller");

var router = express.Router();

router.get("/", controller.listProduct);

router.post("/", controller.create);

module.exports = router;
