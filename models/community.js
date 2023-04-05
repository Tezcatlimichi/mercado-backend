'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Community.belongsTo(models.User, {
        as: 'articles',
        foreignKey: 'ownerId'
      })
    }
  }
  Community.init(
    {
      ownerId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      picture1: DataTypes.TEXT,
      picture2: DataTypes.TEXT,
      link: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Community',
      tableName: 'communities'
    }
  )
  return Community
}
