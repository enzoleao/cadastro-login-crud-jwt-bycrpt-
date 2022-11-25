const produtosModel = require('../models/produtosModel')

const getInfo = async () =>{
    const getAllProducts = await produtosModel.findAll();
    return (getAllProducts)
}
const createProduct = async(data)=>{
    const {nome, preco, descricao} = data
    const createProduct = await produtosModel.create({
        nome:nome,
        preco:preco,
        descricao:descricao
    })
    return ({message:"Cadastrado com sucesso"})
}
const updateProduct = async(data, id)=>{
    const {nome, preco, descricao} = data

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
    return ({message:"Atualizado com sucesso"})
}
const productDelete = async(id)=>{
    await produtosModel.destroy({
        where:{
            id:id
        }
    })
    return ({message:"Deletado com sucesso"})
}
module.exports={
    getInfo,
    createProduct,
    updateProduct,
    productDelete
}