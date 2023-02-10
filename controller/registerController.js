const User = require('../model/user');
const bcrypt = require('bcrypt');
const registerGet = async (req, res) => {
  res.render('accounts/registration');
};
const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  User.findOne({ email }, async (err, user) => {
    if (!user) {
      try {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) return next();
          bcrypt.hash(password, salt, async (err, hash) => {
            if (err) return next(err);
            const newUser = new User({
              firstName,
              lastName,
              email,
              password: hash,
            });
            await newUser.save();
            res.redirect('/login');
          });
        });
      } catch (error) {
        throw new Error(error);
      }
    } else {
      req.flash('error', { message: 'Email already exists' });
      res.redirect('/register');
    }
  });
};
module.exports = {
  register,
  registerGet,
};
