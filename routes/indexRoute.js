const express = require('express');
const { index } = require('../controller/loginController');
const router = express.Router();

router.get('/', index);

module.exports = router;
