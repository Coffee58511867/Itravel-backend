const express = require("express");
const router = express.Router();

const {
  createRequest,
  getRequests,
} = require("../controllers/customerrequest");
const {
  loginCustomer,
  createCustomer,
  welcomeUser,
} = require("../controllers/customer");

router.post("/makerequest", createRequest);
router.get("/requests", getRequests);
router.post("/register", createCustomer);
router.post("/login", loginCustomer);
router.get("/welcome", welcomeUser);

module.exports = router;
