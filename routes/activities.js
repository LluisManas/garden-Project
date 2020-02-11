const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");
const User = require("../models/User");

router.get("/activities/:activity", (req, res, next) => {
  Activity.find({
    group:
      req.params.activity.charAt(0).toUpperCase() + req.params.activity.slice(1)
  })
    .populate("author")
    .then(data => {
      //if user has created this button

      res.render("activities", {
        type: req.params.activity,
        data: data
      });
    })
    .catch(err => {
      console.error(err);
    });
});

router.get("/activities/:activity/new", (req, res, next) => {
  res.render("new-activity", { activityType: req.params.activity });
});

router.get("/activities/:activity/delete/:id", (req, res, next) => {
  Activity.findById(req.params.id).then(result => {
    console.log(result.author, "this is req.user.id->", req.user._id);
    if (result.author.toString() === req.user._id.toString()) {
      Activity.deleteOne({ _id: req.params.id })
        .then(result => {
          console.log(`Deleted ${result}`);
          res.redirect(`/activities/${req.params.activity}`);
        })
        .catch(err => res.render("activities", { message: err }));
    }
  });
});

router.post("/activities/:activity/new", (req, res, next) => {
  //res.send(req.body);
  if (req.body.activityName === "" || req.body.description === "") {
    res.render("new-activity", { message: "Add the necessary information" });
    return;
  }

  const newActivity = new Activity({
    activityName: req.body.activityName,
    group:
      req.params.activity.charAt(0).toUpperCase() +
      req.params.activity.slice(1),
    description: req.body.description,
    author: req.user._id,
    conmpleted: false
  });

  newActivity
    .save()
    .then(() => {
      res.redirect(`/activities/${req.params.activity}`);
    })
    .catch(err => {
      console.error(err);
      res.render("new-activity", {
        message: err
      });
    });
});

module.exports = router;
