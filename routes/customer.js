const express = require("express");
const router = express.Router();

const {
  createRequest,
  getRequests,
} = require("../controllers/customerrequest");

router.post("/makerequest", createRequest);
router.get("/requests", getRequests);

module.exports = router;
