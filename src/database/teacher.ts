const { Sequelize, Model, Datatypes } = require('sequelize');
const sequelize = require('./index');

const teacher = sequelize.define('teacher', {
    id: Datatypes.INTEGER,
    name: Datatypes.STRING,
    daysAvailable: Datatypes.ARRAY(Datatypes.STRING)
});

(async () => {
    await sequelize.sync({force: true})
})();

module.exports = teacher;