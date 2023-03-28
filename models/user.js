'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Art, { foreignKey: 'ownerId' })
      User.hasMany(models.Community, { foreignKey: 'ownerId' })
      User.hasMany(models.Food, { foreignKey: 'ownerId' })
      User.hasMany(models.Market, { foreignKey: 'ownerId' })
      User.hasMany(models.Service, { foreignKey: 'ownerId' })
    }
  }
  User.init(
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
