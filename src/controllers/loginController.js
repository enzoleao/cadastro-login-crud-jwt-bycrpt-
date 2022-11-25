
const loginRepository = require('../repository/loginRepository')

const login = async(req,res)=>{
    const resultadoLogin = await loginRepository.login(req.body)
    return res.status(resultadoLogin.status).json(resultadoLogin)
 
}
module.exports={
    login
}