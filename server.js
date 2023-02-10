const port = 8080 || process.env.PORT;
const express = require('express');
const loginRoute = require('./routes/loginRoute');
const indexRoute = require('./routes/indexRoute');
const registerRoute = require('./routes/registerRoute');
const dashboardRoute = require('./routes/dashboardRoute');
const app = express();
const path = require('path');
const connection = require('./config/database');
const session = require('express-session');
const passport = require('passport');
const flash = require('express-flash');

console.clear();
app.use(flash());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRoute);
app.use('/', loginRoute);
app.use('/', registerRoute);
app.use('/dashboard', dashboardRoute);
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
