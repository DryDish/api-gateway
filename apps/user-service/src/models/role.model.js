import { Model, DataTypes } from "sequelize";
import { User } from "./user.model.js";

class Role extends Model {}

const roleInit = (sequelize) => {
  Role.init(
    {
      roleId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "role_id",
      },
      name: {
        type: DataTypes.ENUM("student", "teacher"),
        allowNull: false,
        unique: true
      },
    },
    {
      sequelize,
      tableName: "roles",
    }
  );
};

const roleAssociationInit = () => {
  Role.hasMany(User, {
    foreignKey: {
      name: "roleId",
      allowNull: false,
      field: "role_id",
    },
  });
};

export { Role, roleInit, roleAssociationInit };