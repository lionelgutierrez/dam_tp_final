import { Injectable } from '@angular/core';
import {Dispositivo} from "../model/Dispositivo";
import { HttpClient } from '@angular/common/http';

//import * as data from "../dispositivos.json";
@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  urlBase="http://localhost:8000";

   constructor(private _http:HttpClient) { 

  }

  getListadoDispositivos():Promise<Dispositivo[]>{

    return this._http.get(this.urlBase+"/dispositivo").toPromise().then((listado:Dispositivo[])=>{
            return listado;
          })
          .catch((err)=>{console.log("Error en consulta a la API");
                       var lista = [new Dispositivo(1,'','',1)];
                       return lista;
          });

  }

getDispositivo(id:number):Promise<Dispositivo>{
    return this._http.get(this.urlBase+"/dispositivo/"+id)
     .toPromise()
     .then((objeto:Dispositivo)=>{
         return objeto;

    }).catch((err)=> {console.log("error en consulta a la API");
            return new Dispositivo(1,'','',1);
    });

  }

}
