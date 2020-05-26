const passport = require('passport');
const express = require('express');
const router = express.Router();

/* GET Google Authentication API. */
router.get(
  '/',
  passport.authenticate("google", { scope: ["profile", "email", 'https://www.googleapis.com/auth/youtube.readonly'] }), 
);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/api/auth/google", session: true }),
  function(req, res) {

      console.log(req.user);

      res.redirect("http://localhost:4200?token=" + req.user.access_token);
  }
);

module.exports = router;