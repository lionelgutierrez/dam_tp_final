import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicion } from '../model/Medicion';


@Injectable({
  providedIn: 'root'
})
export class MedicionService {

  urlBase="http://localhost:8000";

   constructor(private _http:HttpClient) { 

  }


getUltimaMedicion(id:number):Promise<Medicion>{
  return this._http.get(this.urlBase+"/medicion/ultima/"+id)
   .toPromise()
   .then((objeto:Medicion)=>{
       return objeto;

  }).catch(err=> {console.log("error en consulta a la API");
          return new Medicion(1,null,'',1);
  });

}

getListadoMedicionesDisp(id:number):Promise<Medicion[]>{
    return this._http.get(this.urlBase+"/medicion/"+id).toPromise().then((listado:Medicion[])=>{
            return listado;
          })
          .catch(err=>{console.log("Error en consulta a la API");
                       var lista = [];//[new Medicion(1,null,'',1)];
                       return lista;
          });

  }

agregarMedicion(medicion:Medicion):Promise<String>{
  return this._http.post(this.urlBase+"/medicion/",{id:medicion.dispositivoId,valor:medicion.valor,fecha:medicion.fecha})
            .toPromise()
            .then((result:string)=>{return result;
            })
            .catch((err:string)=>{
                console.log("Error en agregado de Medicion");
                return "error";
            });

}



}
