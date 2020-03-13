import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/Model/proyecto';

@Component({
  selector: 'app-datos-proyecto',
  templateUrl: './datos-proyecto.component.html',
  styleUrls: ['./datos-proyecto.component.css']
})
export class DatosProyectoComponent implements OnInit {

  @Input() Proyecto: Proyecto;
  @Output() DatosEnviados = new EventEmitter<string>();
  CodProyecto = '';
  botonGenerar = { texto: 'Generar', estado: true };

  constructor() { }

  ngOnInit() {
  }

  cambiarProyecto() {
    this.Proyecto = undefined;
    this.CodProyecto = '';
    this.DatosEnviados.emit(this.CodProyecto);
    this.botonGenerar.texto = 'Generar';
    this.botonGenerar.estado = true;
  }

  GenerarDNF() {
    this.botonGenerar.texto = 'Generando...';
    this.botonGenerar.estado = false;
  }

}
