/**
 * Name - Mohammed Abrar
 * student ID - 301206349
 * Date - 10/05/2021
 */

// Third party packages

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// Engine setup - views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // express  -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Handle 404 error

app.use(function(req, res, next) {
  next(createError(404));
});

// Handle other errors
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render  error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
});

module.exports = app;
