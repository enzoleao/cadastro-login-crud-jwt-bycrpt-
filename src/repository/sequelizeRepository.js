<<<<<<< HEAD
const produtosModel = require('../models/produtosModel');

const getInfo = async () =>{
    const getAllProducts = await produtosModel.findAll();
    return getAllProducts
}
const createProduct = async(data)=>{
    const {nome, preco, descricao} = data
    await produtosModel.create({
=======
const produtosModel = require('../models/produtosModel')

const getInfo = async () =>{
    const getAllProducts = await produtosModel.findAll();
    return (getAllProducts)
}
const createProduct = async(data)=>{
    const {nome, preco, descricao} = data
    const createProduct = await produtosModel.create({
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
        nome:nome,
        preco:preco,
        descricao:descricao
    })
<<<<<<< HEAD
    return ({message:"Produto cadastrado com sucesso"})
}
const updateProduct = async(data, id)=>{
    const {nome, preco, descricao} = data
=======
    return ({message:"Cadastrado com sucesso"})
}
const updateProduct = async(data, id)=>{
    const {nome, preco, descricao} = data

>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
    await produtosModel.update(
        {
            nome:nome,
            preco:preco,
            descricao:descricao
        },
        {
            where:{
                id: id
            }
        }
    )
<<<<<<< HEAD
    return ({message:"Produto atualizado com sucesso"})
=======
    return ({message:"Atualizado com sucesso"})
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
}
const productDelete = async(id)=>{
    await produtosModel.destroy({
        where:{
            id:id
        }
    })
    return ({message:"Deletado com sucesso"})
}
<<<<<<< HEAD

=======
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
module.exports={
    getInfo,
    createProduct,
    updateProduct,
    productDelete
}