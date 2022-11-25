require('dotenv').config();
const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/usuariosModel')
const bcrypt = require('bcrypt');



const login = async(data)=>{

const {nome, password} = data
   
    const userVerify = await usuarioModel.findOne({
        where:{
            nome:nome,
        }
    })
    if (userVerify == null){
        return ({message: "Usuario ou senha invalido", status:400})
    }
    if (userVerify !== null){
      const result =  bcrypt.compareSync(password,userVerify.dataValues.password)
        
      if (result === true){
        const id = userVerify.dataValues.id;
        const admin = userVerify.dataValues.admin

        const token = jwt.sign({ id, admin }, process.env.SECRET, {
            expiresIn: 3600 // expires in 1h
        });
        return ({ auth: true, token: token , status:200});
      }
      else {
        return ({message:"Login invalido", status:400})
      }
    }
}
module.exports={
    login
}