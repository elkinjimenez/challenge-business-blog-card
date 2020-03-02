import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';
import { ListaComponent } from './lista/lista.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { CamposEmpleadoComponent } from './campos-empleado/campos-empleado.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VerEmpleadoComponent } from './ver-empleado/ver-empleado.component';

@NgModule({
  declarations: [
    EmpleadosComponent,
    NuevoComponent,
    CargaMasivaComponent,
    ListaComponent,
    EditarEmpleadoComponent,
    CamposEmpleadoComponent,
    VerEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    EmpleadosComponent
  ]
})
export class EmpleadosModule { }
