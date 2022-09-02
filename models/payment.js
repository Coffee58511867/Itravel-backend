const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let paymentSchema = new Schema(
  {
      phonenumber: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    paymentmethod: {
      type: string,
      required: true,
    },

  },
  {
    collection: "payments",
  }
);
module.exports = mongoose.model("customerpayments", paymentSchema);
