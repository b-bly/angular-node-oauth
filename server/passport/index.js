const passport = require("passport");
// import passport from "passport";
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
import * as fs from 'fs';
import * as path from 'path';

// Google API clientID, clientSecret, etc. set up at https://console.developers.google.com/

const keyPath = path.join(__dirname, '../../oauth2.keys.json');
let googleConfig = {redirect_uris: ['']};
if (fs.existsSync(keyPath)) {
  googleConfig = require(keyPath);
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