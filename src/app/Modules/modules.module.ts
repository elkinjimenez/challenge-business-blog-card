import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';
import { ProyectosComponent } from './proyectos/proyectos/proyectos.component';
import { NovedadesComponent } from './novedades/novedades/novedades.component';
import { FormsModule } from '@angular/forms';
import { DnfComponent } from './dnf/dnf/dnf.component';
import { ListaDnfComponent } from './dnf/lista-dnf/lista-dnf.component';
import { NuevoDnfComponent } from './dnf/nuevo-dnf/nuevo-dnf.component';
import { CamposDnfComponent } from './dnf/campos-dnf/campos-dnf.component';


@NgModule({
  declarations: [EmpleadosComponent, ProyectosComponent, NovedadesComponent, DnfComponent, ListaDnfComponent, NuevoDnfComponent, CamposDnfComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppModule
  ],
  exports: []
})
export class ModulesModule { }
