const express = require('express');
const { register, registerGet } = require('../controller/registerController');
const {
  checkNotAuthenticated,
  checkAuthenticated,
} = require('../controller/loginController');
const router = express.Router();

router
  .get('/register', checkNotAuthenticated, registerGet)
  .post('/register', register);

module.exports = router;
