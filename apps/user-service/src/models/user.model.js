import { Model, DataTypes } from "sequelize";
import { Role } from "./role.model.js";

class User extends Model {}

const userInit = (sequelize) => {
  User.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "user_id",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    },
    {
      sequelize,
      tableName: "users",
    }
  );
};

const userAssociationInit = () => {
  User.belongsTo(Role, {
    foreignKey: {
      name: "roleId",
      allowNull: false,
      field: "role_id",
    },
  });
};

export { User, userInit, userAssociationInit };