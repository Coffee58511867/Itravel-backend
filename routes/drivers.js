const express = require("express");
const router = express.Router();

const {
  loginDriver,
  createDriver,
  welcomeDriver,
} = require("../controllers/driver");

router.post("/registerdriver", createDriver);
router.post("/logindriver", loginDriver);
router.get("/welcomedriver", welcomeDriver);

module.exports = router;
