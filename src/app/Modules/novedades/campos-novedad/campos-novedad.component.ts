import { Component, OnInit, Input } from '@angular/core';
import { Novedad } from 'src/app/Model/novedades/novedad';

@Component({
  selector: 'app-campos-novedad',
  templateUrl: './campos-novedad.component.html',
  styleUrls: ['./campos-novedad.component.css']
})
export class CamposNovedadComponent implements OnInit {

  @Input() novedad: Novedad;

  constructor() { }

  ngOnInit() {
    if (!this.novedad) {
      this.novedad = { tipoNovedad: '' } as Novedad;
    }
  }

}
