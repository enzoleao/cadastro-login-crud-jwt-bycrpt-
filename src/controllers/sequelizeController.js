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
}
module.exports={
    getInfo,
    createProduct,
    updateProduct,
    productDelete
}