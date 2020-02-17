import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';
import { NuevoComponent } from './empleados/nuevo/nuevo.component';
import { CargaMasivaComponent } from './empleados/carga-masiva/carga-masiva.component';

const routes: Routes = [
  { path: 'home/empleados', component:  EmpleadosComponent},
  { path: 'home/nuevo-empleado', component:  NuevoComponent},
  { path: 'home/carga-masiva', component:  CargaMasivaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
