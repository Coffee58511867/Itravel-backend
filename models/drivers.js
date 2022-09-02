const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let driverSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    licensenumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirm: {
      type: String,
      required: true,
    },
    token: {
      type:String,
    },
  
  },
  {
    collection: "drivers",
  }
);
module.exports = mongoose.model("driverRegisteration", driverSchema);
