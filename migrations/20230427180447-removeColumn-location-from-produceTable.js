'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('produceTable', 'location')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('produceTable', 'location', {
      type: Sequelize.INTEGER
    })
  }
}
