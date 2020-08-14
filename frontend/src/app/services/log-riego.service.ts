import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogRiego } from '../model/LogRiego';

@Injectable({
  providedIn: 'root'
})
export class LogRiegoService {

  urlBase="http://localhost:8000";

  constructor(private _http:HttpClient) { 

  }
  
  getUltimoLog(id:number):Promise<LogRiego>{
    return this._http.get(this.urlBase+"/logRiego/ultimo/"+id)
     .toPromise()
     .then((objeto:LogRiego)=>{
         return objeto;
  
    }).catch(err=> {console.log("error en consulta a la API");
            return new LogRiego(1,0,new Date(),1);
    });
  
  }


  getListadoLogElectrovalvula(id:number):Promise<LogRiego[]>{
    return this._http.get(this.urlBase+"/logRiego/"+id).toPromise().then((listado:LogRiego[])=>{
            return listado;
          })
          .catch(err=>{console.log("Error en consulta a la API");
                       var lista = [];//[new LogRiego(1,0,new Date(),1)];
                       return lista;
          });

  }

  agregarLog(logRiego:LogRiego):Promise<String>{
    return this._http.post(this.urlBase+"/logRiego/",{id:logRiego.electrovalvulaId,apertura:logRiego.apertura,fecha:logRiego.fecha})
              .toPromise()
              .then((result:string)=>{return result;
              })
              .catch((err:string)=>{
                  console.log("Error en agregado de LogRiego: "+err);
                  return "error";
              })
              ;
  
  }
  /*
  
  async llamoservice(){
    
    let listado = await this.dispositivoServ.getListadoDispositivos();
    this.listadoDispositivo=listado;
    console.log(this.listadoDispositivo);
    console.log("sigo por aca");

  }
  
  */


}
