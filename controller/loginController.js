const User = require('../model/user');
const initializePassport = require('../config/passport');
const passport = require('passport');

initializePassport(
  passport,
  async (email) => {
    const temp = email;
    return await User.findOne({ email: temp });
  },
  async (id) => {
    const temp = id;
    return await User.findById(temp);
  }
);
const loginGet = async (req, res) => {
  res.render('accounts/login');
};

const index = async (req, res) => {
  res.render('index');
};
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/dashboard');
  }
  next();
}
module.exports = {
  loginGet,
  index,
  checkNotAuthenticated,
  checkAuthenticated,
};
