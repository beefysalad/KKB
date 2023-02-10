const express = require('express');
const router = express.Router();
const { getDashboard } = require('../controller/dashboardController');
const {
  checkNotAuthenticated,
  checkAuthenticated,
} = require('../controller/loginController');

router.get('/', checkAuthenticated, getDashboard);

module.exports = router;
