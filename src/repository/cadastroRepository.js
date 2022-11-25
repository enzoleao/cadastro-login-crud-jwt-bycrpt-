const usuariosModel = require('../models/usuariosModel')
const bcrypt = require('bcrypt');

<<<<<<< HEAD
const cadastro = async(data)=>{


=======

const cadastro = async(data)=>{
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
    const {nome, password} = data
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt)

<<<<<<< HEAD
    await usuariosModel.create({
        nome:nome,
        password:hashPassword
    })
    return ({message:"Cadastrado com sucesso"})
    
}
=======
    const newUser =  await usuariosModel.create({
        nome:nome,
        password:hashPassword
    })
    return ({message:"Cadastrado com sucesso", id:newUser.dataValues.id})
}

>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
module.exports={
    cadastro
}