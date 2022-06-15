import { roleAssociationInit, roleInit } from "../models/role.model.js";
import { userAssociationInit, userInit } from "../models/user.model.js";


const modelLoader = (sequelize) => {
	loadModels(sequelize);
  loadAssociations()
};

const loadModels = (sequelize) => {
	userInit(sequelize);
	roleInit(sequelize);
};

const loadAssociations = () => {
	userAssociationInit();
	roleAssociationInit();
};

export { modelLoader };
