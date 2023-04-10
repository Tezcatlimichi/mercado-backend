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
    let artId = parseInt(req.params.id)
    const oneArt = await Art.findOne({ where: { id: artId } })
    res.send(oneArt)
  } catch (error) {
    throw error
  }
}
//create art

const NewArt = async (req, res) => {
  try {
    let data = {
      ...req.body
    }
    let artPiece = await Art.create(data)
    res.send(artPiece)
  } catch (error) {
    throw error
  }
}

// update art

const UpdateArt = async (req, res) => {
  try {
    let artId = parseInt(req.params.id)
    const updated = await Art.update(req.body, {
      where: { id: artId },
      returning: true
    })
    res.send(updated)
  } catch (error) {
    throw error
  }
}
//delete art
const DeleteArt = async (req, res) => {
  try {
    await Art.destroy({ where: { id: req.params.id } })
    res.send({
      message: 'Art post has been successfully deleted'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllArt,
  GetArt,
  NewArt,
  UpdateArt,
  DeleteArt
}
