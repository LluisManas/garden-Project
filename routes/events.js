const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const User = require("../models/User");

const checkIfLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/login");
  }
};
router.get("/event", checkIfLoggedIn, (req, res, next) => {
  Event.find({})
    .populate("author")
    .then(events => {
      res.render("events", { events });
    });
  // res.render("events");
});

router.get("/new-event", checkIfLoggedIn, (req, res, next) => {
  res.render("new-event");
});

router.post("/add-event", checkIfLoggedIn, (req, res, next) => {
  const eventName = req.body.eventName;
  const description = req.body.description;
  const eventDate = req.body.eventDate;
  if (eventName === "" || description === "" || eventDate === "") {
    res.render("new-event", { message: "Add necessary information" });
    return;
  }

  const newEvent = new Event({
    eventName: req.body.eventName,
    description: req.body.description,
    author: req.user._id,
    eventDate: req.body.eventDate
  });

  newEvent
    .save()
    .then(() => {
      res.redirect("/event");
    })
    .catch(err => {
      res.render("new-event", { message: "Add necessary information" });
    });
});

module.exports = router;
