import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Model/empleados/empleado';

@Component({
  selector: 'app-campos-empleado',
  templateUrl: './campos-empleado.component.html',
  styleUrls: ['./campos-empleado.component.css']
})
export class CamposEmpleadoComponent implements OnInit {

  empleado = { tipoContrato: '', rol: '', tipoSalario: '', descuento: '' } as Empleado;

  constructor() { }

  ngOnInit() {
  }

}
