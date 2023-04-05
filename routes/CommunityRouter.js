const Router = require('express').Router()
const controller = require('../controllers/CommunityController')

Router.get('/', controller.GetAllArticles)
Router.post('/', controller.NewArticle)

module.exports = Router
