const cadastroRepository = require('../repository/cadastroRepository')


const cadastro = async(req,res)=>{
  const resultadoCadastro = await cadastroRepository.cadastro(req.body);
  return res.status(201).json(resultadoCadastro)
}
module.exports={
    cadastro
}