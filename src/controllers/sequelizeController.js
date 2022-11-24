const produtosModel = require('../models/produtosModel')

const getInfo = async (req,res) =>{
    const getAllProducts = await produtosModel.findAll();
    return res.status(200).json(getAllProducts)
}
const createProduct = async(req,res)=>{
    const {nome, preco, descricao} = req.body
    await produtosModel.create({
        nome:nome,
        preco:preco,
        descricao:descricao
    })
    .then(()=>{return res.status(201).json({message:"Cadastrado com sucesso"})})
    .catch(()=>{return res.status(400).json({message:"Ocorreu algum erro."})})
}
const updateProduct = async(req,res)=>{
    const {nome, preco, descricao} = req.body
    await produtosModel.update(
        {
            nome:nome,
            preco:preco,
            descricao:descricao
        },
        {
            where:{
                id: req.params.id
            }
        }
    ).then(()=>{return res.status(200).json({message:"Atualizado com sucesso"})})
     .catch(()=>{return res.status(400).json({message:"Erro ao atualizar"})})
}
const productDelete = async(req,res)=>{
    await produtosModel.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{return res.status(200).json({message:"Deletado com sucesso"})})
}
module.exports={
    getInfo,
    createProduct,
    updateProduct,
    productDelete
}