const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");
const User = require("../models/User");

router.get("/activities/:activity", (req, res, next) => {
  //console.log(req.params);
  res.render("activities", { activityType: req.params.activity });
});
router.get("/activities/:activity/new", (req, res, next) => {
  res.render("new-activity", { activityType: req.params.activity });
});

router.post("/activities/:activity/new", (req, res, next) => {
  //res.send(req.body);
  const newActivity = new Activity({
    activityName: req.body.activityName,
    group: req.params.activity,
    description: req.body.description,
    author: req.user._id,
    conmpleted: false
  });
  if (req.body.activityName === "" || req.body.description === "") {
    res.render("new-event", { message: "Add the necessary information" });
    return;
  }

  newActivity
    .save()
    .then(() => {
      res.redirect(`/activities/${req.params.activity}`);
    })
    .catch(err => {
      res.render("/new-event", { message: "Add necessary information" });
    });
});

module.exports = router;
