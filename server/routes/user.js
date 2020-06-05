const passport = require('passport');
const express = require('express');
const router = express.Router();
const config = require('../config'),
  {google} = require('googleapis'),
  OAuth2 = google.auth.OAuth2;

/* GET Google Authentication API. */
router.get(
  '/',
  (req, res) => {
    if (req.isAuthenticated()) {
      res.json({ name: req.user.name, logegdIn: true });


    } else {
      // send status: not authenticated or redirect
      res.json({ loggedIn: false });
    }
  }
);

router.get('/profile', userLogged, function (req, res) {

  console.log(req.user);

  var oauth2Client = new OAuth2(
    config.clientID,
    config.clientSecret,
    config.callbackURL
  );

  oauth2Client.credentials = {
    access_token: req.user.access_token
    // refresh_token: req.user.refresh_token
  };

  google.youtube({
    version: 'v3',
    auth: oauth2Client
  }).subscriptions.list({
    part: 'snippet',
    mine: true,
    headers: {}
  }, function (err, data, response) {
    if (err) {
      console.error('Error: ' + err);
      res.json({
        status: "error"
      });
    }
    if (data) {
      console.log(data);
      res.json({
        status: "ok",
        data: data
      });
    }
    if (response) {
      console.log('Status code: ' + response.statusCode);
    }
  });
});

function userLogged(req, res, next) {
  console.log('userLogged')
  if (req.isAuthenticated())
      return next();
  res.redirect('/auth/google');
}

module.exports = router;