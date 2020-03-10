import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DnfComponent } from './dnf/dnf.component';
import { ListaProyectoComponent } from './lista-proyecto/lista-proyecto.component';

@NgModule({
  declarations: [DnfComponent, ListaProyectoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    DnfComponent,
  ]
})
export class DnfModule { }
