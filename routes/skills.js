var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.render('skills/index', {
//     skills: Skill.getAll()
//   });
// });

//Index route
router.get('/', skillsCtrl.index);

//Show route
router.get('/:id', skillsCtrl.show);

module.exports = router;
