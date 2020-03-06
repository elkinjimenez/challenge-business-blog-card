import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/Model/proyecto';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {

  proyectoSeleccionado: Proyecto;

  proyectos = [] as Proyecto[];

  constructor() { }

  ngOnInit() {
    this.listaProyectos();
  }

  listaProyectos() {
    let proyecto = {} as Proyecto;

    this.proyectos = [
      proyecto = {
        codigo: '1234',
        nombre: 'Proyecto OCP',
        cliente: '1',
        fechaInicioContractual: '2020/02/01',
        fehchaFinContractual: '2020/03/30',
        duracionProyecto: '60',
        servicioAlcance: 'Servicio de análisis de causa raíz aplica para las PQRS asociadas a los servicios de Claro',
        ocContrato: '1',
        nContratoOc: '4500137750',
        moneda: '1',
        valorTotalAdjudicado: '512214000',
        valorFormalizadoHost: '512214000',
        valorUltimoContrato: '47100000',
        tipoTarifa: '2',
        tarifa: '44500',
        estadoProyecto: '1',
        subproyecto: '2342434',
        estadoContrato: '1',
      }
    ];

  }

  verProyecto(p: Proyecto): void {
    this.proyectoSeleccionado = p;
  }

}
