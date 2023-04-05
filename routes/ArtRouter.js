const Router = require('express').Router()
const controller = require('../controllers/ArtController')

Router.get('/', controller.GetAllArt)
Router.get('/:id', controller.GetArt)
Router.post('/', controller.NewArt)

module.exports = Router
