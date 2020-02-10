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

router.post("/add-product", (req, res, next) => {
  const productName = req.body.productName;
  const description = req.body.description;
  if (productName === "" || description === "") {
    res.render("new-product", { message: "Add necessary information" });
    return;
  }
  /* const newProduct = new Product({
    productName: req.body.productName,
    description: req.body.description,
    // author: Schema.Types.ObjectId,
    imageUrl: req.body.imageUrl,
    isOffer: true
  });

  newProduct
    .save()
    .then(() => {
      res.redirect("/market");
    })
    .catch(err => {
      res.render("/new-product", { message: "Add necessary information" });
    }); */
});

module.exports = router;
