'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('services', [
      {
        ownerId: 1,
        description: 'Floral Arrangement Services - prices vary ',
        price: '30',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F01%2F03%2F5a%2F01035acb4091111decd1b3eaaa34b192.jpg&f=1&nofb=1&ipt=fa3bb91bda1582c0d87c4d6279c0e6a1ee5edb3650c8fb8ef86a3956fc31367e&ipo=images',
        marketId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        description:
          'Mariachi Band to play at any event big or small. Prices vary.',
        price: '350',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapis.xogrp.com%2Fmedia-api%2Fimages%2F33679468-4b63-11e5-9816-22000aa61a3e&f=1&nofb=1&ipt=1fb4c1fb2c6e9c2f9e5557307a6a6b51d1934c1434b2590924a410a17e356f52&ipo=images',
        marketId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        description: 'Marimba Band for hire. Prices Vary',
        price: '400',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felpotosi.net%2Fimg%2Fcontents%2Fimages_640%2F2017%2F08%2F10%2Fnota41440_imagen37033.jpg&f=1&nofb=1&ipt=fce64ebf2e7be5ca97ac373bdfa8609dc467b9fb73836f74741fa733c6b14bae&ipo=images',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        description:
          'Cooking classes - Learn to cook traditional Mexican dishes',
        price: '75',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.isabellestravelguide.com%2Fwp-content%2Fuploads%2F2012%2F10%2Fcooking-class-chef.jpg&f=1&nofb=1&ipt=215b6c06909ecece76feb75b9a67a78c8a6b604f4277e0d2f8b9a891da5ad10b&ipo=images',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        description: 'Custom Embroidery - Prices vary',
        price: '100',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F43%2F7b%2Fd8%2F437bd805ce04c937a4a81ea1e06941a8.jpg&f=1&nofb=1&ipt=6fe644d6dc2a8054a31a356c71801e25310cf00f6b30a9beab452750224c18ee&ipo=images',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        description: 'Traditional Ceramic Pottery Classes -  ',
        price: '50',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcolorful-mexican-pottery-traditional-folk-art-ceramics-60427810.jpg&f=1&nofb=1&ipt=584337318482980060c8b04217b40fa1a6320b62e5c9f2018e2198fc5e8bff37&ipo=images',
        marketId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
        description: 'Cacao Chocolate making workshop',
        price: '30',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F12%2F56%2F6e%2F12566e576fd4a6c3950d7ff3da18e143.jpg&f=1&nofb=1&ipt=5fc7d12e298e0cca6f0787cd0920dd9ec42d745390598568c7fa9fad9a6fda07&ipo=images',
        marketId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
        description: 'Alebrije making class ',
        price: '35',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F10782580%2Fr%2Fil%2F85cb41%2F2365258379%2Fil_fullxfull.2365258379_ssj8.jpg&f=1&nofb=1&ipt=ec335b3c0292144344b67c0e1dc7a2896195590ae82be472163035b8a6b8ac7b&ipo=images',
        marketId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('services')
  }
}
