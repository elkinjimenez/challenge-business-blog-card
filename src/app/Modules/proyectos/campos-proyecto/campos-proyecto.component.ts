import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/Model/proyecto';
import { Cliente } from 'src/app/Model/cliente';

@Component({
  selector: 'app-campos-proyecto',
  templateUrl: './campos-proyecto.component.html',
  styleUrls: ['./campos-proyecto.component.css']
})
export class CamposProyectoComponent implements OnInit {

  @Input() proyecto: Proyecto;
  Clientes = [] as Cliente[];
  Monedas = [{ id: '', nombre: '' }];
  TipoTarifa = [{ id: '', nombre: '' }];
  EstadoProyecto = [{ id: '', nombre: '' }];
  Categoria = [{ id: '', nombre: '' }];

  constructor() { }

  ngOnInit() {
    if (!this.proyecto) {
      this.proyecto = { cliente: '', ocContrato: '', tipoTarifa: '', estadoProyecto: '', estadoContrato: '', moneda: '' } as Proyecto;
    }

    // PARA LOS SELECTS
    this.listarClientes();
    this.listarMonedas();
    this.listarTiposTarifa();
    this.listarEstadosProyecto();
    this.listarCategorias();
  }

  restarFechas() {
    if (this.proyecto.fechaInicioContractual !== '' && this.proyecto.fechaFinContractual !== '') {
      const fechaI = new Date(this.proyecto.fechaInicioContractual).getTime();
      const fechaF = new Date(this.proyecto.fechaFinContractual).getTime();
      const dias = (fechaF - fechaI) / (1000 * 60 * 60 * 24);
      if (dias <= 0) {
        this.proyecto.fechaFinContractual = '';
        this.proyecto.duracionProyecto = '';
      } else {
        this.proyecto.duracionProyecto = dias + '';
      }
    }
  }

  listarClientes() {
    for (let i = 0; i < 20; i++) {
      this.Clientes[i] = { id: '' + i, nombres: 'INTELISIS ASPEL SA DE CV ' + i };
    }
  }

  listarMonedas() {
    this.Monedas = [
      { id: '1', nombre: 'COP' },
      { id: '2', nombre: 'USD' },
      { id: '3', nombre: 'MXN' },
      { id: '4', nombre: 'EUR' },
    ];
  }

  listarTiposTarifa() {
    this.TipoTarifa = [
      { id: '1', nombre: 'Hora' },
      { id: '2', nombre: 'Mensual' },
      { id: '3', nombre: 'Rol' },
      { id: '4', nombre: 'Entregables' },
      { id: '5', nombre: 'Células' },
      { id: '6', nombre: 'Precios fijos' },
    ];
  }

  listarEstadosProyecto() {
    this.EstadoProyecto = [
      { id: '1', nombre: 'Activo' },
      { id: '1', nombre: 'Cerrado' },
      { id: '1', nombre: 'Liberado por operaciones' },
      { id: '1', nombre: 'Pendiente por crear' },
      { id: '1', nombre: 'Suspendido' },
    ];
  }

  listarCategorias() {
    this.Categoria = [
      { id: '1', nombre: 'Costo Proyectos' },
      { id: '1', nombre: 'Costo de ventas' },
      { id: '1', nombre: 'Costo indirecto de operaciones' },
      { id: '1', nombre: 'Costo indirecto Staff' },
    ]
  }

}
