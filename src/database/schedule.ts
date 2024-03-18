import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './index';

const schedule = sequelize.define('schedule', {
    idSubject: DataTypes.INTEGER,
    idTeacher: DataTypes.INTEGER,
    idRoom: DataTypes.INTEGER,
    days: DataTypes.ARRAY(DataTypes.STRING),
    classes: DataTypes.ARRAY(DataTypes.INTEGER)
});

(async () => {
    await sequelize.sync({force: true})
})();

export default schedule;