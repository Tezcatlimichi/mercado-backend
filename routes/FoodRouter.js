const Router = require('express').Router()
const controller = require('../controllers/FoodController')

Router.get('/', controller.GetAllFood)

module.exports = Router
