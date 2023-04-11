const Router = require('express').Router()
const controller = require('../controllers/ProduceController')
Router.post('/', controller.NewProduce)
module.exports = Router
