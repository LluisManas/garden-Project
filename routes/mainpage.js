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
  console.log("hello");
  console.log(req.user);
  res.render("mainpage", {
    username: req.user.username || req.user.displayName,
    apiKey: process.env.APIkey,
    user: req.user
  });
});

module.exports = router;
