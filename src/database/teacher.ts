import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './index';

const teacher = sequelize.define('teacher', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    daysAvailable: DataTypes.ARRAY(DataTypes.STRING)
});

(async () => {
    await sequelize.sync({force: true})
})();

export default teacher;