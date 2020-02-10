const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const User = require("../models/User");

router.get("/event", (req, res, next) => {
  res.render("events");
});

router.get("/new-event", (req, res, next) => {
  res.render("new-event");
});

router.post("/add-event", (req, res, next) => {
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
    // author: Schema.Types.ObjectId,
    eventDate: req.body.eventDate
  });

  newEvent
    .save()
    .then(() => {
      res.redirect("/event");
    })
    .catch(err => {
      res.render("/new-event", { message: "Add necessary information" });
    });
});

module.exports = router;
