const { Art } = require('../models')

//read all art
const GetAllArt = async (req, res) => {
  try {
    const allArt = await Art.findAll()
    res.send(allArt)
  } catch (error) {
    throw error
  }
}

//read single art
const GetArt = async (req, res) => {
  try {
    let artId = parseInt(req.paras.id)
    const oneArt = await Art.findOne({ where: { id: artId } })
    res.send(oneArt)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllArt,
  GetArt
}
