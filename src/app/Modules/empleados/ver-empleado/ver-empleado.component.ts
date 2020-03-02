import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/Model/empleados/empleado';

@Component({
  selector: 'app-ver-empleado',
  templateUrl: './ver-empleado.component.html',
  styleUrls: ['./ver-empleado.component.css']
})
export class VerEmpleadoComponent implements OnInit {

  @Input() empleado: Empleado;

  constructor() { }

  ngOnInit() {
  }

}
