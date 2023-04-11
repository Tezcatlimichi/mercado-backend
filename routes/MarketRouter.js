const Router = require('express').Router()
const controller = require('../controllers/MarketController')
Router.get('/', controller.GetAllMarkets)
Router.get('/:id', controller.GetMarket)
Router.post('/', controller.NewMarket)
module.exports = Router
