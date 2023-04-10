const Router = require('express').Router()
const controller = require('../controllers/CommunityController')

Router.get('/', controller.GetAllArticles)
Router.get('/:id', controller.OneArticle)
Router.post('/', controller.NewArticle)
Router.put('/:id', controller.UpdateArticle)
Router.delete('/:id', controller.DeleteArticle)

module.exports = Router
