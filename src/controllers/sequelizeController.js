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
}
module.exports={
    getInfo,
    createProduct,
    updateProduct,
    productDelete
}