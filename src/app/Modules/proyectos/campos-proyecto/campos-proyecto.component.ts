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
  Direccion = [{ id: '', nombre: '' }];
  LineaNegocio = [{ id: '', nombre: '' }];
  TipoProyecto = [{ id: '', nombre: '' }];
  Servicio = [{ id: '', nombre: '' }];

  constructor() { }

  ngOnInit() {
    if (!this.proyecto) {
      this.proyecto = {
        cliente: '',
        ocContrato: '',
        tipoTarifa: '',
        estadoProyecto: '',
        estadoContrato: '',
        moneda: '',
        categoria: '',
        direccion: '',
        lineaNegocio: '',
        tipoproyecto: '',
        servicio: '',
      } as Proyecto;
    }

    // PARA LOS SELECTS
    this.listarClientes();
    this.listarMonedas();
    this.listarTiposTarifa();
    this.listarEstadosProyecto();
    this.listarCategorias();
    this.listarDirecciones();
    this.listarLineasNegocio();
    this.listarTiposProyecto();
    this.listarServicios();
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
      { id: '2', nombre: 'Cerrado' },
      { id: '3', nombre: 'Liberado por operaciones' },
      { id: '4', nombre: 'Pendiente por crear' },
      { id: '5', nombre: 'Suspendido' },
    ];
  }

  listarCategorias() {
    this.Categoria = [
      { id: '1', nombre: 'Costo Proyectos' },
      { id: '2', nombre: 'Costo de ventas' },
      { id: '3', nombre: 'Costo indirecto de operaciones' },
      { id: '4', nombre: 'Costo indirecto Staff' },
    ];
  }

  listarDirecciones() {
    this.Direccion = [
      { id: '1', nombre: 'Soporte' },
      { id: '2', nombre: 'Ingeniería' },
      { id: '3', nombre: 'Aplicaciones' },
      { id: '4', nombre: 'Centro de desarrollo' },
      { id: '5', nombre: 'Administraivo' },
      { id: '6', nombre: 'Comercial verticales' },
      { id: '7', nombre: 'Comercial horizontales' },

    ];
  }

  listarLineasNegocio() {
    this.LineaNegocio = [
      { id: '1', nombre: 'Consultoría de sistemas' },
      { id: '2', nombre: 'Fábrica de desarrollo de software' },
      { id: '3', nombre: 'Integración de soluciones' },
      { id: '4', nombre: 'Servicios y productos de tecnología' },
    ];
  }

  listarTiposProyecto() {
    this.TipoProyecto = [
      { id: '1', nombre: 'Tipo 1' },
      { id: '2', nombre: 'Tipo 2' },
      { id: '3', nombre: 'Tipo 3' },
    ];
  }

  listarServicios() {
    this.Servicio = [
      { id: '1', nombre: 'Servicio 1' },
      { id: '2', nombre: 'Servicio 2' },
      { id: '3', nombre: 'Servicio 3' },
    ]
  }

}
