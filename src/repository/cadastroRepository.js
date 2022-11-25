const usuariosModel = require('../models/usuariosModel')
const bcrypt = require('bcrypt');

const cadastro = async(data)=>{


    const {nome, password, admin} = data
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt)

    await usuariosModel.create({
        nome:nome,
        password:hashPassword,
        admin:admin
    })
    return ({message:"Cadastrado com sucesso"})
    
}
module.exports={
    cadastro
}