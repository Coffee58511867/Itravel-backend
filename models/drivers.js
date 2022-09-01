const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let requestSchema = new Schema(
  {
    location: {
      type: String,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    passengerName: {
      type: String,
      required: true,
    },
    homePickupTime: {
      type: String,
      required: true,
    },
    schoolPickup: {
      type: String,
      required: true,
    },
    passengerGrade: {
      type: Number,
      required: true,
    },
    schoolName: {
      type: String,
      required: true,
    },
    parentContact: {
      type: String,
      required: true,
    },
  },
  {
    collection: "requests",
  }
);
module.exports = mongoose.model("customerrequest", requestSchema);
