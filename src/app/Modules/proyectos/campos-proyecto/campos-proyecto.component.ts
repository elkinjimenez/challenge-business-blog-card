import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/Model/proyectos/proyecto';

@Component({
  selector: 'app-campos-proyecto',
  templateUrl: './campos-proyecto.component.html',
  styleUrls: ['./campos-proyecto.component.css']
})
export class CamposProyectoComponent implements OnInit {

  @Input() proyecto: Proyecto;

  constructor() { }

  ngOnInit() {
    if (!this.proyecto) {
      this.proyecto = { cliente: '', ocContrato: '', tipoTarifa: '', estadoProyecto: '', estadoContrato: '' } as Proyecto;
    }
  }

  restarFechas() {
    if (this.proyecto.fechaInicioContractual !== '' && this.proyecto.fehchaFinContractual !== '') {
      const fechaI = new Date(this.proyecto.fechaInicioContractual).getTime();
      const fechaF = new Date(this.proyecto.fehchaFinContractual).getTime();
      const dias = (fechaF - fechaI) / (1000 * 60 * 60 * 24);
      this.proyecto.duracionProyecto = dias + '';
    }
  }

}
