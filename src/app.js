const express = require('express');
const router = require('./routes')
var cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json())
app.use(router);


module.exports = app;