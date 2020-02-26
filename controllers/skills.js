const skill = require('../models/skill');

module.export = {
    index
};

function index (req, res) {
    res.render('skills/index', {
        skills: skill.getAll()
    });
}