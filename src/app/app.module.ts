import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Modules/home/home.module';
import { EmpleadosModule } from './Modules/empleados/empleados.module';
import { ProyectosModule } from './Modules/proyectos/proyectos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    EmpleadosModule,
    ProyectosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
