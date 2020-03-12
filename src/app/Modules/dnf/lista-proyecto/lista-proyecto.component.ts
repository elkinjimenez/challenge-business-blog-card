import { Component, OnInit, Input, Output } from '@angular/core';
import { Proyecto } from 'src/app/Model/proyecto';

@Component({
  selector: 'app-lista-proyecto',
  templateUrl: './lista-proyecto.component.html',
  styleUrls: ['./lista-proyecto.component.css']
})
export class ListaProyectoComponent implements OnInit {

  Proyectos = [] as Proyecto[];
  ProyectoSeleccionado: Proyecto;
  CodProyecto = '';

  constructor() { }

  ngOnInit() {
    this.listaProyectos();
  }

  listaProyectos() {
    let proyecto = {} as Proyecto;
    this.Proyectos = [
      proyecto = {
        codigo: '1234',
        nombre: 'OCP',
        cliente: '1',
        fechaInicioContractual: '2020/02/01',
        fechaFinContractual: '2020/03/30',
        duracionProyecto: '60',
        alcance: 'Servicio de análisis de causa raíz aplica para las PQRS asociadas a los servicios de Claro',
        ocContrato: '1',
        nContratoOc: '4500137750',
        moneda: '1',
        valorTotalAdjudicado: '512214000',
        valorFormalizadoHost: '512214000',
        valorUltimoContrato: '47100000',
        tipoTarifa: '2',
        tarifa: '44500',
        estadoProyecto: '1',
        categoria: '1',
        direccion: '2',
        lineaNegocio: '2',
        tipoproyecto: '1',
        servicio: '2',
        subproyecto: '2342434',
        estadoContrato: '1',
      },
      proyecto = {
        codigo: '123434',
        nombre: 'IMEI',
        cliente: '1',
        fechaInicioContractual: '2020/02/01',
        fechaFinContractual: '2020/03/30',
        duracionProyecto: '60',
        alcance: 'Servicio de análisis de causa raíz aplica para las PQRS asociadas',
        ocContrato: '1',
        nContratoOc: '4500137750',
        moneda: '1',
        valorTotalAdjudicado: '512214000',
        valorFormalizadoHost: '512214000',
        valorUltimoContrato: '47100000',
        tipoTarifa: '2',
        tarifa: '44500',
        estadoProyecto: '1',
        categoria: '1',
        direccion: '2',
        lineaNegocio: '2',
        tipoproyecto: '1',
        servicio: '2',
        subproyecto: '2342434',
        estadoContrato: '1',
      },
    ];
  }

  datosProyecto(codigo) {
    this.ProyectoSeleccionado = this.Proyectos.find(
      proyecto => proyecto.codigo === codigo
    );
  }

  recibirCodProyecto($event) {
    this.CodProyecto = $event;
  }

  async validarProyectoSeleccionado() {
    if (this.CodProyecto === '') {
      this.ProyectoSeleccionado = undefined;
    }
  }

}
