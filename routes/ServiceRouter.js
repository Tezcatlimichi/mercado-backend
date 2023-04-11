const Router = require('express').Router()
const controller = require('../controllers/ServiceController')
Router.post('/', controller.NewService)
Router.get('/', controller.GetAllServices)
Router.get('/:id', controller.GetService)

module.exports = Router
