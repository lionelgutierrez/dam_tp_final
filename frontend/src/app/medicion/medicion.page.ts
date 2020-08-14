import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicionService } from '../services/medicion.service';
import { Medicion } from '../model/Medicion';


@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.page.html',
  styleUrls: ['./medicion.page.scss'],
})
export class MedicionPage implements OnInit {
  public listadoMediciones: Medicion[] = [new Medicion(1,new Date(),'1',1)];
  public idDispositivo​:number = 0;
  constructor(private router: ActivatedRoute,private servcMedicion:MedicionService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
     this.idDispositivo = Number(this​.router.snapshot.paramMap​.get('id'));
    ​ this.servcMedicion.getListadoMedicionesDisp(this.idDispositivo).then((lista)=>{
            this.listadoMediciones = lista;
    });
  }  

}
