require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = async(req,res,next)=>{
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      req.userId = decoded.id;
      next();
    });
}
const verifyAdmin = async(req,res,next)=>{
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    
    if (decoded.id !== 1) return res.status(400).json({message:"Voce nao é admin"})
    req.userId = decoded.id;
    next();
  });
}
module.exports={
    verifyToken,
    verifyAdmin
}