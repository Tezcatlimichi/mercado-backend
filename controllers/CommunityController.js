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

module.exports = {
  GetAllArticles,
  NewArticle
}
