'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('foods', [
      {
        ownerId: 1,
        description:
          'Burgers on the grill with lettuce , tomato, cheese, avocado , mayo , jalapenos, pineapple,and mushrooms. served with fries',
        price: '14',
        picture1: 'https://imgur.com/iXzZoQu.png',
        marketId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        description:
          'Mexican Torta. comes with lettuce, tomato, cheese, avocado, meat, mayo, jalapenos, pineapple, mushrooms. served with fries',
        price: '15',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7d%2Ff2%2F14%2F7df2141d1b3043f408ae08a188bf47a3.jpg&f=1&nofb=1&ipt=a49cb1175ad4bf2236ff82bf2ba92c2bde6ad52dcf5917f6b0d08f4d5d8c773d&ipo=images',
        marketId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        description: 'Chicken Tacos with cilantro and onion.',
        price: '2',
        picture1: 'https://imgur.com/3sTG3eV.png',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        description: 'Chicken Tostadas with lettuce, onion , cilantro.',
        price: '2',
        picture1: 'https://imgur.com/kTrQcv8.png',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        description:
          'Chicken or potato flautas comes with lettuce, onion , crema, and cheese.',
        price: '6',
        picture1: 'https://imgur.com/zpq5yYr.png',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        description:
          'Steak or chicken quesadillas come with lettuce,crema, cheese and onions.',
        price: '8',
        picture1: 'https://imgur.com/9pke9Gt.png',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        description:
          'Corn on the cob. Also available in a cup with cheese and mayo.',
        price: '3',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb4%2F11%2Fd9%2Fb411d973177c2da753e85ab3b0198857.jpg&f=1&nofb=1&ipt=d7dd48815a5a06fede3b683498ba25302a685654e5f3151d2fda82b776ca2a50&ipo=images',
        marketId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        description:
          'Dorilocos - Dorito chips with peanuts, cucumber, valentina sauce and lime.',
        price: '4',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmasdemx.com%2Fwp-content%2Fuploads%2F2018%2F06%2F1.jpg&f=1&nofb=1&ipt=0ce2c837c99c38f61351b165d63c9e3ecf983ec1d01ade54300aa3cfdf307fd9&ipo=images',
        marketId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        description: 'Licuachelas - beer mixed with candy of all sorts',
        price: '15',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cocinavital.mx%2Fwp-content%2Fuploads%2F2022%2F09%2Flicuachelas-receta.jpg&f=1&nofb=1&ipt=37cfcf483e87e5944e43fb92eb30372f5543334b4d2b85c06977402bb1aa08a5&ipo=images',
        marketId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
        description: 'Meat tlayudas - Oaxaca cusine',
        price: '12',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fagringoinmexico.com%2Fwp-content%2Fuploads%2F2018%2F10%2FIMG_4546.jpg&f=1&nofb=1&ipt=dc5733dc6dc21b403574a137702386a98c59ba6fa77ce220dde6c5051bd6b837&ipo=images',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('foods')
  }
}
