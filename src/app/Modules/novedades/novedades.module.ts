import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovedadesComponent } from './novedades/novedades.component';
import { IncapacidadesComponent } from './incapacidades/incapacidades.component';
import { OtrasNovedadesComponent } from './otras-novedades/otras-novedades.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [NovedadesComponent, IncapacidadesComponent, OtrasNovedadesComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NovedadesComponent
  ]
})
export class NovedadesModule { }
