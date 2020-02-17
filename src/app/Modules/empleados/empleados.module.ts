import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';

@NgModule({
  declarations: [EmpleadosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EmpleadosComponent
  ]
})
export class EmpleadosModule { }
