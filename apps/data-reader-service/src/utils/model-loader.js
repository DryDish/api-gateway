import {
	attendanceAssociationInit,
	attendanceInit,
} from '../models/attendance.model.js';
import { classAssociationInit, classInit } from '../models/class.model.js';
import { lectureAssociationInit, lectureInit } from '../models/lecture.model.js';
import { subjectAssociationInit, subjectInit } from '../models/subject.model.js';

const modelLoader = (sequelize) => {
	loadModels(sequelize);
  loadAssociations()
};

const loadModels = (sequelize) => {
	attendanceInit(sequelize);
	classInit(sequelize);
	lectureInit(sequelize);
	subjectInit(sequelize);
};

const loadAssociations = () => {
	attendanceAssociationInit();
	classAssociationInit();
	lectureAssociationInit();
	subjectAssociationInit();
};

export { modelLoader };
