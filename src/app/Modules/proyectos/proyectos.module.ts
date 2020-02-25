import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';

@NgModule({
  declarations: [ProyectosComponent, NuevoProyectoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProyectosComponent,
  ]
})
export class ProyectosModule { }
