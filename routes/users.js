var express = require("express");
var router = express.Router();
const { checkBody } = require("../modules/checkBody");

const User = require("../models/users");

router.post("/signup", (req, res) => {
  const emailInput = req.body.email;
  const passwordInput = req.body.password;
  const arrayOfKeys = ["email", "password"];

  if (!checkBody(req.body, arrayOfKeys)) {
    res.json({ result: false, error: "Missing or empty fields" });
  } else {
    User.findOne({ email: { $regex: new RegExp(emailInput, "i") } }).then(
      (dbData) => {
        if (dbData === null) {
          const newUser = User({
            email: emailInput.toLowerCase(),
            password: passwordInput,
          });
          newUser.save().then((data) => {
            res.json({ result: true });
          });
        } else {
          res.json({ result: false, error: "User already exists" });
        }
      }
    );
  }
});

router.post("/signin", (req, res) => {
  const emailInput = req.body.email;
  const passwordInput = req.body.password;
  const arrayOfKeys = ["email", "password"];

  if (!checkBody(req.body, arrayOfKeys)) {
    res.json({ result: false, error: "Missing or empty fields" });
  } else {
    User.findOne({ email: { $regex: new RegExp(emailInput, "i") } }).then(
      (dbData) => {
        if (dbData === null) {
          res.json({ result: false, error: "User not found" });
        } else if (dbData.password != passwordInput) {
          res.json({ result: false, error: "User not found" });
        } else {
          res.json({ result: true });
        }
      }
    );
  }
});

module.exports = router;
