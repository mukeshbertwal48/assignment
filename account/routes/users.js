var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/account', function(req, res, next) {
  res.render('index',{name: 'Username',pass: 'Password'})
});


module.exports = router;
