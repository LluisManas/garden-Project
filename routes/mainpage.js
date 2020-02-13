const express = require("express");
const router = express.Router();
const User = require("../models/User");
require("dotenv").config();
const checkIfLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

router.get("/mainpage", checkIfLoggedIn, (req, res, next) => {
  //res.send(process.env.APIkey);
  res.render("mainpage", {
    username: req.user.username,
    apiKey: process.env.APIkey,
    user: req.user
  });
});

module.exports = router;
