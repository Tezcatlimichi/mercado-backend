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
//read single market
const GetMarket = async (req, res) => {
  try {
    let marketId = parseInt(req.params.id)
    const market = await Market.findOne({
      where: { id: marketId },
      returning: true
    })
    res.send(market)
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetAllMarkets,
  GetMarket
}
