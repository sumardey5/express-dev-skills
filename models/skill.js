const skills = [
    {skill: 'HTML', level: true},
    {skill: 'CSS', level: false},
    {skill: 'JavaScript', level: true}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}