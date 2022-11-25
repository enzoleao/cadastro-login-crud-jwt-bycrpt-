const usuariosModel = require('../models/usuariosModel')
const bcrypt = require('bcrypt');

const cadastro = async(data)=>{


    const {nome, password} = data
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt)

    await usuariosModel.create({
        nome:nome,
        password:hashPassword
    })
    return ({message:"Cadastrado com sucesso"})
    
}
module.exports={
    cadastro
}