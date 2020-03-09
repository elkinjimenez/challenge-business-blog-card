import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/Model/empleado';

@Component({
  selector: 'app-campos-empleado',
  templateUrl: './campos-empleado.component.html',
  styleUrls: ['./campos-empleado.component.css']
})
export class CamposEmpleadoComponent implements OnInit {

  @Input() empleado: Empleado;
  Rol = [{ id: '', nombre: '' }];
  TipoSalario = [{ id: '', nombre: '' }];
  Descuento = [{ id: '', nombre: '' }];

  constructor() { }

  ngOnInit() {

    if (!this.empleado) {
      this.empleado = { tipoContrato: '', rol: '', tipoSalario: '', descuento: '' } as Empleado;
    }

    this.listarRoles();
    this.listaTiposSalario();
    this.ListarDescuentos();

  }

  listarRoles() {
    this.Rol = [
      { id: '1', nombre: 'Analista Junior' },
      { id: '2', nombre: 'Analista Senior' },
      { id: '3', nombre: 'Desarrollador Junior' },
      { id: '4', nombre: 'Desarrollador Senior' },
    ];
  }

  listaTiposSalario() {
    this.TipoSalario = [
      { id: '1', nombre: 'Integral' },
      { id: '2', nombre: 'Menor a 10 SMLV' },
    ];
  }

  ListarDescuentos() {
    this.Descuento = [
      { id: '1', nombre: 'Falso' },
      { id: '2', nombre: 'Verdadero' },
    ];
  }

}
