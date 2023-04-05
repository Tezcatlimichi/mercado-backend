const { Art } = require('../models')

//read
const GetArt = async (req, res) => {
  try {
    const allArt = await Art.findAll()
    res.send(allArt)
  } catch (error) {
    throw error
  }
}
