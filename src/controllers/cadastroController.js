const cadastroRepository = require('../repository/cadastroRepository')


const cadastro = async(req,res)=>{
  const resultadoCadastro = await cadastroRepository.cadastro(req.body);
  return res.status(201).json(resultadoCadastro)
}
const teste = async(req,res)=>{
    const {a,b} = req.body

    var teste
    console.log(teste)
}
module.exports={
    cadastro,
    teste
}