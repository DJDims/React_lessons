import db from '../config/database.js';
import {DataTypes, Model} from 'sequelize';
import Department from './department.js';

class Profession extends Model {}
Profession.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        duration: {
            type: DataTypes.INTEGER
        },
        education: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        poster: {
            type: DataTypes.STRING
        },
        department_id: {
            type: DataTypes.INTEGER
        },
    },
    {
        sequelize: db,
        tableName: 'professions',
        freezeTableName: true,
        modelName: 'Profession',
        timestamp: true
    }
);

Profession.belongsTo(Department, {foreignKey: 'department_id', as: 'department'});
Department.hasMany(Profession, {as: 'profession', foreignKey: 'department_id'});

export default Profession;