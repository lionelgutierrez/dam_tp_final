var express = require("express");
var routerLogRiego = express.Router();
var pool = require("../../mysql");

routerLogRiego.get("/ultimo/:id", function(req,res){

    pool.query("SELECT * FROM DAM.Log_Riegos WHERE electrovalvulaId =? order by fecha desc LIMIT 1", [parseInt(req.params.id)] , function (err,rta,field){
        if (err) {
            res.send(err);
            return;
        }
        res.send(rta[0]);
        //res.json(rta);

    });
});

routerLogRiego.get("/:id",function(req,res){

    pool.query("SELECT * FROM DAM.Log_Riegos WHERE electrovalvulaId =? order by fecha", [parseInt(req.params.id)] , function (err,rta,field){
        if (err) {
            res.send(err);
            return;
        }
        //res.send(rta[0]);
        res.json(rta);

    });
});

routerLogRiego.post("/", function(req,res){
    console.log(req.body);
    id = req.body.id;
    apertura = req.body.apertura;
    fecha = req.body.fecha;
    fecha = fecha.slice(0, 19).replace('T', ' ');
    //console.log(id+"."+apertura+"."+fecha)
    pool.query("INSERT INTO DAM.Log_Riegos(logRiegoId,apertura,fecha,electrovalvulaId) VALUES (null,?,?,?)",[parseInt(apertura),fecha,parseInt(id)],function(err,rta,fields){
        if (err) {
            console.log("Hubo error en insert de logRiego");
            res.send(err.message).status(400);
            return;
        }
        res.send(req.body).status(200);//+JSON.stringify(req.body));        
    });


});


module.exports = routerLogRiego;