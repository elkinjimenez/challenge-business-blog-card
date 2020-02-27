import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  constructor() { }

  fechaInicio = { fecha: '', mensaje: '', color: '', estado: false };
  fechaFin = { fecha: '', mensaje: '', color: '', estado: false };
  duracionProyecto = { numero: 0, dias: '0', mensaje: '', color: '', estado: false };

  ngOnInit() {
  }

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
