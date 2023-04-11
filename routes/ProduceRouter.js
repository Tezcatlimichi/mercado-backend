const Router = require('express').Router()
const controller = require('../controllers/ProduceController')
Router.post('/', controller.NewProduce)
Router.get('/', controller.AllProduce)
module.exports = Router
