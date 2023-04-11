const { Produce } = require('../models')

//create produce
const NewProduce = async (req, res) => {
  try {
    let data = {
      ...req.body
    }
    const produce = await Produce.create(data)
    res.send(produce)
  } catch (error) {
    throw error
  }
}
// //read all produce
// const AllProduce = async (req, res) => {
//   try {
//   } catch (error) {
//     throw error
//   }
// }
// //read single produce
// const OneProduce = async (req, res) => {
//   try {
//   } catch (error) {
//     throw error
//   }
// }
// // update single produce
// const UpdateProduce = async (req, res) => {
//   try {
//   } catch (error) {
//     throw error
//   }
// }
// // delete single produce
// const DeleteProduce = async (req, res) => {
//   try {
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  NewProduce
}
