import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/Dispositivo';
import { DispositivoService } from '../services/dispositivo.service';
import * as Highcharts from 'highcharts';
import { MedicionService } from '../services/medicion.service';
import { Medicion } from '../model/Medicion';
import { LogRiegoService } from '../services/log-riego.service';
import { LogRiego } from '../model/LogRiego';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {
  public disp: Dispositivo = new Dispositivo(0,"","",0);
  public estadoElectrovalvula:number = 0;
  public med: Medicion = new Medicion(1,new Date(),'1',1);
  public valorObtenido:number=0;
  public myChart;
  private chartOptions;
  public mensajeBoton:string = "ABRIR ELECTROVALVULA";

  constructor(private router: ActivatedRoute,private servcDispositivos:DispositivoService,
              private servcMedicion:MedicionService,private sercLogRiego:LogRiegoService) { 
      
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    ​ let​ idDispositivo​ = this​.router.snapshot.paramMap​.get('id');
     this.servcDispositivos.getDispositivo(Number(idDispositivo​)).then((disp)=>{
        this.disp = disp;
        this.servcMedicion.getUltimaMedicion(this.disp.dispositivoId).then((medicion)=>{
            this.med = medicion;
            this.valorObtenido = Number(this.med.valor);
            this.generarChart();
            //Determino el estado actual de la electrovalvula mirando el ultimo registro del log
            this.sercLogRiego.getUltimoLog(this.disp.electrovalvulaId)
                             .then(riego=>{
                                  this.estadoElectrovalvula = riego.apertura;
                             })
                             .catch(err=>{
                                  //No hay log => esta cerrada la electrovalvula
                                  this.estadoElectrovalvula = 0;
                             })

        });
     });

  }

  accionarElectrovalvula(){
    //console.log("Entro a la funicion de abrir");
    
    if (this.estadoElectrovalvula == 0)
    {
        let log:LogRiego = new LogRiego(0,1,new Date(),this.disp.electrovalvulaId);
        this.sercLogRiego.agregarLog(log)
                          .then((mensaje)=>{
                            this.estadoElectrovalvula = 1;
                            this.mensajeBoton= "CERRAR ELECTROVALVULA";
                          }).catch((err)=>{
                                alert("Error en cambio de estado. Error: "+err);
                          });

    }
    else //estadoElectrovalvula == 1 o sea Abierta
    {
      let log:LogRiego = new LogRiego(0,0,new Date(),this.disp.electrovalvulaId);
      this.sercLogRiego.agregarLog(log)
                        .then((mensaje)=>{

                          let med:Medicion = new Medicion(0,new Date(),this.valorObtenido.toString(),this.disp.dispositivoId);
                          //Agrego medicion
                          this.servcMedicion.agregarMedicion(med)
                                            .then((msj)=>{
                                              this.estadoElectrovalvula = 0;
                                              this.mensajeBoton= "ABRIR ELECTROVALVULA";
                                            })
                                            .catch((error)=>{
                                              alert("Error en cambio de estado. En agregadoMedicion. Error: "+error);
                                            });
                        }).catch((err)=>{
                              alert("Error en cambio de estado en agregado Log. Error: "+err);
                        });

    }

    //genero registro en Log_riegos. Si es abrir -> con 1 como apertura, si es cerrar con o como apertura
    //Si cierro electrovalvula -> inserto nueva medicion con valor actual
    //Miro ultimo log_riego de la electrovalvula para ver si esta abierta o cerrada la misma

  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: "Sensor Nº"+ this.disp.dispositivoId
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

}
