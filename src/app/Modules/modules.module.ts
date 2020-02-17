import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';

@NgModule({
  declarations: [EmpleadosComponent],
  imports: [
    CommonModule,
    AppModule
  ],
  exports: []
})
export class ModulesModule { }
