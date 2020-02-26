var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/todos', function(req, res) {
  res.render('skills/index', {
    skills: skillModels.getAll()
  });
});

module.exports = router;
