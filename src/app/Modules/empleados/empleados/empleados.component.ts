import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Model/empleados/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleado = {} as Empleado;

  empleados = [];

  constructor() { }

  ngOnInit() {

    this.empleados = [
      this.empleado = {

        codigo: 1,
        documento: '123453',
        nombres: 'Elkin Jimenez',
        usuario: 'ekn',
        fechaIngreso: '09/01/2020',
        detalle: 'Primero empleados',

      },
      this.empleado = {

        codigo: 1,
        documento: '123453',
        nombres: 'Elkin Jimenez',
        usuario: 'ekn',
        fechaIngreso: '09/01/2020',
        detalle: 'Primero empleados',

      }
    ];

  }

}
