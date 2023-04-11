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

//create market
const NewMarket = async (req, res) => {
  try {
    let data = {
      ...req.body
    }
    const market = await Market.create(data)
    res.send(market)
  } catch (error) {
    throw error
  }
}
// update market
const UpdateMarket = async (req, res) => {
  try {
    let marketId = parseInt(req.params.id)
    const market = await Market.update(req.body, {
      where: { id: marketId },
      returning: true
    })
    res.send(market)
  } catch (error) {
    throw error
  }
}
//delete market
const DeleteMarket = async (req, res) => {
  try {
    await Market.destroy({ where: { id: req.params.id } })
    res.send({
      message: 'Market has been successfully deleted!'
    })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetAllMarkets,
  GetMarket,
  NewMarket,
  UpdateMarket,
  DeleteMarket
}
