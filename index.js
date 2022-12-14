const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");


const customersRequestController = require("./controllers/customerrequest");
const customerAccount = require("./controllers/customer");
const customerAuth = require("./controllers/customer");
const welcomUser = require("./controllers/customer");
const driverAccount = require("./controllers/driver");
const loginDriver = require('./controllers/driver');
const welcomeDriver = require('./controllers/driver');

app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://Itravel:Itravel@cluster0.etxy3om.mongodb.net/?retryWrites=true&w=majority"
);


app.listen(8000, () => {
  console.log("Server Is Up");
});

app.post("/makerequest", customersRequestController.createRequest);
app.get("/requests", customersRequestController.getRequests);
app.post("/register", customerAccount.createCustomer);
app.post("/login", customerAuth.loginCustomer);
app.get("/welcome", welcomUser.welcomeUser);
app.post("/registerdriver",driverAccount.createDriver );
app.post("/logindriver", loginDriver.loginDriver);
app.get("/welcomedriver" ,welcomeDriver.welcomeDriver);
