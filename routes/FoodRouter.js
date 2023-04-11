const Router = require('express').Router()
const controller = require('../controllers/FoodController')

Router.get('/', controller.GetAllFood)
Router.get('/:id', controller.GetSingleFood)
Router.post('/', controller.MakeFood)
Router.put('/:id', controller.UpdateFood)

module.exports = Router
