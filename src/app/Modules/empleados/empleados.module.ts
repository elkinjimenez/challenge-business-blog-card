import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';
import { ListaComponent } from './lista/lista.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [EmpleadosComponent, NuevoComponent, CargaMasivaComponent, ListaComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    EmpleadosComponent
  ]
})
export class EmpleadosModule { }
