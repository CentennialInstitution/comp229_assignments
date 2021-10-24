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


let indexController = require('../controllers/index');

/* GET home page. 
router.get('/', indexController.displayHomePage);
*/
/* GET home page. 
router.get('/home', indexController.displayHomePage);
*/
/* GET About Us page. 
router.get('/about', indexController.displayAboutPage);
*/
/* GET Products page. 
router.get('/projects', indexController.displayProductsPage);
*/
/* GET Services page. 
router.get('/services', indexController.displayServicesPage);
*/
/* GET Contact Us page. 
router.get('/contact', indexController.displayContactPage);
*/
/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);


module.exports = router;
