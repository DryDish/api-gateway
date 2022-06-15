import { Model, DataTypes } from 'sequelize';
import { Subject } from './subject.model.js';

class Class extends Model {}

const classInit = (sequelize) => {
	Class.init(
		{
			classId: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				field: 'class_id',
			},
			name: {
				type: DataTypes.STRING(45),
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: 'classes',
		}
	);
};

const classAssociationInit = () => {
	Class.hasMany(Subject, {
		foreignKey: {
			name: 'classId',
			allowNull: false,
			field: 'class_id',
		},
	});
};

export { Class, classInit, classAssociationInit };
