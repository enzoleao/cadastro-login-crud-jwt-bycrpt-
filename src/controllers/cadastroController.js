const cadastroRepository = require('../repository/cadastroRepository')
<<<<<<< HEAD


const cadastro = async(req,res)=>{
  const resultadoCadastro = await cadastroRepository.cadastro(req.body);
  return res.status(201).json(resultadoCadastro)
=======

const cadastro = async(req,res)=>{
    
    const resultCadastro = await cadastroRepository.cadastro(req.body);
    return res.status(201).json(resultCadastro)
>>>>>>> cb1921c6c3d3e55e55879c6a6d929ad05f5a5db4
}
module.exports={
    cadastro
}