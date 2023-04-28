'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('arts', [
      {
        ownerId: 1,
        description:
          'Yaxche, the world tree, the first tree in existence, the ceiba tree. Yaxche was axis mundi, the navel of the world uniting the underworld (represented here by the crocodile coming out of the water), the earth and the sky (heavens).',
        price: '800',
        picture1: 'https://imgur.com/bO4ctZ3.png',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        description: 'Angry man - Wooden Sculpture ',
        price: '200',
        picture1: 'https://imgur.com/rgi4QF6.png',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        description: 'Mascara Shaman - wood and acrylic',
        price: '350',
        picture1: 'https://imgur.com/uKB0uuc.png',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        description: 'Hombre de Negro - acrylic on canvas',
        price: '150',
        picture1: 'https://imgur.com/mcCplpE.png',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        description: 'Orange apparition - acrylic on canvas',
        price: '200',
        picture1: 'https://imgur.com/9i8Hf48.png',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        description: 'Flames - acrylic on canvas',
        price: '220',
        picture1: 'https://imgur.com/DX4JqHc.png',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        description: 'Gallo - Acrylic on canvas',
        price: '250',
        picture1: 'https://imgur.com/ZGGkDCG.png',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
        description: 'El sol - David ',
        price: '200',
        picture1: 'https://imgur.com/SZVcPRq.png',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
        description: 'Iguana psicodelica - Acrylic on canvas',
        price: '400',
        picture1: 'https://imgur.com/rXiawCJ.png',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
        description: 'Dragon azul - Acrlic on canvas',
        price: '500',
        picture1: 'https://imgur.com/UQDln4S.png',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('arts')
  }
}
