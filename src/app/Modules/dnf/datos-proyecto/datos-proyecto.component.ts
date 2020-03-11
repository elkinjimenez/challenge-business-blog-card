import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/Model/proyecto';

@Component({
  selector: 'app-datos-proyecto',
  templateUrl: './datos-proyecto.component.html',
  styleUrls: ['./datos-proyecto.component.css']
})
export class DatosProyectoComponent implements OnInit {

  @Input() Proyecto: Proyecto;

  constructor() { }

  ngOnInit() {
  }

}
