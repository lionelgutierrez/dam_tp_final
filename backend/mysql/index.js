/*
var connection = mysql.createConnection({
    host: 'mysql-server',//127.0.0.1
    port: '3306',
    user: 'root',
    password: 'userpass',
    database: 'smart_home' //DAW
});
*/
var mysql = require('mysql');
var configPool = {
    connectionLimit:10,
    host:'mysql-server',//'127.0.0.1',
    port: '3306',//'33060',//
    user: 'root',
    password: 'userpass',
    database: 'DAM'//'smart_home' //DAW

}

var pool = mysql.createPool(configPool);

pool.getConnection((err,conexion)=>{
    if(err){
        switch (err.code){
            case 'PROTOCOL_CONNECTION_LOST':
                console.log("Se cerro la conexion");
                break;
             case 'ER_CON_COUNT_ERROR':
                console.log("Tiene muchas conexiones");
                break;                    
             case 'ECONNREFUSED':
                console.log("algo configure mal");
                break;
             default:   
             console.log(err);
        }
    }
    if (conexion){
          conexion.release();  
    }

});

module.exports=pool;
