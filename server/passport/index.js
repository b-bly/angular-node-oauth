const passport = require("passport");
const googleOauth = require("passport-google-oauth");
const GoogleStrategy = googleOauth.OAuth2Strategy;
const config = require('../config');
const googleConfig = config.google;

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