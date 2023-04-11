const Router = require('express').Router()
const controller = require('../controllers/MarketController')
Router.get('/', controller.GetAllMarkets)
module.exports = Router
