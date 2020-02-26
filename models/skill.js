const skills = [
    {skill: 'HTML', level: true},
    {skill: 'CSS', level: false},
    {skill: 'JavaScript', level: true}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}