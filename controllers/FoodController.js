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

module.exports = {
  GetAllFood,
  GetSingleFood
}