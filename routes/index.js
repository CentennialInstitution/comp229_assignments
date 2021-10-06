var express = require('express');
var router = express.Router();

 /* Index page */
 
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* Home page */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* About page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* Projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* Services page */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* Contact */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

/* Services page */
router.get('/serviceregister', function(req, res, next) { //routing for after service registeration button. 
  res.render('serviceregister', { title: 'Register'});
});

module.exports = router;
