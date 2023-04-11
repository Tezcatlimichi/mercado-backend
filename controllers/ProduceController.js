const { Produce } = require('../models')

//create produce
const NewProduce = async (req, res) => {
  try {
    let data = {
      ...req.body
    }
    const produce = await Produce.create(data)
    res.send(produce)
  } catch (error) {
    throw error
  }
}
//read all produce
const AllProduce = async (req, res) => {
  try {
    const produce = await Produce.findAll()
    res.send(produce)
  } catch (error) {
    throw error
  }
}
//read single produce
const OneProduce = async (req, res) => {
  try {
    let produceId = parseInt(req.params.id)
    const produce = await Produce.findOne({
      where: { id: produceId },
      returning: true
    })
    res.send(produce)
  } catch (error) {
    throw error
  }
}
// update single produce
const UpdateProduce = async (req, res) => {
  try {
    let produceId = parseInt(req.params.id)
    const updatedProduce = await Produce.update(req.body, {
      where: { id: produceId },
      returning: true
    })
    res.send(updatedProduce)
  } catch (error) {
    throw error
  }
}
// delete single produce
const DeleteProduce = async (req, res) => {
  try {
    await Produce.destroy({
      where: { id: req.params.id },
      returning: true
    })
    res.send({
      message: `Produce has been successfully deleted!`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  NewProduce,
  AllProduce,
  OneProduce,
  UpdateProduce,
  DeleteProduce
}
