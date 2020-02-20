import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Modules/home/login/login.component';
import { HomeComponent } from './Modules/home/home/home.component';
import { EmpleadosComponent } from './Modules/empleados/empleados/empleados.component';
import { NuevoComponent } from './Modules/empleados/nuevo/nuevo.component';
import { CargaMasivaComponent } from './Modules/empleados/carga-masiva/carga-masiva.component';
import { NovedadesComponent } from './Modules/empleados/novedades/novedades.component';
import { OtrasNovedadesComponent } from './Modules/empleados/otras-novedades/otras-novedades.component';
import { LandingComponent } from './Modules/home/landing/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/empleados', component: EmpleadosComponent },
  { path: 'home/empleados/nuevo-empleado', component: NuevoComponent },
  { path: 'home/empleados/carga-masiva', component: CargaMasivaComponent },
  { path: 'home/empleados/novedades', component: NovedadesComponent },
  { path: 'home/empleados/otras-nov', component: OtrasNovedadesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
