const cadastroRepository = require('../repository/cadastroRepository')

const cadastro = async(req,res)=>{
    
    const resultCadastro = await cadastroRepository.cadastro(req.body);
    return res.status(201).json(resultCadastro)
}
module.exports={
    cadastro
}