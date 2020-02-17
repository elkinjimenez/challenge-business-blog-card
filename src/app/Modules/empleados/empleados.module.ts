import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { HomeRoutingModule } from '../home-routing.module';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [EmpleadosComponent, NuevoComponent, CargaMasivaComponent, ListadoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    EmpleadosComponent,
    NuevoComponent,
    CargaMasivaComponent,
    ListadoComponent
  ]
})
export class EmpleadosModule { }
