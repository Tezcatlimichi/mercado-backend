'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('produceTable', 'marketId', {
      type: Sequelize.INTEGER
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('produceTable', 'marketId')
  }
}
