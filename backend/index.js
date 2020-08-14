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

//https://github.com/ernesto-g/daw/tree/master/scripts_docker
//$ ./start_mysql.sh mysql-net ./db/dumps ./db/data
//./run_phpadmin.sh mysql-net mysql-server 8085
//./serve_node_app_net.sh "$PWD" index.js 8000 mysql-net
//docker stop $(docker ps -a -q)