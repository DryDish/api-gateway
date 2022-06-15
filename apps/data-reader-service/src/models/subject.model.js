import { Model, DataTypes } from 'sequelize';
import { Lecture } from './lecture.model.js';
import { Class } from './class.model.js';

class Subject extends Model {}

const subjectInit = (sequelize) => {
	Subject.init(
		{
			subjectId: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				field: 'subject_id',
			},
			name: {
				type: DataTypes.STRING(45),
				allowNull: false,
			},
			teacherUserId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				field: 'teacher_user_id',
			},
		},
		{
			sequelize,
			tableName: 'subjects',
		}
	);
};

const subjectAssociationInit = () => {
	Subject.hasMany(Lecture, {
		foreignKey: {
			name: 'subjectId',
			allowNull: false,
			field: 'subject_id',
		},
	});

	Subject.belongsTo(Class, {
		foreignKey: {
			name: 'classId',
			allowNull: false,
			field: 'class_id',
		},
	});
};

export { Subject, subjectInit, subjectAssociationInit };
