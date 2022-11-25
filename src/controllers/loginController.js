<<<<<<< HEAD
=======
const usuarioModel = require('../repository/loginRepository')
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4

const loginRepository = require('../repository/loginRepository')

const login = async(req,res)=>{
<<<<<<< HEAD
    const resultadoLogin = await loginRepository.login(req.body)
    return res.status(resultadoLogin.status).json(resultadoLogin)
 
=======
    const loginResult = await usuarioModel.login(req.body)
    return res.status(loginResult.status).json(loginResult)
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
}
module.exports={
    login
}