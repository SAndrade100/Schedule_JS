import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './index';

const classroom = sequelize.define('classroom', {
    id: DataTypes.INTEGER,
    series: DataTypes.STRING,
    year: DataTypes.INTEGER
});

(async () => {
    await sequelize.sync({force: true})
})();

export default classroom;