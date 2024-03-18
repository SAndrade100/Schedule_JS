import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './index';

const room = sequelize.define('room', {
    id: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER
});

(async () => {
    await sequelize.sync({force: true})
})();

export default room;