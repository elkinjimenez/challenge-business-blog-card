import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';
import { ProyectosComponent } from './proyectos/proyectos/proyectos.component';
import { NovedadesComponent } from './novedades/novedades/novedades.component';
import { FormsModule } from '@angular/forms';
import { DnfComponent } from './dnf/dnf/dnf.component';


@NgModule({
  declarations: [
    EmpleadosComponent,
    ProyectosComponent,
    NovedadesComponent,
    DnfComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppModule
  ],
  exports: []
})
export class ModulesModule { }
