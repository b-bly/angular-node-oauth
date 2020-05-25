const passport = require("passport");
// import passport from "passport";
const googleOauth = require("passport-google-oauth");
const GoogleStrategy = googleOauth.OAuth2Strategy;
const fs = require('fs');
const path = require('path')

// Google API clientID, clientSecret, etc. set up at https://console.developers.google.com/

const keyPath = path.join(__dirname, '../config.json');
let googleConfig = {redirect_uris: ['']};
if (fs.existsSync(keyPath)) {
  googleConfig = require(keyPath).google;
}

passport.serializeUser(function(user, done) {
  done(null, user);
 });

 passport.deserializeUser(function(user, done) {
  done(null, user);
 });

passport.use(
  new GoogleStrategy(
    {
      clientID: googleConfig.client_id,
      clientSecret: googleConfig.client_secret,
      callbackURL: googleConfig.redirect_url
    },
    function(accessToken, refreshToken, profile, done) {
      var userData = {
        email: profile.emails[0].value,
        name: profile.displayName,
        _id: profile.id,
        access_token: accessToken,
        refresh_token: refreshToken,
      };
      done(null, userData);
    }
  )
);

module.exports = passport;