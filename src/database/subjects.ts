const { Sequelize, Model, Datatypes } = require('sequelize');
const sequelize = require('./index');

const subjects = sequelize.define('subjects', {
    id: Datatypes.INTEGER,
    name: Datatypes.STRING
});

(async () => {
    await sequelize.sync({force: true})
})();

module.exports = subjects;