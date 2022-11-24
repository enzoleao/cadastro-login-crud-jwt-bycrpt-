const usuariosModel = require('../models/usuariosModel')
const bcrypt = require('bcrypt');

const cadastro = async(req,res)=>{


    const {nome, password} = req.body
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt)

    await usuariosModel.create({
        nome:nome,
        password:hashPassword
    })
    .then(()=>{return res.status(201).json({message:"Cadastrado com sucesso"})})
    .catch(()=>{return res.status(400).json({message:"Ocorreu algum erro"})})
}
module.exports={
    cadastro
}