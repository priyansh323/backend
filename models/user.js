'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: DataTypes.TEXT,
    pid: DataTypes.INTEGER,
    role: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};