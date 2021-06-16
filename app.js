const express = require('express');
require('./model/index');
const app = express();

const controller = require('./controller/controller');

port = 5000;

app.get('/',controller.route);



app.listen(port,()=>{
    console.log('app is listening at port '+ " " +port)
})