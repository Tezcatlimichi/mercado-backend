const Router = require('express').Router()
const controller = require('../controllers/CommunityController')

Router.get('/', controller.GetAllArticles)
Router.post('/', controller.NewArticle)
Router.put('/:id', controller.UpdateArticle)

module.exports = Router
