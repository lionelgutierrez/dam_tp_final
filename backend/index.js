var express = require("express");
var app = express();
var PORT = 3000;
var cors = require('cors');

var corsConfig={
    origin:'*',
    optionsSucessStatus:200
};

app.use(cors(corsConfig));

var routerDispositivo = require("./routes/dispositivo");
var routerMedicion = require("./routes/medicion");
var routerLogRiego = require('./routes/logRiego');

app.use(express.json());
app.use("/dispositivo",routerDispositivo);
app.use("/medicion",routerMedicion);
app.use("/logRiego",routerLogRiego);

app.listen(PORT,function(req,res){
    console.log("App levantada");
})
