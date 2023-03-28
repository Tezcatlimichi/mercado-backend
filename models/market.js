'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Market extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Market.hasMany(models.Art, { foreignKey: 'marketId' })
      Market.hasMany(models.Food, { foreignKey: 'marketId' })
      Market.hasMany(models.Service, { foreignKey: 'marketId' })
      Market.hasMany(models.Produce, { foreignKey: 'marketId' })
    }
  }
  Market.init(
    {
      description: DataTypes.TEXT,
      picture1: DataTypes.TEXT,
      picture2: DataTypes.TEXT,
      picture3: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Market',
      tableName: 'markets'
    }
  )
  return Market
}
