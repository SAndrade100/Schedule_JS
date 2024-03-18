import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './index';

const subjects = sequelize.define('subjects', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
});

(async () => {
    await sequelize.sync({force: true})
})();

export default subjects;