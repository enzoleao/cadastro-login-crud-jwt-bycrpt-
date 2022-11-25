const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usuarioModel = require('../models/usuariosModel')
require('dotenv').config();


const login = async(data)=>{
    const {nome, password} = data
   
    const userVerify = await usuarioModel.findOne({
        where:{
            nome:nome,
        }
    })
    if (userVerify !== null){
      const result =  bcrypt.compareSync(password,userVerify.dataValues.password)
        
      if (result === true){
        const id = userVerify.dataValues.id;
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 3600 // expires in 1h
        });
        return ({status:200, auth: true, token: token });
      }
      else {
        return ({message:"Login invalido", status:400})
      }


    }
 
}

module.exports={
    login
}