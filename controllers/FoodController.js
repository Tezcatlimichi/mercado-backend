const { Food } = require('../models')

//read all food
const GetAllFood = async (req, res) => {
  try {
    const allFood = await Food.findAll()
    res.send(allFood)
  } catch (error) {
    throw error
  }
}
//single food item
const GetSingleFood = async (req, res) => {
  try {
    let foodId = parseInt(req.params.id)
    const getFood = await Food.findOne({
      where: { id: foodId },
      returning: true
    })
    res.send(getFood)
  } catch (error) {
    throw error
  }
}
//create food item
const MakeFood = async (req, res) => {
  try {
    let data = {
      ...req.body
    }
    let food = await Food.create(data)
    res.send(food)
  } catch (error) {
    throw error
  }
}
//update food item
const UpdateFood = async (req, res) => {
  try {
    let foodId = parseInt(req.params.id)
    const changeFood = await Food.update(req.body, {
      where: { id: foodId },
      returning: true
    })
    res.send(changeFood)
  } catch (error) {
    throw error
  }
}
//delete food item
const DeleteFood = async (req, res) => {
  try {
    await Food.destroy({ where: { id: req.params.id } })
    res.send({
      message: `Food item has been successfully deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllFood,
  GetSingleFood,
  MakeFood,
  UpdateFood,
  DeleteFood
}
