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

  constructor() { }

  ngOnInit() {
  }

  cambiarProyecto() {
    this.Proyecto = undefined;
    this.CodProyecto = '';
    this.DatosEnviados.emit(this.CodProyecto);
  }

}
