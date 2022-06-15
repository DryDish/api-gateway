import { Model, DataTypes, Sequelize } from 'sequelize';
import { Lecture } from './lecture.model.js';

class Attendance extends Model {}

const attendanceInit = (sequelize) => {
	Attendance.init(
		{
			attendanceId: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				field: 'attendance_id',
			},
			attendedAt: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: Sequelize.fn('NOW'),
				field: 'attended_at',
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				field: 'user_id',
			},
		},
		{
			sequelize,
			tableName: 'attendances',
		}
	);
};

const attendanceAssociationInit = () => {
	Attendance.belongsTo(Lecture, {
		foreignKey: {
			name: 'lectureId',
			allowNull: false,
			field: 'lecture_id',
		},
	});
};

export { Attendance, attendanceInit, attendanceAssociationInit };
