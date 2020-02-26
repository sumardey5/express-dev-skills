var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
});

module.exports = router;
