'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('arts', 'location')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('arts', 'location', {
      type: Sequelize.INTEGER
    })
  }
}
