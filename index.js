const express = require("express");
const app = express();
const mogoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());
mogoose.connect(
  "mongodb+srv://Itravel:Itravel@cluster0.etxy3om.mongodb.net/?retryWrites=true&w=majority"
);

app.listen(800, () => {
  console.log("Server Is Up");
});
