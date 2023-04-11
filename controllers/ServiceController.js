const { Service } = require('../models')

// create service
const NewService = async (req, res) => {
  try {
    let data = {
      ...req.body
    }
    const service = await Service.create(data)
    res.send(service)
  } catch (error) {
    throw error
  }
}

// read all services
// const GetAllServices = async (req, res) => {
//   try {
//   } catch (error) {
//     throw error
//   }
// }

//read single service
// const GetService = async (req, res) => {
//   try {
//   } catch (error) {
//     throw error
//   }
// }

//update service
// const UpdateService = async (req, res) => {
//   try {
//   } catch (error) {
//     throw error
//   }
// }

//delete service
// const DeleteService = async (req,res) =>{
//   try{

//   }catch (error){
//     throw error
//   }
// }
module.exports = {
  NewService
}
