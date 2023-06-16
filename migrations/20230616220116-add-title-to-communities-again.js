'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('communities', 'title', {
      type: Sequelize.TEXT
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('communities', 'title')
  }
}
