'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('communities', 'picture2')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('communities', 'picture2', {
      type: Sequelize.TEXT
    })
  }
}
