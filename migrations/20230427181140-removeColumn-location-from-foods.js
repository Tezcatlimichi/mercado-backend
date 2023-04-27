'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('foods', 'location')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('foods', 'location', {
      type: Sequelize.INTEGER
    })
  }
}
