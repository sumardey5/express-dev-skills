const Skill = require('../models/skill');

module.exports = {
    index,
    show
};

function index (req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
}

function show (req, res) {
    console.log(req.params, ' req.parms');
    res.render('skills/show', {
        skill: skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 2
    });
}