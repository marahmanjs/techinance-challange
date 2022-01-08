var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies['auth_status'] == 'login'){
    res.render('index', { title: 'Employee List' });
  }else{
    req.flash('error' , 'Please Login First')
    res.redirect('/login')
  }
});

module.exports = router;
