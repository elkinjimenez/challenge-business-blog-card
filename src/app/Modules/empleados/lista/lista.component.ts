import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Model/empleados/empleado';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  empleados = [] as Empleado[];

  empleadoSeleccionado: Empleado;

  constructor() { }

  ngOnInit() {
    this.listaEmpleados();
  }

  listaEmpleados() {
    let empleado = {} as Empleado;
    this.empleados = [
      empleado = {
        codigo: '1',
        tipoContrato: '2',
        documento: '2345345',
        rol: '4',
        nombres: 'Elkin Jiménez',
        fechaIngreso: '2020/01/09',
        equipo: 'NN',
        tipoSalario: '1',
        salarioTotal: '3000000',
        salario: '3000000',
        beneficio: '000',
        costoEstandarMes: '000',
        descuento: '2',
        novedad: 'Ninguna',
        observaciones: 'Ninguna',
      },
      empleado = {
        codigo: '2',
        tipoContrato: '1',
        documento: '435543',
        rol: '2',
        nombres: 'Omar Jiménez',
        fechaIngreso: '2019/12/09',
        equipo: 'NN',
        tipoSalario: '2',
        salarioTotal: '3300000',
        salario: '3300000',
        beneficio: '000',
        costoEstandarMes: '000',
        descuento: '1',
        novedad: 'Ninguna',
        observaciones: 'Ninguna',
      }
    ];
  }

  verEmpleado(e: Empleado): void {
    this.empleadoSeleccionado = e;
  }

}
