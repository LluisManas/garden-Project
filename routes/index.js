const express = require("express");
const router = express.Router();
const axios = require("axios");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/axioscall", (req, res, next) => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/forecast?id=2950159&appid=7d74d8e8207ec314f79861d1020ef6e4&units=metric"
    )
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => console.error(err));
});

//route get the actual data

module.exports = router;
