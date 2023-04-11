const Router = require('express').Router()
const controller = require('../controllers/ProduceController')
Router.post('/', controller.NewProduce)
Router.get('/', controller.AllProduce)
Router.get('/:id', controller.OneProduce)
Router.put('/:id', controller.UpdateProduce)
module.exports = Router
