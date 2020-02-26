const skills = [
    {skill: 'HTML', level: true},
    {skill: 'CSS', level: false},
    {skill: 'JavaScript', level: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function create(id, skill) {
    skills.push(skill);
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function update(id, skill) {
    skills.splice(id, 1, skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}