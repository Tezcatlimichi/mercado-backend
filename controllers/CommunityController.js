const { Community } = require('../models')

//read
const GetAllArticles = async (req, res) => {
  try {
    const allArticles = await Community.findAll()
    res.send(allArticles)
  } catch (error) {
    throw error
  }
}
//read single community article
const OneArticle = async (req, res) => {
  try {
    let articleId = parseInt(req.params.id)
    const article = await Community.findOne({ where: { id: articleId } })
    res.send(article)
  } catch (error) {
    throw error
  }
}

//create
const NewArticle = async (req, res) => {
  try {
    let data = {
      ...req.body
    }
    const article = await Community.create(data)
    res.send(article)
  } catch (error) {
    throw error
  }
}
//update community post
const UpdateArticle = async (req, res) => {
  try {
    let articleId = parseInt(req.params.id)
    const updated = await Community.update(req.body, {
      where: { id: articleId },
      returning: true
    })
    res.send(updated)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllArticles,
  OneArticle,
  NewArticle,
  UpdateArticle
}
