<<<<<<< HEAD
const sequelizerRepository = require('../repository/sequelizeRepository')

const getInfo = async (req,res) =>{
    const getAllProducts = await sequelizerRepository.getInfo();
    return res.status(200).json(getAllProducts)
}
const createProduct = async(req,res)=>{
    const cadastrarProduto = await sequelizerRepository.createProduct(req.body)
    return res.status(201).json(cadastrarProduto)
}
const updateProduct = async(req,res)=>{
    const updateProduct = await sequelizerRepository.updateProduct(req.body, req.params)
    return res.status(200).json(updateProduct)
}
const productDelete = async(req,res)=>{
    const productDelete = await sequelizerRepository.productDelete(req.params.id)
    return res.status(200).json(productDelete)
=======
const sequelizeRepository = require('../repository/sequelizeRepository')

const getInfo = async (req,res) =>{
    const getAllProducts = await sequelizeRepository.getInfo();
    return res.status(200).json(getAllProducts)
}
const createProduct = async(req,res)=>{
   const resultCreateProduct = await sequelizeRepository.createProduct(req.body);
   return res.status(201).json(resultCreateProduct)
}
const updateProduct = async(req,res)=>{
    const updateProduct = await sequelizeRepository.updateProduct(req.body, req.params.id)   
    return res.status(200).json(updateProduct)
}
const productDelete = async(req,res)=>{
    const deleteProduct = await sequelizeRepository.productDelete(req.params.id)
    return res.status(200).json(deleteProduct)
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
}
module.exports={
    getInfo,
    createProduct,
    updateProduct,
    productDelete
}