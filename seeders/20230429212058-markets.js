'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('markets', [
      {
        description:
          'El Bazaar Sabado is an arts and crafts market where you can find items from local artisans and talk to them about their craft and what makes their work special.In addition to the visual artworks, you will also find an array of custom-made clothing and accessories, including jewelry.',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpassportmagazine.com%2Fwp-content%2Fuploads%2F2017%2F02%2FBazar-Sabado.jpg&f=1&nofb=1&ipt=986f48cf1ad6cd4e2c9818a2d673aef783bfd6c56d1badd5c778c2f43a219b4c&ipo=images',
        picture2:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5a%2Fca%2F01%2F5aca0146a9cb72ab79427b86660522bd.jpg&f=1&nofb=1&ipt=6d9658b4a8aba7e7bc78e4bac812f1543992bdebb1524d7ef6745177c607d9ab&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description:
          "Mercado San Juan is a traditional market that offers an extensive array of foods and ingredients, including exotic items perfect for home cooks, foodies, and professional chefs. The exotic meats on offer here are particularly interesting, as you'll find items like boar, crocodile, and even lion in some cases. ",
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gaceta.udg.mx%2Fwp-content%2Fuploads%2F2020%2F02%2FMercado-libertad01-1536x1024.jpg&f=1&nofb=1&ipt=a104b6603515590aba6dad6698bcab3f38f279680eceb53cfeb4694c171bccdb&ipo=images',
        picture2:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-media0.fl.yelpcdn.com%2Fbphoto%2FHlg_MBUxlOY-09MLNB_PXA%2Fo.jpg&f=1&nofb=1&ipt=0507c8bc7662c04f0e1bf6bdc1bd665d5dc9d7ddd3226f9ccf300386040f7fe3&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description:
          'Mercado de Sonora  is a popular traditional market that offers a wide selection of goods, including some odd items like herbal medicines and things related to occult magic.',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpostingmexico.com%2Fwp-content%2Fuploads%2F2018%2F08%2Fmercado-sonora-floriansphotos.jpg&f=1&nofb=1&ipt=e41fd20e7e0e90e0e8c673b9594dfdfd62bdd72d62c67c290156b9428a3ac9d9&ipo=images',
        picture2:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjoseignaciohipolito.files.wordpress.com%2F2015%2F11%2Fmercado-sonora-8.jpg%3Fw%3D768&f=1&nofb=1&ipt=6bdf06b737094feb1cff3c3b0237e20e350d9e6039953b24a63c76815bc3b363&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description:
          'Mercado de Jamaica is a flower market where you will find a variety of different species sold individually, in arrangements, and alongside stylish flower pots. Most of the selection here consists of foreign flowers, but there are a few native species as well, including some that are gathered near the market.',
        picture1:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmxcity.mx%2Fwp-content%2Fuploads%2F2016%2F05%2F28834594.jpg&f=1&nofb=1&ipt=1a16047ac9a011371dd798a576da8f34281fa6f60dbad5bf1e4cb71e8be5cd5e&ipo=images',
        picture2:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanewlifewandering.files.wordpress.com%2F2019%2F09%2F1f0b8-mercadojamaicamexico9.jpg%3Fw%3D660&f=1&nofb=1&ipt=671d49986c0188f8522e3e1a06329b2189ccc363275afc1f8ff7549751000825&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('markets')
  }
}
