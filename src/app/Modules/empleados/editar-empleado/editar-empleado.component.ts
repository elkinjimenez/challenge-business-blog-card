import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/Model/empleados/empleado';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  @Input() empleado: Empleado;

  constructor() { }

  ngOnInit() {
  }

}
