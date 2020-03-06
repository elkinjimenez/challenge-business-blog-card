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

  constructor() { }

  ngOnInit() {
    if (!this.proyecto) {
      this.proyecto = { cliente: '', ocContrato: '', tipoTarifa: '', estadoProyecto: '', estadoContrato: '' } as Proyecto;
    }

    // PARA LOS SELECTS
    this.listarClientes();
  }

  restarFechas() {
    if (this.proyecto.fechaInicioContractual !== '' && this.proyecto.fehchaFinContractual !== '') {
      const fechaI = new Date(this.proyecto.fechaInicioContractual).getTime();
      const fechaF = new Date(this.proyecto.fehchaFinContractual).getTime();
      const dias = (fechaF - fechaI) / (1000 * 60 * 60 * 24);
      this.proyecto.duracionProyecto = dias + '';
    }
  }

  listarClientes() {
    for (let i = 0; i < 20; i++) {
      this.Clientes[i] = { id: '1', nombres: 'INTELISIS ASPEL SA DE CV ' + i };
    }
  }

}
