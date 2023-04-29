'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('produceTable', [
      {
        ownerId: 1,
        description: 'Maize - sold by bushel',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.keshrinandan.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fke_maize_nutrition.jpg&f=1&nofb=1&ipt=0b85553bda134cd644a120d386132517915018b3c30e6ffb027a802998b5b5d1&ipo=images',
        price: '7',
        marketId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        description: 'Beans - sold by kilogram',
        picture1: '2',
        price:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffacts.net%2Fwp-content%2Fuploads%2F2021%2F07%2Fdifferent-types-of-beans.jpg&f=1&nofb=1&ipt=cb77f2640cbe28f557022432c0dd05767d5a782417e4da21b273637e632f702f&ipo=images',
        marketId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        description: 'Squash - sold by pound',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1282749%2Fimages%2Fo-SUMMER-SQUASH-GUIDE-facebook.jpg&f=1&nofb=1&ipt=e8635d6e243cf2522d9c266c292fb9a485a1930b40399bcbf8439d2f029da50b&ipo=images',
        price: '3',
        marketId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        description: 'Chia - sold by pound',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd14peyhpiu05bf.cloudfront.net%2Fuploads%2F2017%2F02%2Fshutterstock_400090159.jpg&f=1&nofb=1&ipt=460c04f606babcff2a76c05deae59abbc4a49ee3842c468ca21487fed87b271b&ipo=images',
        price: '10',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        description: 'Amaranth - sold by pound',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgreen-mom.com%2Fwp-content%2Fuploads%2F2014%2F08%2FAmaranth.jpg&f=1&nofb=1&ipt=386d216856b432dea33a828c4a86583b7f0f47cfce252310993a793515333f6c&ipo=images',
        price: '8',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        description: 'Avocados - sold by piece',
        picture1: 'https://imgur.com/KR3f49Y.png',
        price: '2',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        description: 'Tomatoes - sold by pound',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthesuperhealthyfood.com%2Fwp-content%2Fuploads%2F2021%2F02%2Ftomatoes.jpg&f=1&nofb=1&ipt=c79ab732e67c7a97c8c3b719f5924a65f7466fda37d8f4a0644fe6cbbce3db35&ipo=images',
        price: '3',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        description: 'Tomatillos - sold by pound',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F01%2F04%2F72%2F13%2F18064113%2F3%2FrawImage.jpg&f=1&nofb=1&ipt=6a9ea10f8f9f323bd47749e852fd8f4a2d1586003e8451fff21ebee8b17f0dbe&ipo=images',
        price: '2',
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        description: 'Sweet Potato - sold by pound ',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bhg.com.au%2Fmedia%2F29241%2Fsweet-potato-full.jpg&f=1&nofb=1&ipt=42562f490c438f9a06469f12e650e15f35f947c40ccbd4e0f84ad804e7849cff&ipo=images',
        price: '2',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
        description: 'Chili pepper - sold by pound',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_nP54XW27El0%2FS-3zIxLr96I%2FAAAAAAAAAyo%2F__ySuxzYn0o%2Fs1600%2FDSC_3288.JPG&f=1&nofb=1&ipt=5c768fd0930990ffd35e32d6e9379fae3a839ffb29ff0b85a0ab31cf39c29743&ipo=images',
        price: '3',
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('produceTable')
  }
}
