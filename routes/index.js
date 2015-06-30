var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Live Good Home Products'
  });
});

router.get('/mission', function(req, res, next) {
  res.render('mission', {
    title: 'Live Good Home Products'
  });
});

module.exports = router;
