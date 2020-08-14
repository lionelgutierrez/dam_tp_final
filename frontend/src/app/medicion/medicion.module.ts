import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicionPageRoutingModule } from './medicion-routing.module';
import { MedicionPage } from './medicion.page';
import { FechasPipePipe } from '../pipes/fechas-pipe.pipe';
import { TablaDirectivaDirective } from '../directives/tabla-directiva.directive';
import { CeldaDirectivaDirective } from '../directives/celda-directiva.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicionPageRoutingModule
  ],
  declarations: [MedicionPage,FechasPipePipe,TablaDirectivaDirective,CeldaDirectivaDirective]
})
export class MedicionPageModule {}
