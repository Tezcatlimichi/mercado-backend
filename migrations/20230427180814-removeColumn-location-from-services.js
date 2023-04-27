'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('services', 'location')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('services', 'location', {
      type: Sequelize.INTEGER
    })
  }
}
