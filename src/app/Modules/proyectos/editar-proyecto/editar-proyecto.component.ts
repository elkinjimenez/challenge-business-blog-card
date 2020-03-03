import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/Model/proyectos/proyecto';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  @Input() proyecto: Proyecto;

  constructor() { }

  ngOnInit() {
  }

}
