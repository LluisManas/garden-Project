const express = require("express");
const router = require("router");
const Activity = require("../models/Activity");
const User = require("../models/User");

router.get("/activities", (req, res, next) => {
  res.render("activities");
});
