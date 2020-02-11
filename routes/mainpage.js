const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/mainpage", (req, res, next) => {
  res.render("mainpage", { username: req.user.username });
});

module.exports = router;
