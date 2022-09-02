const busRequest = require("../models/request.js");

const createRequest = async (req, res) => {

  const customerRequest = req.body;
  const newCustomer = new busRequest(customerRequest);
  await newCustomer.save();
  res.json(customerRequest);
};

const getRequests = (req, res) => {
  busRequest.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const updateRequest = (req, res) => {};
const deleteRequest = (req, res) => {};
module.exports = { createRequest, getRequests, updateRequest, deleteRequest };
