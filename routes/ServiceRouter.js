const Router = require('express').Router()
const controller = require('../controllers/ServiceController')
Router.post('/', controller.NewService)
Router.get('/', controller.GetAllServices)
Router.get('/:id', controller.GetService)
Router.put('/:id', controller.UpdateService)
Router.delete('/:id', controller.DeleteService)

module.exports = Router
