import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';
import { ProyectosComponent } from './proyectos/proyectos/proyectos.component';


@NgModule({
  declarations: [EmpleadosComponent, ProyectosComponent],
  imports: [
    CommonModule,
    AppModule
  ],
  exports: []
})
export class ModulesModule { }
