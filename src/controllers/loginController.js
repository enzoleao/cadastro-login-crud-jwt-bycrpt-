const usuarioModel = require('../repository/loginRepository')


const login = async(req,res)=>{
    const loginResult = await usuarioModel.login(req.body)
    return res.status(loginResult.status).json(loginResult)
}
module.exports={
    login
}