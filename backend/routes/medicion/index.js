var express = require("express");
var routerMedicion = express.Router();
var pool = require("../../mysql");

routerMedicion.get("/ultima/:id", function(req,res){

    pool.query("SELECT * FROM DAM.Mediciones  WHERE dispositivoId =? order by fecha desc LIMIT 1", [parseInt(req.params.id)] , function (err,rta,field){
        if (err) {
            res.send(err);
            return;
        }
        res.send(rta[0]);
        //res.json(rta);

    });
});

routerMedicion.get("/:id",function(req,res){

    pool.query("SELECT * FROM DAM.Mediciones WHERE dispositivoId =? order by fecha", [parseInt(req.params.id)] , function (err,rta,field){
        if (err) {
            res.send(err);
            return;
        }
        //res.send(rta[0]);
        res.json(rta);

    });
});

routerMedicion.post("/", function(req,res){
    console.log(req.body);
    id = req.body.id;
    valor = req.body.valor;
    //fecha = new Date().toISOString().slice(0, 19).replace('T', ' ');
    fecha = req.body.fecha;
    //console.log(fecha);
    fecha = fecha.slice(0, 19).replace('T', ' ');

    pool.query("INSERT INTO DAM.Mediciones (medicionId,fecha,valor,dispositivoId) VALUES (NULL,?,?,?)",[fecha,valor,parseInt(id)],function(err,rta,fields){
        if (err) {
            console.log("Hubo error en insert de medicion");
            res.send(err.message).status(400);
            return;
        }
        res.send(req.body).status(200);//+JSON.stringify(req.body));        
    });


});


module.exports = routerMedicion;