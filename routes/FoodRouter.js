const Router = require('express').Router()
const controller = require('../controllers/FoodController')

Router.get('/', controller.GetAllFood)
Router.get('/:id', controller.GetSingleFood)

module.exports = Router
