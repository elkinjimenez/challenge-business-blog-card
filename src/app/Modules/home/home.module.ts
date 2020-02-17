import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, MenuComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    HomeComponent
  ]
})
export class HomeModule { }
