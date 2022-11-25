const express = require('express');
const router = express.Router();

const loginMiddleware = require('./middleware/loginMiddleware')

const sequelizeController = require('./controllers/sequelizeController')
const loginController = require('./controllers/loginController')
const cadastroController = require('./controllers/cadastroController')

router.get('/getproducts',loginMiddleware.verifyToken,loginMiddleware.verifyAdmin, sequelizeController.getInfo)
router.post('/createproduct',loginMiddleware.verifyToken,sequelizeController.createProduct)
router.put('/productupdate/:id',loginMiddleware.verifyToken,sequelizeController.updateProduct)
router.delete('/productdelete/:id',loginMiddleware.verifyToken, sequelizeController.productDelete)
router.post('/login', loginController.login)
router.post('/cadastrarusuario',cadastroController.cadastro)
router.post('/teste',cadastroController.teste)


module.exports = router;