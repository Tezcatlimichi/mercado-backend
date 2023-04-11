const Router = require('express').Router()
const controller = require('../controllers/ServiceController')
Router.post('/', controller.NewService)
module.exports = Router
