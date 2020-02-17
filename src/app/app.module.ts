import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Modules/home/home.module';
import { HomeRoutingModule } from './Modules/home-routing.module';
import { EmpleadosModule } from './Modules/empleados/empleados.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    FormsModule,
    HomeModule,
    EmpleadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
