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

module.exports = {
  GetAllFood
}
