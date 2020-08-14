import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LogRiego} from '../model/LogRiego';
import { LogRiegoService } from '../services/log-riego.service';
import { AperturaPipePipe } from '../pipes/apertura-pipe.pipe';


@Component({
  selector: 'app-log-riego',
  templateUrl: './log-riego.page.html',
  styleUrls: ['./log-riego.page.scss'],
})
export class LogRiegoPage implements OnInit {

  public listadoLogRiego: LogRiego[] = [new LogRiego(1,0,new Date(),1)];
  public idDispositivo​:number = 0;
  public idElectrovalvula​:number = 0;

  constructor(private router: ActivatedRoute,private servcLogRiego:LogRiegoService) {
    
   }

  ngOnInit() {
  }
  ionViewWillEnter() {
    //'log-riego/:ide/:idd'
    this.idDispositivo = Number(this​.router.snapshot.paramMap​.get('idd'));
    this.idElectrovalvula​ = Number(this​.router.snapshot.paramMap​.get('ide'));

   ​ this.servcLogRiego.getListadoLogElectrovalvula(this.idElectrovalvula​).then((lista)=>{
           this.listadoLogRiego = lista;
           //console.log(this.listadoLogRiego.length );
   });
/*
//https://stackoverflow.com/questions/60825844/how-to-pass-multiple-route-parameters-in-ionic-angular
             /log-riego/{{disp.electrovalvulaId}}/{{disp.dispositivoId}}
          :ide/:idd

poner colores a la tabla y borde
directiva que sirva para formatear la fecha
hacer servicio LogRiegoService
   */
 }  



}
