var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  name:'K.Umashree',
  email:'shreek@gmail.com',
  contact:'9876543210',
  fathersName:'R.Kumar',dob:'25.06.2001',
  age:'21',
  bloodgroup:'A+ve'});
  }); 

module.exports = router;
