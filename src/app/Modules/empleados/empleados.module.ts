import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { HomeRoutingModule } from '../home-routing.module';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';

@NgModule({
  declarations: [EmpleadosComponent, NuevoComponent, CargaMasivaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    EmpleadosComponent
  ]
})
export class EmpleadosModule { }
