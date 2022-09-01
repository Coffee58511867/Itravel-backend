const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let customerSchema = new Schema(
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
    date: {
      type: date,
      required: true,
    },
    gender: {
      type: string,
      required: true,
    },
    location: {
      type: string,
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
  },
  {
    collection: "customers",
  }
);
module.exports = mongoose.model("customerregister", customerSchema);
