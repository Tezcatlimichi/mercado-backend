'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Produce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produce.belongsTo(models.User, {
        as: 'produceOwner',
        foreignKey: 'ownerId'
      })
      Produce.belongsTo(models.Market, {
        as: 'produceMarket',
        foreignKey: 'marketId'
      })
    }
  }
  Produce.init(
    {
      ownerId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      picture1: DataTypes.TEXT,
      picture2: DataTypes.TEXT,
      picture3: DataTypes.TEXT,
      price: DataTypes.STRING,
      location: DataTypes.INTEGER,
      marketId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Produce',
      tableName: 'produceTable'
    }
  )
  return Produce
}
