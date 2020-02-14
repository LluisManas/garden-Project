//Social Login Strategy: Facebook

const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const User = require("../models/User");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.client_id,
      clientSecret: process.env.client_secret,
      callbackURL: "https://ourgarden.herokuapp.com/auth/facebook/callback",
      profileFields: ["id", "displayName", "picture.type(large)"]
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      User.findOne({ facebookID: profile.id })
        .then(user => {
          if (user) {
            done(null, user);
            return;
          }

          User.create({ facebookID: profile.id })
            .then(newUser => {
              done(null, newUser);
            })
            .catch(err => done(err)); // closes User.create()
        })
        .catch(err => done(err)); // closes User.findOne()
    }
  )
);
