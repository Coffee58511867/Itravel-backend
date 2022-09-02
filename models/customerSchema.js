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
    regDate: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    location: {
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
    }
  },
  {
    collection: "customers",
  }
);
module.exports = mongoose.model("customers", customerSchema);
