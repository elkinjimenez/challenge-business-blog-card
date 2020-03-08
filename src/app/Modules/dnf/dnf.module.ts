import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListaDnfComponent } from './lista-dnf/lista-dnf.component';
import { NuevoDnfComponent } from './nuevo-dnf/nuevo-dnf.component';
import { CamposDnfComponent } from './campos-dnf/campos-dnf.component';
import { DnfComponent } from './dnf/dnf.component';



@NgModule({
  declarations: [DnfComponent, ListaDnfComponent, NuevoDnfComponent, CamposDnfComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    DnfComponent
  ]
})
export class DnfModule { }
