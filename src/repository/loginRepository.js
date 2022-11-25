<<<<<<< HEAD
require('dotenv').config();
const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/usuariosModel')
const bcrypt = require('bcrypt');



const login = async(data)=>{

const {nome, password} = data
=======
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usuarioModel = require('../models/usuariosModel')
require('dotenv').config();


const login = async(data)=>{
    const {nome, password} = data
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
   
    const userVerify = await usuarioModel.findOne({
        where:{
            nome:nome,
        }
    })
<<<<<<< HEAD
    if (userVerify == null){
        return ({message: "Usuario ou senha invalido", status:400})
    }
=======
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
    if (userVerify !== null){
      const result =  bcrypt.compareSync(password,userVerify.dataValues.password)
        
      if (result === true){
        const id = userVerify.dataValues.id;
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 3600 // expires in 1h
        });
<<<<<<< HEAD
        return ({ auth: true, token: token , status:200});
=======
        return ({status:200, auth: true, token: token });
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
      }
      else {
        return ({message:"Login invalido", status:400})
      }
<<<<<<< HEAD
    }
}
=======


    }
 
}

>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
module.exports={
    login
}