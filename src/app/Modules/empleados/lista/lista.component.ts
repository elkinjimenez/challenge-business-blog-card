import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Model/empleados/empleado';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  empleados = [] as Empleado [];

  constructor() { }

  ngOnInit() {
    this.listaEmpleados();
  }

  listaEmpleados() {
    let empleado = {} as Empleado;
    this.empleados = [
      empleado = {
        codigo: 1,
        tipoContrato: 'indefinico',
        documento: '2345345',
        rol: 'Desarrollador',
        nombres: 'Elkin Jiménez',
        fechaIngreso: '2020/01/09',
        equipo: 'NN',
        tipoSalario: 'No se',
        salarioTotal: '3000000',
        salario: '3000000',
        beneficio: '000',
        costoEstandarMes: '000',
        descuento: '000',
        novedad: 'Ninguna',
        observaciones: 'Ninguna',
      },
      empleado = {
        codigo: 2,
        tipoContrato: 'indefinico',
        documento: '435543',
        rol: 'Desarrollador',
        nombres: 'Omar Jiménez',
        fechaIngreso: '2019/12/09',
        equipo: 'NN',
        tipoSalario: 'No se',
        salarioTotal: '3300000',
        salario: '3300000',
        beneficio: '000',
        costoEstandarMes: '000',
        descuento: '000',
        novedad: 'Ninguna',
        observaciones: 'Ninguna',
      }
    ];
  }

}
