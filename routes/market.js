const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");

router.get("/market", (req, res, next) => {
  Product.find({})
    .populate("author")
    .then(products => {
      res.render("market", { products });
    });
});

router.get("/new-product", (req, res, next) => {
  res.render("new-product");
});

router.get("/new-product/delete/:id", (req, res, next) => {
  Product.findById(req.params.id).then(data => {
    if (data.author.toString() === req.user._id.toString()) {
      Product.deleteOne({ _id: req.params.id })
        .then(data => {
          res.redirect("/market");
        })
        .catch(err => res.render("market", { message: err }));
    }
  });
});

router.post("/add-product", (req, res, next) => {
  const productName = req.body.productName;
  const description = req.body.description;
  if (productName === "" || description === "") {
    res.render("new-product", { message: "Add necessary information" });
    return;
  }
  const newProduct = new Product({
    productName: req.body.productName,
    description: req.body.description,
    author: req.user._id,
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
    });
});

router.get("/new-request", (resq, res, next) => {
  res.render("new-request");
});

router.post("/add-request", (req, res, next) => {
  console.log("Its good");
  const productName = req.body.productName;
  const description = req.body.description;
  if (productName === "" || description === "") {
    res.render("/new-request", { message: "Add necessary information" });
    return;
  }
  console.log(productName, description);
  console.log(req.body);
  const newProduct = new Product({
    productName: req.body.productName,
    description: req.body.description,
    author: req.user._Id,
    imageUrl: req.body.imageUrl,
    isOffer: false
  });

  newProduct
    .save()
    .then(() => {
      res.redirect("/market");
    })
    .catch(err => {
      res.render("/new-request", { message: "Add necessary information" });
    });
});

module.exports = router;
