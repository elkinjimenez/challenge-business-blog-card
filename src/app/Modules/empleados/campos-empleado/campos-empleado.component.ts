import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/Model/empleados/empleado';

@Component({
  selector: 'app-campos-empleado',
  templateUrl: './campos-empleado.component.html',
  styleUrls: ['./campos-empleado.component.css']
})
export class CamposEmpleadoComponent implements OnInit {

  @Input() empleado: Empleado;

  constructor() { }

  ngOnInit() {

    if (!this.empleado) {
      this.empleado = { tipoContrato: '', rol: '', tipoSalario: '', descuento: '' } as Empleado;
    }

  }

}
