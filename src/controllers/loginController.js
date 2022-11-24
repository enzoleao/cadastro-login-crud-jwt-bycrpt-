require('dotenv').config();
const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/usuariosModel')
const bcrypt = require('bcrypt');


const login = async(req,res)=>{
    const {nome, password} = req.body
   
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
        return res.status(200).json({ auth: true, token: token });
      }
      else {
        return res.status(400).json({message:"Login invalido"})
      }
    }
 
}
module.exports={
    login
}