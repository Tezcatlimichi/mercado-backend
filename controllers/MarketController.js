const { Market } = require('../models')

//read all markets
const GetAllMarkets = async (req, res) => {
  try {
    const markets = await Market.findAll()
    res.send(markets)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllMarkets
}
