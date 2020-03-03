import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { CamposProyectoComponent } from './campos-proyecto/campos-proyecto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarProyectoComponent } from './editar-proyecto/editar-proyecto.component';

@NgModule({
  declarations: [ProyectosComponent, NuevoProyectoComponent, ListaProyectosComponent, CamposProyectoComponent, EditarProyectoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    ProyectosComponent,
  ]
})
export class ProyectosModule { }
