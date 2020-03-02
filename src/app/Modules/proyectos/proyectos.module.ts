import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';

@NgModule({
  declarations: [ProyectosComponent, NuevoProyectoComponent, ListaProyectosComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ProyectosComponent,
  ]
})
export class ProyectosModule { }
