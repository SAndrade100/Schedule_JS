const { Sequelize, Model, Datatypes } = require('sequelize');
const sequelize = require('./index');

const classroom = sequelize.define('classroom', {
    id: Datatypes.INTEGER,
    series: Datatypes.STRING,
    year: Datatypes.INTEGER
});

(async () => {
    await sequelize.sync({force: true})
})();

module.exports = classroom;