const express = require("express");
const router = express.Router();
const axios = require("axios");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { user: req.user });
});

router.get("/axioscall", (req, res, next) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?id=2950159&appid=${process.env.APIkey}&units=metric`
    )
    .then(response => {
      //var myJSON = JSON.stringify(data);
      res.json(response.data);
    })
    .catch(err => console.error(err));
});

//route get the actual data

module.exports = router;
