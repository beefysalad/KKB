const express = require('express');
const {
  loginGet,
  checkAuthenticated,
  checkNotAuthenticated,
} = require('../controller/loginController');
const router = express.Router();
const passport = require('passport');

router.get('/login', checkNotAuthenticated, loginGet).post(
  '/login',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

module.exports = router;
