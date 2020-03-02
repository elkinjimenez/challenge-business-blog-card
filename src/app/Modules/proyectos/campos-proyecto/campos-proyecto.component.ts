import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campos-proyecto',
  templateUrl: './campos-proyecto.component.html',
  styleUrls: ['./campos-proyecto.component.css']
})
export class CamposProyectoComponent implements OnInit {

  fechaInicio = { fecha: '', mensaje: '', color: '', estado: false };
  fechaFin = { fecha: '', mensaje: '', color: '', estado: false };
  duracionProyecto = { numero: 0, dias: '0', mensaje: '', color: '', estado: false };

  constructor() { }

  ngOnInit() { }

  restarFechas() {
    if (this.fechaFin.fecha !== '' && this.fechaInicio.fecha !== '') {
      const fechaI = new Date(this.fechaInicio.fecha).getTime();
      const fechaF = new Date(this.fechaFin.fecha).getTime();
      const dias = (fechaF - fechaI) / (1000 * 60 * 60 * 24);
      this.duracionProyecto.numero = dias;
      this.duracionProyecto.dias = dias + ' días.';
    }
  }

}
