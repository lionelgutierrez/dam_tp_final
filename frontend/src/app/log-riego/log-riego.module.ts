import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogRiegoPageRoutingModule } from './log-riego-routing.module';
import { LogRiegoPage } from './log-riego.page';
import { AperturaPipePipe } from '../pipes/apertura-pipe.pipe';
import { FechasPipePipe } from '../pipes/fechas-pipe.pipe';
import { TablaDirectivaDirective } from '../directives/tabla-directiva.directive';
import { CeldaDirectivaDirective } from '../directives/celda-directiva.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogRiegoPageRoutingModule
  ],
  declarations: [LogRiegoPage,AperturaPipePipe,FechasPipePipe,TablaDirectivaDirective,CeldaDirectivaDirective]
})
export class LogRiegoPageModule {}
