'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Food.init(
    {
      ownerId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      price: DataTypes.STRING,
      location: DataTypes.INTEGER,
      picture1: DataTypes.TEXT,
      picture2: DataTypes.TEXT,
      picture3: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Food',
      tableName: 'foods'
    }
  )
  return Food
}
