'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Service.belongsTo(models.User, {
        as: 'serviceOwner',
        foreignKey: 'ownerId'
      })
      Service.belongsTo(models.Market, {
        as: 'serviceMarket',
        foreignKey: 'marketId'
      })
    }
  }
  Service.init(
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
      modelName: 'Service',
      tableName: 'services'
    }
  )
  return Service
}
