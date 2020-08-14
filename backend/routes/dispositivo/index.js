
var express = require("express");
var routerDispositivo = express.Router();
var pool = require('../../mysql');

routerDispositivo.get("/",function(req,res){
    
    var consulta = "SELECT * FROM DAM.Dispositivos";

    pool.query(consulta,function(err,rta,field){
        if (err){
            res.send(err);
            return;
        }
        //res.send(rta);
        res.json(rta);
        
    });
        

});

routerDispositivo.get("/:id",function(req,res){

    pool.query("SELECT * FROM DAM.Dispositivos WHERE dispositivoId =? order by dispositivoId", [parseInt(req.params.id)] , function (err,rta,field){
        if (err) {
            res.send(err);
            return;
        }
        res.send(rta[0]);
        //res.json(rta);

    });
});


module.exports =routerDispositivo;