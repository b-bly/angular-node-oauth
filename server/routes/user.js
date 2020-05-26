const passport = require('passport');
const express = require('express');
const router = express.Router();

/* GET Google Authentication API. */
router.get(
  '/',
  (req, res) =>  {
    if (req.isAuthenticated()) {
      res.json({name: req.user.name, logegdIn: true});
    } else {
      // send status: not authenticated or redirect
      res.json({loggedIn: false});
    }
  }
);

module.exports = router;