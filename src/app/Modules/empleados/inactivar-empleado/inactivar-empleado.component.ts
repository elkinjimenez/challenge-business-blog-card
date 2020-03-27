import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/Model/empleado';

@Component({
  selector: 'app-inactivar-empleado',
  templateUrl: './inactivar-empleado.component.html',
  styleUrls: ['./inactivar-empleado.component.css']
})
export class InactivarEmpleadoComponent implements OnInit {

  @Input() empleado: Empleado;

  constructor() { }

  ngOnInit() {
  }

}
