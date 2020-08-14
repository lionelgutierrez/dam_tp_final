import { Component } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import {DispositivoService} from '../services/dispositivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listadoDispositivo: Dispositivo[];
  constructor(public servcDispositivos:DispositivoService) {

    this.servcDispositivos.getListadoDispositivos().then((lista)=>{
      this.listadoDispositivo = lista;
      //console.log(lista); 
   });


  }

}
