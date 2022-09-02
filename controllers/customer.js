const customerSchema = require("../models/customerSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = require("../middlewares/auth");
const createCustomer = async (req, res) => {
  try {
    const {
      username,
      phonenumber,
      email,
      regDate,
      gender,
      location,
      password,
      confirm,
    } = req.body;

    if (
      !(
        username &&
        phonenumber &&
        email &&
        regDate &&
        gender &&
        location &&
        password &&
        confirm
      )
    ) {
      res.status(400).send("All input are required");
    }

    const oldUser = await customerSchema.findOne({ email });

    if (oldUser) {
      res.status(409).send("User Already Exists");
    }

    hashedPassword = await bcrypt.hash(password, 10);

    const user = await customerSchema.create({
      username,
      phonenumber,
      email: email.toLowerCase(),
      regDate,
      gender,
      location,
      password: hashedPassword,
      confirm,
    });

    const userToken = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = userToken;
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const user = await customerSchema.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
      res.status(200).json(user);
    }
    res.status(400).send("Incorrect Username or Password");
  } catch (err) {
    console.log(err);
  }
};

const welcomeUser =
  (auth,
  (req, res) => {
    res.status(200).send("Welcome");
  });

module.exports = { createCustomer, loginCustomer, welcomeUser };
