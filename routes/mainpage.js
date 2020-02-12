const express = require("express");
const router = express.Router();
const User = require("../models/User");

const checkIfLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

router.get("/mainpage", checkIfLoggedIn, (req, res, next) => {
  res.render("mainpage", { username: req.user.username });
});

module.exports = router;
